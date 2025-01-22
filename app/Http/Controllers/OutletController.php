<?php

namespace App\Http\Controllers;

use App\Models\Outlet;
use App\Models\Brand;
use App\Services\Geotools;
use Inertia\Inertia;

use Illuminate\Http\Request;

class OutletController extends Controller
{
    protected $geo;
    public function __construct(Geotools $geo)
    {
        $this->geo = $geo;
    }

    public function index()
    {
        $outlets = Outlet::with('brand')->paginate(5);
        $brands = Brand::all();
        return Inertia::render('Outlets/Index', ['outlets' => $outlets, 'brands' => $brands]);
    }

    public function create()
    {
        $brands = Brand::all(); // Ambil semua data brand untuk dropdown
        return inertia('Outlets/Create', ['brands' => $brands]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'brand_id' => 'required|exists:brands,id',
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $distKm = $this->geo->calculate_from_monas($request->latitude, $request->longitude);
        $distMiles = $this->geo->calculate_from_monas($request->latitude, $request->longitude, 'miles');
        Outlet::create(
            $request->all() + [
                'distance_miles' => $distMiles,
                'distance_kilometer' => $distKm
            ]
        );
        return redirect()->route('outlets.index')->with('message', 'Outlet created successfully!');
    }

    public function edit(Outlet $outlet)
    {
        $brands = Brand::all(); // Ambil semua data brand untuk dropdown
        return inertia('Outlets/Edit', [
            'outlet' => $outlet,
            'brands' => $brands
        ]);
    }

    public function show($slug)
    {
        $outlet = Outlet::where('slug', $slug)->firstOrFail();
        return inertia('Outlets/Detail', ['outlet' => $outlet->load('brand')]);
    }

    public function update(Request $request, Outlet $outlet)
    {
        $request->validate([
            'brand_id' => 'required|exists:brands,id',
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);


        $distKm = $this->geo->calculate_from_monas($request->latitude, $request->longitude);
        $distMiles = $this->geo->calculate_from_monas($request->latitude, $request->longitude, 'miles');

        $outlet->update($request->all() + [
            'distance_miles' => $distMiles,
            'distance_kilometer' => $distKm
        ]);
        return redirect()->route('outlets.index')->with('message', 'Outlet updated successfully!');
    }

    public function destroy(Outlet $outlet)
    {
        $outlet->delete();
        return redirect()->back()->with('message', 'Outlet deleted successfully!');
    }
}
