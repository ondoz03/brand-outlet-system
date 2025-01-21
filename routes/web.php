<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\OutletController;
use Illuminate\Support\Facades\Route;

Route::resource('brands', BrandController::class);
Route::resource('outlets', OutletController::class);
