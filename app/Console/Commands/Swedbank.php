<?php namespace App\Console\Commands;

use Illuminate\Console\Command;

class Swedbank extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'swedbank';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test swedbank API';

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
        session_start();
        $bankApp = 'swedbank';
        $username = '198805066696';
        $auth = new \SwedbankJson\Auth\MobileBankID($bankApp, $username);
        $auth->initAuth();
        $this->info('Open the BankID app and confirm the login. Then refresh the page.');
    }
}