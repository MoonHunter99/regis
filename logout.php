<?php
require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
}

try {
    // Destroy session
    session_unset();
    session_destroy();
    
    // Start a new session to send response
    session_start();
    
    sendJsonResponse([
        'success' => true, 
        'message' => 'Logout successful'
    ]);
    
} catch (Exception $e) {
    error_log("Logout error: " . $e->getMessage());
    sendJsonResponse([
        'success' => false, 
        'message' => 'An error occurred during logout'
    ], 500);
}
?>