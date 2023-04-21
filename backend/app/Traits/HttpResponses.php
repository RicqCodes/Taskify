<?php

namespace App\Traits;

trait HttpResponses {
    protected function success ($data, $message = null, $code = 200) {
        return response()->json([
            'status' => true,
            'message' => $message,
            'data' => $data
        ], $code);
    }

    protected function error ($errors, $message = null, $code = 422) {
        return response()->json([
            'status' => false,
            'message' => $message,
            'errors' => $errors,
        ],
        $code
    );
    }
}