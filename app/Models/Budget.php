<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Budget extends Model {
    protected $table = 'budget';

    public function transactions() { return $this->hasMany(Transaction::class, 'budget_id', 'id'); }
}