<?php

namespace Tests\Unit;

use App\Models\Brand;
use App\Models\Outlet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use PHPUnit\Framework\Attributes\Test;

class OutletsTest extends TestCase
{

    #[Test]
    public function it_creates_an_outlet()
    {
        $brandData = [
            'name' => 'Test Brand',
        ];

        $brand = Brand::create($brandData);

        $outletData = [
            'brand_id' => $brand->id,
            'name' => 'Test Outlet',
            'address' => 'Testing Address',
            'latitude' => 12.34,
            'longitude' => 56.78,
        ];

        $outlet = Outlet::create($outletData);

        $this->assertDatabaseHas('outlets', [
            'name' => 'Test Outlet',
            'latitude' => 12.34,
            'longitude' => 56.78,
            'brand_id' => $brand->id,
        ]);
    }

    #[Test]
    public function it_updates_an_outlet()
    {
        $brandData = [
            'name' => 'Test Brand',
        ];

        $brand = Brand::create($brandData);

        $outletData = [
            'brand_id' => $brand->id,
            'name' => 'Test Outlet',
            'address' => 'Testing Address',
            'latitude' => 12.34,
            'longitude' => 56.78,
        ];

        $outlet = Outlet::create($outletData);

        $updatedData = [
            'name' => 'Updated Outlet',
            'latitude' => 13.45,
            'longitude' => 67.89,
        ];

        $outlet->update($updatedData);

        $this->assertDatabaseHas('outlets', [
            'id' => $outlet->id,
            'name' => 'Updated Outlet',
            'latitude' => 13.45,
            'longitude' => 67.89,
        ]);
    }

    #[Test]
    public function it_deletes_an_outlet()
    {
        $brandData = [
            'name' => 'Test Brand',
        ];

        $brand = Brand::create($brandData);

        $outletData = [
            'brand_id' => $brand->id,
            'name' => 'Test Outlet',
            'address' => 'Testing Address',
            'latitude' => 12.34,
            'longitude' => 56.78,
        ];

        $outlet = Outlet::create($outletData);

        $outlet->delete();

        $this->assertDatabaseMissing('outlets', [
            'id' => $outlet->id
        ]);
    }
}
