<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OutletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('outlets')->insert([
            [
                'name' => 'Outlet 1',
                'address' => '123 Main St, City, Country',
                'latitude' => 12.345678,
                'longitude' => 98.765432,
                'brand_id' => 1,
            ],
            [
                'name' => 'Outlet 2',
                'address' => '456 Elm St, City, Country',
                'latitude' => 12.345679,
                'longitude' => 98.765433,
                'brand_id' => 2,
            ],
            [
                'name' => 'Outlet 3',
                'address' => '789 Oak St, City, Country',
                'latitude' => 12.345680,
                'longitude' => 98.765434,
                'brand_id' => 3,
            ],
            [
                'name' => 'Outlet 4',
                'address' => '101 Pine St, City, Country',
                'latitude' => 12.345681,
                'longitude' => 98.765435,
                'brand_id' => 1,
            ],
            [
                'name' => 'Outlet 5',
                'address' => '202 Maple St, City, Country',
                'latitude' => 12.345682,
                'longitude' => 98.765436,
                'brand_id' => 2, // Mengacu pada Brand B
            ],
        ]);
    }
}
