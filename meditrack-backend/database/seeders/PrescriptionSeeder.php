<?php

namespace Database\Seeders;

use App\Models\Prescription;
use App\Models\User;
use App\Models\Medicine;
use Illuminate\Database\Seeder;

class PrescriptionSeeder extends Seeder
{
    public function run(): void
    {
        $doctors = User::where('role', 'doctor')->get();
        $patients = User::where('role', 'patient')->get();
        $medicines = Medicine::all();

        $frequencies = ['once_daily', 'twice_daily', 'thrice_daily', 'four_times_daily', 'as_needed'];
        $statuses = ['active', 'completed', 'cancelled'];

        for ($i = 0; $i < 20; $i++) {
            $doctor = $doctors->random();
            $patient = $patients->random();
            $medicine = $medicines->random();
            
            $prescribedDate = fake()->dateTimeBetween('-6 months', 'now');
            $startDate = fake()->dateTimeBetween($prescribedDate, '+1 week');
            $durationDays = rand(7, 30);
            $endDate = (clone $startDate)->modify("+{$durationDays} days");

            Prescription::create([
                'doctor_id' => $doctor->id,
                'patient_id' => $patient->id,
                'medicine_name' => $medicine->name,
                'dosage' => fake()->randomElement(['250mg', '500mg', '1g', '5mg', '10mg', '20mg', '1 tablet', '2 tablets']),
                'instructions' => fake()->randomElement([
                    'Take with food',
                    'Take on empty stomach',
                    'Take before bedtime',
                    'Take with plenty of water',
                    'Avoid alcohol while taking this medication',
                    'Complete the full course even if feeling better',
                ]),
                'prescribed_date' => $prescribedDate->format('Y-m-d'),
                'start_date' => $startDate->format('Y-m-d'),
                'end_date' => $endDate->format('Y-m-d'),
                'duration_days' => $durationDays,
                'frequency' => fake()->randomElement($frequencies),
                'status' => fake()->randomElement($statuses),
                'notes' => fake()->optional()->sentence(),
            ]);
        }
    }
}
