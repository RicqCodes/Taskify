<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPassword;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Models\UserInfo;
use App\Traits\HttpResponses;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;


class AuthController extends Controller
{

    use HttpResponses;
    public function signup(SignupRequest $request) {
       $credentials = $request->validated();
            $user = User::create([
                'name' => $credentials['name'],
                'email' => $credentials['email'],
                'password' => Hash::make($credentials['password']),
            ]);

            UserInfo::create([
                'user_id' => $user->id,
                'profile_picture' => "https://avatars.dicebear.com/api/bottts/$user->id.svg"
            ]);
            
            Auth::login($user);
            return $this->success(['user' => $user], 'Account created successfully');
       
    }

    public function login(LoginRequest $request) {
      $credentials = $request->validated();
      if(!Auth::attempt($credentials)) {
        return $this->error('email', 'The credentials do not match our records');
      } 
      $request->session()->regenerate();
      return $this->success([Auth::user()], 'Logged in successfully');
    }

    public function logout(Request $request) {
        return response()->json('This is the logout reponse');
    }

    public function forgotPassword(ForgotPassword $request)
{
  $status = Password::sendResetLink($request->only('email'));

  if ($status === Password::RESET_LINK_SENT) {
      return $this->success('success', 'Password reset link sent successfully');
  }

  return $this->error('failed', 'Unable to send password reset link', 500);
}

    public function resetPassword(ForgotPassword $request) {
     
      $status = Password::reset($request->only('email', 'password', 'token'), 
      function (User $user, string $password) {
        $user->forceFill([
          'password' => Hash::make($password)
        ]); //->setRememberToken(Str::random(60))

        $user->save();

        event(new PasswordReset($user));
      }
    );

    if($status === Password::PASSWORD_RESET) {
      return $this->success('success', 'Password changed successfully');
    }
    return $this->error('failed', "Unable to reset password, check that link hasn't expired");
    }
}
