<?php

namespace App\Http\Requests;

use App\Traits\HttpResponses;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;

class BaseRequest extends FormRequest
{
    use HttpResponses;
   public function failedValidation(Validator $validator) {
      return $this->createFailedValidation($validator);
   }

   public function createFailedValidation(Validator $validator, string $err_message = 'Invalid credentials supplied!') {
    
    $response = $this->error($validator->errors(), $err_message, 422);
    throw new ValidationException($validator, $response);
   }
}
