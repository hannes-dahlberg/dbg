<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model {
    protected $table = 'transactions';

    public function fromAccount() { return $this->belongsTo(Account::class, 'id', 'from_account_id'); }
    public function toAccount() { return $this->belongsTo(Account::class, 'id', 'to_account_id'); }
    public function budgetItem() { return $this->belongsTo(Budget::class, 'id', 'budget_id'); }
}