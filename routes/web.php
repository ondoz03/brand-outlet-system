<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\OutletController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return inertia('Home');
// });

// Route::get('/', function () {
//     return Inertia::render('Home', ['name' => 'Gilang']);
// });

// Route::get('/about', function () {
//     return inertia('About/About');
// });

// Route::inertia('/about', 'About');


Route::resource('brands', BrandController::class);
Route::resource('outlets', OutletController::class);
