<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Outlet;


class OutletApiController extends Controller
{
    public function nearest(Request $request)
    {
        $request->validate([
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $latitude = $request->latitude;
        $longitude = $request->longitude;
        $outlets = Outlet::all();
        $nearestOutlet = null;
        $shortestDistance = PHP_INT_MAX;

        foreach ($outlets as $outlet) {
            $distance = self::calculateDistance($latitude, $longitude, $outlet->latitude, $outlet->longitude);

            if ($distance < $shortestDistance) {
                $shortestDistance = $distance;
                $nearestOutlet = $outlet;
            }
        }

        if ($nearestOutlet) {
            return response()->json([
                'outlet' => $nearestOutlet,
                'distance' => round($shortestDistance, 2)
            ]);
        } else {

            return response()->json([
                'message' => 'Outlet tidak ditemukan'
            ], 404);
        }
    }

    function calculateDistance($lat1, $lon1, $lat2, $lon2)
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

        return $earthRadius * $c; // Jarak dalam kilometer
    }
}
