<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreatePrescriptionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->user()->role === 'doctor';
    }

    public function rules(): array
    {
        return [
            'patient_id' => ['required', 'exists:users,id', function ($attribute, $value, $fail) {
                $patient = \App\Models\User::find($value);
                if ($patient && $patient->role !== 'patient') {
                    $fail('The selected patient must have a patient role.');
                }
            }],
            'medicine_name' => ['required', 'string', 'max:255'],
            'dosage' => ['required', 'string', 'max:100'],
            'instructions' => ['required', 'string'],
            'prescribed_date' => ['required', 'date'],
            'start_date' => ['nullable', 'date', 'after_or_equal:prescribed_date'],
            'end_date' => ['nullable', 'date', 'after:start_date'],
            'duration_days' => ['nullable', 'integer', 'min:1'],
            'frequency' => ['required', Rule::in(['once_daily', 'twice_daily', 'thrice_daily', 'four_times_daily', 'as_needed'])],
            'notes' => ['nullable', 'string'],
        ];
    }
}
