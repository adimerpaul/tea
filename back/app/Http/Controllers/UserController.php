<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller{
    public function login(Request $request){
        $credentials = $request->only('username', 'password');
        $user = User::where('username', $credentials['username'])->with('colegio')->first();
        if(!$user || !password_verify($credentials['password'], $user->password)){
            return response()->json([
                'message' => 'Usuario o password es incorrecto',
            ], 401);
        }else{
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'token' => $token,
                'user' => $user,
            ]);
        }
    }
    public function me(Request $request){
        return User::where('id', $request->user()->id)->with('colegio')->first();
    }
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Token eliminado',
        ]);
    }
    public function index(){
        return User::with('colegio')->orderBy('id', 'desc')->get();
    }
    public function store(Request $request){
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->password = Hash::make($request->password);
        $user->colegio_id = $request->colegio_id;
        $user->user_id = $request->user_id;
        $user->save();
        return User::with('colegio')->find($user->id);
    }
    public function update(Request $request, $id){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->role = $request->role;
        $user->colegio_id = $request->colegio_id;
        $user->user_id = $request->user_id;
        $user->save();
        return User::with('colegio')->find($user->id);
    }
    public function delete($id){
        $user = User::find($id);
        $user->delete();
        return $user;
    }
    public function passwordUpdate(Request $request, $id){
        $user = User::find($id);
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }
}
