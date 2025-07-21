<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected static ?string $password;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'role' => fake()->randomElement(['doctor', 'patient']),
            'phone' => '+970' . fake()->randomNumber(8, true),
            'address' => fake()->address(),
            'date_of_birth' => fake()->dateTimeBetween('-80 years', '-18 years'),
            'gender' => fake()->randomElement(['male', 'female']),
            'remember_token' => Str::random(10),
        ];
    }

    public function doctor(): static
    {
        return $this->state(fn (array $attributes) => [
            'role' => 'doctor',
            'specialization' => fake()->randomElement([
                'Cardiology', 'Dermatology', 'Emergency Medicine', 'Family Medicine',
                'Internal Medicine', 'Neurology', 'Oncology', 'Orthopedics',
                'Pediatrics', 'Psychiatry', 'Radiology', 'Surgery'
            ]),
            'license_number' => 'DOC' . fake()->unique()->numberBetween(1000, 9999),
        ]);
    }

    public function patient(): static
    {
        return $this->state(fn (array $attributes) => [
            'role' => 'patient',
            'specialization' => null,
            'license_number' => null,
        ]);
    }

    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}