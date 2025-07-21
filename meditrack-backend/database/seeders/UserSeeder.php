<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Create 5 doctors
        $doctors = [
            [
                'name' => 'Dr. Ahmed Hassan',
                'email' => 'ahmed.hassan@meditrack.com',
                'specialization' => 'Cardiology',
                'license_number' => 'DOC001',
            ],
            [
                'name' => 'Dr. Fatima Al-Zahra',
                'email' => 'fatima.alzahra@meditrack.com',
                'specialization' => 'Pediatrics',
                'license_number' => 'DOC002',
            ],
            [
                'name' => 'Dr. Omar Khalil',
                'email' => 'omar.khalil@meditrack.com',
                'specialization' => 'Internal Medicine',
                'license_number' => 'DOC003',
            ],
            [
                'name' => 'Dr. Layla Mansour',
                'email' => 'layla.mansour@meditrack.com',
                'specialization' => 'Dermatology',
                'license_number' => 'DOC004',
            ],
            [
                'name' => 'Dr. Yusuf Ibrahim',
                'email' => 'yusuf.ibrahim@meditrack.com',
                'specialization' => 'Orthopedics',
                'license_number' => 'DOC005',
            ],
        ];

        foreach ($doctors as $doctor) {
            User::create([
                'name' => $doctor['name'],
                'email' => $doctor['email'],
                'password' => Hash::make('password123'),
                'role' => 'doctor',
                'specialization' => $doctor['specialization'],
                'license_number' => $doctor['license_number'],
                'phone' => '+970' . rand(50000000, 59999999),
                'address' => 'Gaza City, Palestine',
                'gender' => rand(0, 1) ? 'male' : 'female',
                'date_of_birth' => fake()->dateTimeBetween('-50 years', '-25 years')->format('Y-m-d'),
            ]);
        }

        // Create 10 patients
        $patients = [
            'Mohammad Salim',
            'Aisha Qasemi',
            'Hassan Abdullah',
            'Nour Hijazi',
            'Khalil Nasser',
            'Rania Habib',
            'Samer Odeh',
            'Dina Khoury',
            'Tariq Shamali',
            'Lina Masri',
        ];

        foreach ($patients as $index => $name) {
            User::create([
                'name' => $name,
                'email' => strtolower(str_replace(' ', '.', $name)) . '@patient.com',
                'password' => Hash::make('password123'),
                'role' => 'patient',
                'phone' => '+970' . rand(50000000, 59999999),
                'address' => fake()->randomElement(['Gaza City', 'Khan Younis', 'Rafah', 'Jabalia', 'Beit Hanoun']) . ', Palestine',
                'gender' => $index % 2 === 0 ? 'male' : 'female',
                'date_of_birth' => fake()->dateTimeBetween('-80 years', '-18 years')->format('Y-m-d'),
            ]);
        }
    }
}
