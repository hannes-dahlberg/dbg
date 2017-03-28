<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'API'], function() {
    Route::group(['prefix' => 'auth'], function() {
        Route::post('/', ['name' => 'auth', 'uses' => 'AuthController@Auth']);
    });

});