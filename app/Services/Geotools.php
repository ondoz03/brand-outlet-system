<?php

namespace App\Services;

class Geotools
{
    /**
     * @param mixed $longitude1
     * @param mixed $longitude2
     * @param mixed $latitude1
     * @param mixed $latitude2
     * @return string
     */
    public function calculate_distance_between(mixed $longitude1, mixed $longitude2, mixed $latitude1, mixed $latitude2, string $unit = 'kilometer'): string
    {
        $theta = $longitude1 - $longitude2;

        $distance = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta)));

        $distance = acos($distance);
        $distance = rad2deg($distance);
        // Distance in miles
        $distance = $distance * 60 * 1.1515;
        // Convert to kilometers
        if ($unit === 'kilometer') {
            $distance = $distance * 1.609344;
        }
        return (round($distance, 2));
    }

    public function calculate_from_monas(mixed $latitude1, mixed $longitude1, string $unit = 'kilometer')
    {
        $latitude2 = config('services.antikode.lt');
        $longitude2 = config('services.antikode.lg');
        return $this->calculate_distance_between($longitude1, $longitude2, $latitude1, $latitude2, $unit);
    }
}
