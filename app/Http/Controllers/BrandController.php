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

    public function create()
    {
        return Inertia::render('Brands/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        Brand::create($request->only('name', 'description'));

        return redirect()->route('brands.index')->with('message', 'Brand created successfully!');
    }

    public function edit(Brand $brand)
    {
        return Inertia::render('Brands/Edit', ['brand' => $brand]);
    }

    public function update(Request $request, Brand $brand)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        $brand->update($request->only('name', 'description'));

        return redirect()->route('brands.index')->with('message', 'Brand updated successfully!');
    }

    public function show($slug)
    {
        $brand = Brand::where('slug', $slug)->with('outlets')->firstOrFail();
        return Inertia::render('Brands/Detail', ['brand' => $brand]);
    }


    public function destroy(Brand $brand)
    {
        $brand->delete();
        return redirect()->route('brands.index')->with('message', 'Brand deleted successfully!');
    }
}
