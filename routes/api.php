<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'API'], function() {
    Route::group(['prefix' => 'auth'], function() {
        Route::post('/', ['name' => 'auth', 'uses' => 'AuthController@Auth']);
    });

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('/user', function(Request $request) { return $request->user(); });

        Route::resource('account', AccountController::class, ['except' => ['create', 'show', 'edit']]);
        Route::resource('budget', BudgetController::class, ['except' => ['create', 'show', 'edit']]);
        Route::resource('transaction', TransactionController::class, ['except' => ['create', 'show', 'edit']]);
    });
});