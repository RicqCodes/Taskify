<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'project_description' => $this->project_description,
            'status' => $this->status,
            'due_date' => $this->due_date,
            'created_At' => $this->created_at,
            'tags' => TagResource::collection($this->whenLoaded('tags')),
        ];
    }
}

