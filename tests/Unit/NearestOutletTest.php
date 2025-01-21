<?php

namespace Tests\Feature;

use App\Models\Outlet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class NearestOutletTest extends TestCase
{

    /**
     * Test the nearest outlet calculation.
     */
    public function test_nearest_outlet()
    {

        $userLatitude = -6.210000;
        $userLongitude = 106.820000;

        $response = $this->getJson("/api/outlets/nearest?latitude={$userLatitude}&longitude={$userLongitude}");

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'outlet' => [
                'id',
                'name',
                'latitude',
                'longitude',
            ],
            'distance',
        ]);


        $data = $response->json();
        $this->assertTrue($data['distance'] > 0);
    }

    /**
     * Test calculateDistance helper method.
     */
    public function test_calculate_distance()
    {

        $lat1 = -6.200000;
        $lon1 = 106.816666;
        $lat2 = -6.300000;
        $lon2 = 106.850000;


        $distance = $this->calculateDistance($lat1, $lon1, $lat2, $lon2);


        $this->assertNotNull($distance);
        $this->assertGreaterThan(0, $distance);
        $this->assertLessThan(20, $distance);
    }

    /**
     * Calculate distance between two coordinates (copied from the main method).
     */
    private function calculateDistance($lat1, $lon1, $lat2, $lon2)
    {
        $earthRadius = 6371;
        $latFrom = deg2rad($lat1);
        $lonFrom = deg2rad($lon1);
        $latTo = deg2rad($lat2);
        $lonTo = deg2rad($lon2);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $a = sin($latDelta / 2) * sin($latDelta / 2) +
            cos($latFrom) * cos($latTo) *
            sin($lonDelta / 2) * sin($lonDelta / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }
}
