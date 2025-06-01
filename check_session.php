<?php
require_once 'config.php';

try {
    if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true && isset($_SESSION['user_id'])) {
        $db = new Database();
        $conn = $db->getConnection();
        
        // Get user data
        $stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$_SESSION['user_id']]);
        $user = $stmt->fetch();
        
        if ($user) {
            // Remove password from user data
            unset($user['password']);
            
            sendJsonResponse([
                'logged_in' => true,
                'user' => $user
            ]);
        } else {
            // User not found, clear session
            session_unset();
            session_destroy();
            session_start();
            
            sendJsonResponse(['logged_in' => false]);
        }
    } else {
        sendJsonResponse(['logged_in' => false]);
    }
    
} catch (PDOException $e) {
    error_log("Session check error: " . $e->getMessage());
    sendJsonResponse(['logged_in' => false]);
} catch (Exception $e) {
    error_log("General error: " . $e->getMessage());
    sendJsonResponse(['logged_in' => false]);
}
?>