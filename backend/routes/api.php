<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\UserController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword'])->name('password.reset');

Route::middleware('auth:sanctum')->get('/user', function () {
    return new UserResource(Auth::user());
});

Route::middleware('auth:sanctum')->get('/user/{user_id}/all-projects', [ProjectController::class, 'viewAllProjects']);
Route::middleware('auth:sanctum')->get('/user/{user_id}/projects/not-started', [ProjectController::class, 'notStartedProjects']);
Route::middleware('auth:sanctum')->get('/user/{user_id}/projects/in-progress', [ProjectController::class, 'inProgressProjects']);
Route::middleware('auth:sanctum')->get('/user/{user_id}/projects/completed', [ProjectController::class, 'completedProjects']);
Route::middleware('auth:sanctum')->post('/user/create-project', [ProjectController::class, 'createProject']);