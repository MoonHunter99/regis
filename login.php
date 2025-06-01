<?php
require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['username']) || empty($input['password'])) {
    sendJsonResponse([
        'success' => false, 
        'message' => 'Username and password are required'
    ], 400);
}

$username = sanitizeInput($input['username']);
$password = $input['password'];

try {
    $db = new Database();
    $conn = $db->getConnection();
    
    // Find user by username or email
    $sql = "SELECT * FROM users WHERE username = ? OR email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$username, $username]);
    $user = $stmt->fetch();
    
    if (!$user) {
        sendJsonResponse([
            'success' => false, 
            'message' => 'Invalid username or password'
        ], 401);
    }
    
    // Verify password
    if (!password_verify($password, $user['password'])) {
        sendJsonResponse([
            'success' => false, 
            'message' => 'Invalid username or password'
        ], 401);
    }
    
    // Create session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];
    $_SESSION['logged_in'] = true;
    
    // Remove password from user data before sending
    unset($user['password']);
    
    sendJsonResponse([
        'success' => true, 
        'message' => 'Login successful',
        'user' => $user
    ]);
    
} catch (PDOException $e) {
    error_log("Login error: " . $e->getMessage());
    sendJsonResponse([
        'success' => false, 
        'message' => 'Database error occurred'
    ], 500);
} catch (Exception $e) {
    error_log("General error: " . $e->getMessage());
    sendJsonResponse([
        'success' => false, 
        'message' => 'An error occurred'
    ], 500);
}
?>