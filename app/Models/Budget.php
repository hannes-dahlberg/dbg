<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Budget extends Model {
    protected $table = 'budget';
    protected $fillable = ['name', 'description', 'type', 'amount'];

    public function transactions() { return $this->hasMany(Transaction::class, 'budget_id', 'id'); }
}