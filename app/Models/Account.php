<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model {
    protected $table = 'accounts';

    public function children() { return $this->hasMany(Account::class, 'parent_account_id', 'id'); }
    public function parent() { return $this->belongsTo(Account::class, 'id', 'parent_account_id'); }
    public function outTransactions() { return $this->hasMany(Transaction::class, 'id', 'from_account_id'); }
    public function inTransactions() { return $this->hasMany(Transaction::class, 'id', 'to_account_id'); }
}