<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller {
    public function auth(Request $request) {
        $http = new \GuzzleHttp\Client;

        //Make request to itself for token using provided username and password
        $token = json_decode((string) $http->post(env('APP_URL', 'http://homestead.app'). '/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => env('PASSPORT_PASSWORD_CLIENT_ID', 'client-id'),
                'client_secret' => env('PASSPORT_PASSWORD_CLIENT_SECRET', 'client-secret'),
                'username' => $request->input('username'),
                'password' => $request->input('password'),
                'scope' => ''
            ]
        ])->getBody(), true);

        //USing token to get user data
        $user = json_decode((string) $http->get(env('APP_URL', 'http://homestead.app'). '/api/user', [
            'headers' => [
                'Authorization' => 'Bearer '. $token['access_token']
            ]
        ])->getBody(), true);

        return [
            'user' => $user,
            'token' => $token
        ];
    }
}