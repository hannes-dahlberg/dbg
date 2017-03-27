<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Budget;

class BudgetController extends Controller {
    public function index(Request $request) {
        return Budget::all();
    }
    public function store(Request $request) {
        Budget::create($request->all());
    }
    public function update(Request $request, Budget $budget) {
        $budget->fill($request->all());
    }
    public function destroy(Budget $budget) {
        $budget->delete();
    }
}