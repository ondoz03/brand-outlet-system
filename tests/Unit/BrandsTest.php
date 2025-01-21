<?php

namespace Tests\Unit;

use App\Models\Brand;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class BrandsTest extends TestCase
{


    #[Test]
    public function it_creates_a_brand()
    {
        $brandData = [
            'name' => 'Test Brand',
        ];

        $brand = Brand::create($brandData);

        $this->assertDatabaseHas('brands', [
            'name' => 'Test Brand',
        ]);
    }

    #[Test]
    public function it_updates_a_brand()
    {
        $brandData = [
            'name' => 'Test Brand',
        ];

        $brand = Brand::create($brandData);

        $updatedData = [
            'name' => 'Updated Brand',
        ];

        $brand->update($updatedData);

        $this->assertDatabaseHas('brands', [
            'id' => $brand->id,
            'name' => 'Updated Brand',
        ]);
    }

    #[Test]
    public function it_deletes_a_brand()
    {
        $brandData = [
            'name' => 'Test Brand',
        ];

        $brand = Brand::create($brandData);

        $brand->delete();

        $this->assertDatabaseMissing('brands', [
            'id' => $brand->id,
        ]);
    }
}
