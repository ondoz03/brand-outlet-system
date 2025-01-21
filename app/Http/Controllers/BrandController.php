<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Inertia\Inertia;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::with('outlets')->paginate(5);
        return Inertia::render('Brands/Index', ['brands' => $brands]);
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);
        Brand::create($request->only('name'));
        return redirect()->route('brands.index')->with('message', 'Brand created successfully!');
    }

    public function update(Request $request, Brand $brand)
    {
        $request->validate(['name' => 'required|string|max:255']);
        $brand->update($request->only('name'));
        return redirect()->route('brands.index')->with('message', 'Brand updated successfully!');
    }

    public function destroy(Brand $brand)
    {
        $brand->delete();
        return redirect()->route('brands.index')->with('message', 'Brand deleted successfully!');
    }
}
