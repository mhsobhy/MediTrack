<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\Api\MedicineController;
use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\PrescriptionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // Medicine routes (accessible to all authenticated users)
    Route::get('/medicines', [MedicineController::class, 'index']);
    Route::get('/medicines/{medicine}', [MedicineController::class, 'show']);
    Route::get('/medicines-categories', [MedicineController::class, 'categories']);

    // Doctor routes
    Route::prefix('doctors')->middleware('role:doctor')->group(function () {
        Route::get('/', [DoctorController::class, 'index']);
        Route::get('/patients', [DoctorController::class, 'patients']);
        Route::get('/{doctor}', [DoctorController::class, 'show']);
        Route::put('/{doctor}', [DoctorController::class, 'update']);
        Route::delete('/{doctor}', [DoctorController::class, 'destroy']);
        
        // Prescription management for doctors
        Route::post('/prescriptions', [PrescriptionController::class, 'store']);
        Route::put('/prescriptions/{prescription}', [PrescriptionController::class, 'update']);
        Route::delete('/prescriptions/{prescription}', [PrescriptionController::class, 'destroy']);
    });

    // Patient routes
    Route::prefix('patients')->middleware('role:patient')->group(function () {
        Route::get('/profile', [PatientController::class, 'profile']);
        Route::put('/profile', [PatientController::class, 'updateProfile']);
        Route::get('/prescription-history', [PrescriptionController::class, 'patientHistory']);
    });

    // Prescription routes (accessible to both doctors and patients)
    Route::get('/prescriptions', [PrescriptionController::class, 'index']);
    Route::get('/prescriptions/{prescription}', [PrescriptionController::class, 'show']);
});