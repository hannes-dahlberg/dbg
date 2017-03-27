<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Account;

class AccountController extends Controller {
    public function index(Request $request) {
        return Account::all();
    }
    public function store(Request $request) {
        Account::create($request->all());
    }
    public function update(Request $request, Account $account) {
        $account->fill($request->all());
    }
    public function destroy(Account $account) {
        $account->delete();
    }
}