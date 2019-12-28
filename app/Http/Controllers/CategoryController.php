<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{


    private $path;

    public function index()
    {
        $categories = Category::orderBy('created_at', 'desc')->paginate(5);
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
            ], 500);
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
        $request->validate([
            'name' => 'required|min:3',
        ]);

        $category->name = $request->name;
        $oldPath = $category->image;



        if ($request->hasFile('image')){

            $request->validate([
                'image' => 'image|mimes:jpeg,png,jpg,bmp',
            ]);
            $this->path = $request->file('image')->store('categories_images');
            $category->image = $this->path;

            //remove the old image
            Storage::delete($oldPath);
        }

        if ($category->save()) {
            return response()->json($category,200);

        } else {
            Storage::delete($this->path);
            return response()->json([
                'message' => 'Some error occurred, please try again',
                'status_code' => 500,
            ], 500);
        }

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
