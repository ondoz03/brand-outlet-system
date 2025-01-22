<?php

namespace App\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Outlet extends Model
{
    use HasFactory, HasSlug;

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    protected $fillable = [
        'slug',
        'brand_id',
        'name',
        'address',
        'longitude',
        'latitude',
        'distance_miles',
        'distance_kilometer'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
