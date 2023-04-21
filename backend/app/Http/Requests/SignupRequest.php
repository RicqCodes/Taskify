<?php

namespace App\Http\Requests;

use Doctrine\Inflector\Rules\Portuguese\Rules;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Contracts\Validation\Validator;

class SignupRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' =>['required', 'string', 'max:55'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'min:8', 'max:24'],
            'confirmPassword' => ['required', 'same:password'],
        ];
    }

    public function failedValidation(Validator $validator) {
        return parent::createFailedValidation($validator, $validator->errors()->first());
     }
}
