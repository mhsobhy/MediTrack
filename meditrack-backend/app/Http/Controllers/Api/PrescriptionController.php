<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePrescriptionRequest;
use App\Http\Requests\UpdatePrescriptionRequest;
use App\Http\Resources\PrescriptionResource;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();
        $query = Prescription::with(['doctor', 'patient']);

        if ($user->role === 'doctor') {
            $query->forDoctor($user->id);
        } else {
            $query->forPatient($user->id);
        }

        // Filters
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('patient_id') && $user->role === 'doctor') {
            $query->where('patient_id', $request->patient_id);
        }

        $prescriptions = $query->orderBy('created_at', 'desc')->paginate(15);

        return PrescriptionResource::collection($prescriptions);
    }

    public function store(CreatePrescriptionRequest $request)
    {
        $prescription = Prescription::create([
            'doctor_id' => auth()->id(),
            'patient_id' => $request->patient_id,
            'medicine_name' => $request->medicine_name,
            'dosage' => $request->dosage,
            'instructions' => $request->instructions,
            'prescribed_date' => $request->prescribed_date,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'duration_days' => $request->duration_days,
            'frequency' => $request->frequency,
            'notes' => $request->notes,
        ]);

        $prescription->load(['doctor', 'patient']);

        return response()->json([
            'message' => 'Prescription created successfully',
            'prescription' => new PrescriptionResource($prescription)
        ], 201);
    }

    public function show(Prescription $prescription)
    {
        $user = auth()->user();

        // Check authorization
        if ($user->role === 'doctor' && $prescription->doctor_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        if ($user->role === 'patient' && $prescription->patient_id !== $user->id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $prescription->load(['doctor', 'patient']);

        return new PrescriptionResource($prescription);
    }

    public function update(UpdatePrescriptionRequest $request, Prescription $prescription)
    {
        $prescription->update($request->validated());
        $prescription->load(['doctor', 'patient']);

        return response()->json([
            'message' => 'Prescription updated successfully',
            'prescription' => new PrescriptionResource($prescription)
        ]);
    }

    public function destroy(Prescription $prescription)
    {
        if (auth()->id() !== $prescription->doctor_id) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $prescription->delete();

        return response()->json([
            'message' => 'Prescription deleted successfully'
        ]);
    }

    public function patientHistory(Request $request)
    {
        $user = auth()->user();

        if ($user->role !== 'patient') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $prescriptions = Prescription::forPatient($user->id)
            ->with('doctor')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return PrescriptionResource::collection($prescriptions);
    }
}