<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePrescriptionRequest extends FormRequest
{
    public function authorize(): bool
    {
        $prescription = $this->route('prescription');
        return auth()->user()->role === 'doctor' && 
               auth()->id() === $prescription->doctor_id;
    }

    public function rules(): array
    {
        return [
            'medicine_name' => ['sometimes', 'string', 'max:255'],
            'dosage' => ['sometimes', 'string', 'max:100'],
            'instructions' => ['sometimes', 'string'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date', 'after:start_date'],
            'duration_days' => ['nullable', 'integer', 'min:1'],
            'frequency' => ['sometimes', Rule::in(['once_daily', 'twice_daily', 'thrice_daily', 'four_times_daily', 'as_needed'])],
            'status' => ['sometimes', Rule::in(['active', 'completed', 'cancelled'])],
            'notes' => ['nullable', 'string'],
        ];
    }
}
