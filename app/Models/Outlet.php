<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Outlet extends Model
{
    protected $fillable = ['brand_id', 'name', 'address', 'latitude', 'longitude'];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
