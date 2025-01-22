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
                'brand_id' => 1,
                'slug' => 'outlet-a',
                'name' => 'Outlet A',
                'address' => 'Jl. Raya No. 1, Kota A',
                'longitude' => 106.789012,
                'latitude' => -6.123456,
                'distance_miles' => 10.5,
                'distance_kilometer' => 16.9,
            ],
            [
                'brand_id' => 2,
                'slug' => 'outlet-b',
                'name' => 'Outlet B',
                'address' => 'Jl. Merdeka No. 2, Kota B',
                'longitude' => 107.654321,
                'latitude' => -6.654321,
                'distance_miles' => 5.2,
                'distance_kilometer' => 8.4,
            ],
            [
                'brand_id' => 3,
                'slug' => 'outlet-c',
                'name' => 'Outlet C',
                'address' => 'Jl. Sudirman No. 3, Kota C',
                'longitude' => 108.123456,
                'latitude' => -6.789012,
                'distance_miles' => 20.7,
                'distance_kilometer' => 33.3,
            ],
            [
                'brand_id' => 1,
                'slug' => 'outlet-d',
                'name' => 'Outlet D',
                'address' => 'Jl. Diponegoro No. 4, Kota D',
                'longitude' => 109.876543,
                'latitude' => -6.987654,
                'distance_miles' => null,
                'distance_kilometer' => null,
            ],
        ]);
    }
}
