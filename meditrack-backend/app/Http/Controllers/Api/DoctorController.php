<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = User::doctors()->paginate(15);
        
        return UserResource::collection($doctors);
    }

    public function show(User $doctor)
    {
        if ($doctor->role !== 'doctor') {
            return response()->json(['message' => 'User is not a doctor'], 404);
        }

        return new UserResource($doctor);
    }

    public function update(UpdateUserRequest $request, User $doctor)
    {
        if ($doctor->role !== 'doctor') {
            return response()->json(['message' => 'User is not a doctor'], 404);
        }

        $doctor->update($request->validated());

        return response()->json([
            'message' => 'Doctor updated successfully',
            'doctor' => new UserResource($doctor->fresh())
        ]);
    }

    public function destroy(User $doctor)
    {
        if ($doctor->role !== 'doctor') {
            return response()->json(['message' => 'User is not a doctor'], 404);
        }

        $doctor->delete();

        return response()->json([
            'message' => 'Doctor deleted successfully'
        ]);
    }

    public function patients()
    {
        $patients = User::patients()
            ->whereHas('prescriptionsAsPatient', function ($query) {
                $query->where('doctor_id', auth()->id());
            })
            ->with(['prescriptionsAsPatient' => function ($query) {
                $query->where('doctor_id', auth()->id())
                      ->orderBy('created_at', 'desc');
            }])
            ->paginate(15);

        return UserResource::collection($patients);
    }
}
