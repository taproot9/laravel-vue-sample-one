<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//https://www.youtube.com/watch?v=O5cDR2e4oi4&list=PLR3-1he9bGShZT1FUMnVogdYNLbcK_Vp3&index=15
Route::get('/', function () {
    return view('welcome');
});
