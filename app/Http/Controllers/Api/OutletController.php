<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Outlet;
use App\Models\Brand;
use App\Services\Geotools;
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
        return response()->json([
            'data' => $outlets,
            'message' => 'Outlets fetched successfully!',
            'status' => true
        ]);
    }

    public function create()
    {
        return response()->json([
            'message' => 'Ready to create an outlet',
            'brands' => Brand::all()
        ]);
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

        $outlet = Outlet::create(
            $request->all() + [
                'distance_miles' => $distMiles,
                'distance_kilometer' => $distKm
            ]
        );

        return response()->json([
            'data' => $outlet,
            'message' => 'Outlet created successfully!',
            'status' => true
        ]);
    }

    public function edit($id)
    {
        $outlet = Outlet::where('id', $id)->firstOrFail();
        return response()->json([
            'data' => $outlet,
            'brands' => Brand::all(),
            'message' => 'Outlet details fetched successfully!',
            'status' => true
        ]);
    }

    public function show($id)
    {
        $outlet = Outlet::where('id', $id)->firstOrFail();
        return response()->json([
            'data' => $outlet->load('brand'),
            'message' => 'Outlet details fetched successfully!',
            'status' => true
        ]);
    }

    public function update(Request $request, $id)
    {
        $outlet = Outlet::where('id', $id)->firstOrFail();

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

        return response()->json([
            'data' => $outlet,
            'message' => 'Outlet updated successfully!',
            'status' => true
        ]);
    }

    public function destroy($id)
    {
        $outlet = Outlet::where('id', $id)->firstOrFail();
        $outlet->delete();
        return response()->json([
            'message' => 'Outlet deleted successfully!',
            'status' => true
        ]);
    }
}
