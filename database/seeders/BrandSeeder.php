<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('brands')->insert([
            [
                'name' => 'Outlet A',
                'slug' => 'outlet-a',
                'description' => 'This is Outlet A, located in city center.',
            ],
            [
                'name' => 'Outlet B',
                'slug' => 'outlet-b',
                'description' => 'This is Outlet B, a popular outlet in the area.',
            ],
            [
                'name' => 'Outlet C',
                'slug' => 'outlet-c',
                'description' => 'Outlet C provides various services and products.',
            ],
            [
                'name' => 'Outlet D',
                'slug' => 'outlet-d',
                'description' => 'Outlet D is a new outlet in the city.',
            ],
        ]);
    }
}
