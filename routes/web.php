<?php

Route::any('{catchall}', function($url) {
    return view('index');
})->where('catchall', '(?:(?!api).)*');