<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PrescriptionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'doctor' => new UserResource($this->whenLoaded('doctor')),
            'patient' => new UserResource($this->whenLoaded('patient')),
            'doctor_name' => $this->doctor?->name,
            'patient_name' => $this->patient?->name,
            'medicine_name' => $this->medicine_name,
            'dosage' => $this->dosage,
            'instructions' => $this->instructions,
            'prescribed_date' => $this->prescribed_date?->format('Y-m-d'),
            'start_date' => $this->start_date?->format('Y-m-d'),
            'end_date' => $this->end_date?->format('Y-m-d'),
            'duration_days' => $this->duration_days,
            'frequency' => $this->frequency,
            'status' => $this->status,
            'notes' => $this->notes,
            'created_at' => $this->created_at?->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at?->format('Y-m-d H:i:s'),
        ];
    }
}
