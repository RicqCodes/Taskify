<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;


class CreateProjectRequest extends BaseRequest
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
        /** 
         * There are 3 status:
         * 1. Not started = '0'
         * 2. In Progress = '1'
         * 3. Completed = '2'
         */

        return [
            'project_name' => ['string', 'required', 'max:56', 'min:4', 'unique:projects,project_name,NULL,id,user_id,' . auth()->id()],
            'project_description' => ['string', 'required', 'max:255', 'min:4'],
            'due_date' => ['required', 'date'],
            'priority' => ['required', 'string'],
            'status' => ['required', 'string'],
            'tags' => ['array'],
            'tags.*' => ['string']
        ];
    }

    public function failedValidation(Validator $validator) {
        return parent::createFailedValidation($validator, $validator->errors()->first());
     }
}
