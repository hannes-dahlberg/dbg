<?php namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Hash;

class MakeUser extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:user
        {email : The email of the new user}
        {--password : Get prompted for password while otherwise auto generate password }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user by specifying email and (if provided) password';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() {
        $email = $this->argument('email');

        if(User::whereEmail($email)->count()) {
            $this->error('Email already used');
            return;
        }

        if($this->option('password')) {
            $password = $this->secret('Type user password');
        } else {
            $password = str_random(8);
        }

        User::create(['email' => $email, 'password' => Hash::make($password)]);

        if($this->option('password')) {
            $this->info('New user with email: "'. $email. '" was created');
        } else {
            $this->info('New user with email: "'. $email. '" was created with auto generated password: "'. $password. '"');
        }
    }
}