<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller {
    public function index(Request $request) {
        return Transaction::all();
    }
    public function store(Request $request) {
        Transaction::create($request->all());
    }
    public function update(Request $request, Transaction $transaction) {
        $transaction->fill($request->all());
    }
    public function destroy(Transaction $transaction) {
        $transaction->delete();
    }
}