<?php

namespace App\Http\Controllers;

use App\Models\Outlet;
use App\Models\Brand;
use Inertia\Inertia;

use Illuminate\Http\Request;

class OutletController extends Controller
{
    public function index()
    {
        $outlets = Outlet::with('brand')->paginate(5);
        $brands = Brand::all();
        return Inertia::render('Outlets/Index', ['outlets' => $outlets, 'brands' => $brands]);
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

        Outlet::create($request->all());
        return redirect()->back()->with('message', 'Outlet created successfully!');
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

        $outlet->update($request->all());
        return redirect()->back()->with('message', 'Outlet updated successfully!');
    }

    public function destroy(Outlet $outlet)
    {
        $outlet->delete();
        return redirect()->back()->with('message', 'Outlet deleted successfully!');
    }
}
