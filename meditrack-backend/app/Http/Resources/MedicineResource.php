<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MedicineResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'generic_name' => $this->generic_name,
            'brand_name' => $this->brand_name,
            'description' => $this->description,
            'category' => $this->category,
            'price' => $this->price,
            'stock_quantity' => $this->stock_quantity,
            'manufacturer' => $this->manufacturer,
            'expiry_date' => $this->expiry_date?->format('Y-m-d'),
            'requires_prescription' => $this->requires_prescription,
            'is_expired' => $this->is_expired,
            'is_in_stock' => $this->is_in_stock,
            'created_at' => $this->created_at?->format('Y-m-d H:i:s'),
        ];
    }
}
