<?php

use App\Http\Controllers\Api\OutletApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/outlets/nearest', [OutletApiController::class, 'nearest']);
