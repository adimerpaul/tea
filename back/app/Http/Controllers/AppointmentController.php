<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller{
    public function index(Request $request){
        $user = $request->user();
        if ($user->role == 'ADMIN') {
            return Appointment::with(['user', 'student'])->get();
        }else{
            return Appointment::with(['user', 'student'])->where('user_id', $user->id)->get();
        }
    }
    public function store(Request $request){
        $appointment = new Appointment();
        $appointment->date = date('Y-m-d H:i:s', strtotime($request->date));
        $appointment->description = $request->description;
        $appointment->result = $request->result;
        $appointment->status = $request->status;
        $appointment->user_id = $request->user()->id;
        $appointment->student_id = $request->student_id;
        return $appointment->save();
    }
    public function update(Request $request, $id){
        $appointment = Appointment::find($id);
        $appointment->date = date('Y-m-d H:i:s', strtotime($request->date));
        $appointment->description = $request->description;
        $appointment->result = $request->result;
        $appointment->status = $request->status;
        $appointment->user_id = $request->user()->id;
        $appointment->student_id = $request->student_id;
        return $appointment->save();
    }
    public function destroy($id){
        return Appointment::destroy($id);
    }
}
