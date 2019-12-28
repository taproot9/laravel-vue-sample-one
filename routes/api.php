<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'AuthController@logout');
    });
});

Route::group(['prefix' => 'user'], function () {

    Route::group(['middleware' => 'auth:api'], function () {

        Route::post('edit-category', function () {
            return response()->json([
                'message' => 'Admin Access',
                'status_code' => 200
            ], 200);
        })->middleware('scope:do_anything'); //only admin access this route

        Route::post('create-category', function () {
            return response()->json([
                'message' => 'Everyone Access',
                'status_code' => 200
            ], 200);
        })->middleware('scope:do_anything,can_create'); //everyone access
    });
});

Route::resource('/categories', 'CategoryController');


