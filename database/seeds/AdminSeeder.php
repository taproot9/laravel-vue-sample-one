<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('users')->insert([
//            'name' => Str::random(10),
//            'email' => Str::random(10).'@gmail.com',
//            'password' => Hash::make('password'),
//        ]);

        User::create([
            'name' => 'Ryan',
            'email' => 'jayson.boter@yahoo.com',
            'password' => bcrypt('theirwaski'),
            'role' => 'administrator',
        ]);

//        $table->bigIncrements('id');
//        $table->string('name');
//        $table->string('email')->unique();
//        $table->timestamp('email_verified_at')->nullable();
//        $table->string('password');
//        $table->string('role')->default('author');
//        $table->rememberToken();
//        $table->timestamps();
    }
}
