<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'generic_name',
        'brand_name',
        'description',
        'category',
        'price',
        'stock_quantity',
        'manufacturer',
        'expiry_date',
        'requires_prescription',
    ];

    protected $casts = [
        'expiry_date' => 'date',
        'requires_prescription' => 'boolean',
        'price' => 'decimal:2',
    ];

    // Accessors
    public function getIsExpiredAttribute()
    {
        return $this->expiry_date && $this->expiry_date->isPast();
    }

    public function getIsInStockAttribute()
    {
        return $this->stock_quantity > 0;
    }
}
