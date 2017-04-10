<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Budget;

class BudgetController extends Controller {
    public function index(Request $request) {
        return Budget::all();
    }
    public function store(Request $request) {
        //Look for single item or array
        if(isset($request->all()['name'])) {
            Budget::create($request->all());
        } elseif(is_array($request->all()[0])) {
            foreach($request->all() as $item) {
                Budget::create($item);
            }
        }
    }
    public function update(Request $request, Budget $budget) {
        $budget->fill($request->all())->save();
    }
    public function destroy(Budget $budget) {
        $budget->delete();
    }
}