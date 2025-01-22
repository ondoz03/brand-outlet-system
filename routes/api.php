<?php

use App\Http\Controllers\Api\OutletApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\OutletController;

Route::apiResource('brands', BrandController::class);
Route::apiResource('outlets', OutletController::class);

Route::get('/nearest/outlets', [OutletApiController::class, 'nearest']);
