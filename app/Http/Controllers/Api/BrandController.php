<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::with('outlets')->paginate(5);
        return response()->json([
            'data' => $brands,
            'message' => 'Brands fetched successfully!',
            'status' => true
        ]);
    }

    public function create()
    {
        return response()->json(['message' => 'Ready to create a brand']);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        $brand = Brand::create([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name),
        ]);

        return response()->json([
            'data' => $brand,
            'message' => 'Brand created successfully!',
            'status' => true
        ]);
    }

    public function edit($id)
    {
        $brand = Brand::where('id', $id)->firstOrFail();
        return response()->json([
            'data' => $brand,
            'message' => 'Brand fetched successfully!',
            'status' => true
        ]);
    }

    public function update(Request $request, $id)
    {
        $brand = Brand::where('id', $id)->firstOrFail();

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
        ]);

        $brand->update([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name),
        ]);

        return response()->json([
            'data' => $brand,
            'message' => 'Brand updated successfully!',
            'status' => true
        ]);
    }

    public function show($id)
    {
        $brand = Brand::where('id', $id)->with('outlets')->firstOrFail();
        return response()->json([
            'data' => $brand,
            'message' => 'Brand details fetched successfully!',
            'status' => true
        ]);
    }

    public function destroy($id)
    {
        $brand = Brand::where('id', $id)->firstOrFail();
        $brand->delete();
        return response()->json([
            'message' => 'Brand deleted successfully!',
            'status' => true
        ]);
    }
}
