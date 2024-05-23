<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller{
    public function store(Request $request){
        $request->validate([
            'student_id' => 'required|integer',
            'description' => 'required|string',
        ]);
        $history = new History();
        $history->student_id = $request->student_id;
        $history->user_id = $request->user()->id;
        $history->description = $request->description;
        $history->date = date('Y-m-d');
        $history->save();
        return History::where('id', $history->id)->with('user')->first();
    }
    public function update(Request $request, $id){
        $request->validate([
            'student_id' => 'required|integer',
            'description' => 'required|string',
        ]);
        $history = History::find($id);
        if ($history) {
            $history->student_id = $request->student_id;
            $history->user_id = $request->user()->id;
            $history->description = $request->description;
            $history->save();
            return History::where('id', $history->id)->with('user')->first();
        }
        return response()->json(['message' => 'History not found'], 404);
    }
    public function destroy($id){
        $history = History::find($id);
        if ($history) {
            $history->delete();
            return response()->json(['message' => 'History deleted']);
        }
        return response()->json(['message' => 'History not found'], 404);
    }
}
