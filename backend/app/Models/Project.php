<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'user_id',
        'project_name',
        'project_description',
        'due_date',
        'status',
    ];

    public function user():BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function tags():BelongsToMany {
        return $this->belongsToMany(Tag::class, 'project_tag', 'projects_id', 'tags_id')->withTimestamps();
    }
}
