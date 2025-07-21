<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class PatientController extends Controller
{
    public function profile()
    {
        return new UserResource(auth()->user());
    }

    public function updateProfile(UpdateUserRequest $request)
    {
        $user = auth()->user();
        $user->update($request->validated());

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => new UserResource($user->fresh())
        ]);
    }
}