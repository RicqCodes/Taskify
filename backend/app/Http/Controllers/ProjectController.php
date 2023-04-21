<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProjectRequest;
use App\Models\Project;
use App\Models\Tag;
use App\Models\User;
use App\Traits\HttpResponses;
use Auth;
use Illuminate\Http\Request;

use App\Http\Resources\ProjectResource;


class ProjectController extends Controller
{
    use HttpResponses;

    public function createProject(CreateProjectRequest $request) {
         $projectDetails = $request->validated();

         $project = Project::create([
            'user_id' => auth()->id(),
            'project_name' => $projectDetails['project_name'],
            'project_description' => $projectDetails['project_description'],
            'due_date' => $projectDetails['due_date'],
            'status' => $projectDetails['status'],
         ]);

         $tags = $request->tags;

         foreach($tags as $tagName) {
            $tag = Tag::firstOrCreate(['name' => $tagName]);
            $project->tags()->attach($tag);
         }

        return $this->success($project, "$project->project_name created successfully");
    }

    public function updateProject() {

    }

    public function viewAllProjects(Request $request) {
       if($request->user_id === Auth::id()) {
         $projects = User::find(Auth::id())
         ->projects()
         ->with('tags')
         ->get();

         return ProjectResource::collection($projects);
       };
    }

    public function notStartedProjects(Request $request) {
      if($request->user_id === Auth::id()) {
         $projects = User::find(Auth::id())
             ->projects()
             ->where('status', '0')
             ->with('tags')
             ->get();
         return ProjectResource::collection($projects);
     }
    }
    public function inProgressProjects(Request $request) {
      if($request->user_id === Auth::id()) {
         $projects = User::find(Auth::id())
             ->projects()
             ->where('status', '1')
             ->with('tags')
             ->get();
         return ProjectResource::collection($projects);
     }
    }

    public function completedProjects(Request $request) {
      if($request->user_id === Auth::id()) {
         $projects = User::find(Auth::id())
             ->projects()
             ->where('status', '2')
             ->with('tags')
             ->get();
         return ProjectResource::collection($projects);
     }
    }

    public function deleteProject() {
        
    }
}
