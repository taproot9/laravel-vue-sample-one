<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->paginate();
        return response()->json($categories, 200);
    }


    public function create()
    {

    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|min:3',
            'image' => 'required|image|mimes:jpeg,png,jpg,bmp',
        ]);

        $category = new Category();
        $category->name = $request->name;
        $path = $request->file('image')->store('categories_images');
        $category->image = $path;
        if ($category->save()) {
            return response()->json($category, 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500,
            ],500);
        }
        //session
//         return redirect('dashboard')->with('status', 'Profile updated!');
    }


    public function show(Category $category)
    {
        //
    }


    public function edit(Category $category)
    {
        //
    }


    public function update(Request $request, Category $category)
    {
        //
    }


    public function destroy(Category $category)
    {
        try {
            if ($category->delete()) {

                //delete the file from the storage
                Storage::delete($category->image);

                return response()->json([
                    'message' => 'Category deleted successfully!',
                    'status_code' => 200
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Some error occurred!',
                    'status_code' => 500
                ], 500);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'status_code' => 500
            ], 500);
        }
    }
}