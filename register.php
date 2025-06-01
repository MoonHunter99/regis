<?php
require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(['success' => false, 'message' => 'Method not allowed'], 405);
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$requiredFields = [
    'firstName', 'lastName', 'phoneNumber', 'region', 
    'province', 'municipality', 'barangay', 'username', 
    'email', 'password'
];

foreach ($requiredFields as $field) {
    if (empty($input[$field])) {
        sendJsonResponse([
            'success' => false, 
            'message' => ucfirst($field) . ' is required'
        ], 400);
    }
}

// Sanitize inputs
$firstName = sanitizeInput($input['firstName']);
$middleName = isset($input['middleName']) ? sanitizeInput($input['middleName']) : null;
$lastName = sanitizeInput($input['lastName']);
$suffix = isset($input['suffix']) ? sanitizeInput($input['suffix']) : null;
$phoneNumber = sanitizeInput($input['phoneNumber']);
$region = sanitizeInput($input['region']);
$province = sanitizeInput($input['province']);
$municipality = sanitizeInput($input['municipality']);
$barangay = sanitizeInput($input['barangay']);
$username = sanitizeInput($input['username']);
$email = sanitizeInput($input['email']);
$password = $input['password'];

// Validate email format
if (!validateEmail($email)) {
    sendJsonResponse([
        'success' => false, 
        'message' => 'Invalid email format'
    ], 400);
}

// Validate phone number format
if (!validatePhone($phoneNumber)) {
    sendJsonResponse([
        'success' => false, 
        'message' => 'Invalid phone number format. Use: +63 XXX XXX XXXX'
    ], 400);
}

// Validate password strength
if (strlen($password) < 6) {
    sendJsonResponse([
        'success' => false, 
        'message' => 'Password must be at least 6 characters long'
    ], 400);
}

// Validate username (alphanumeric and underscore only)
if (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
    sendJsonResponse([
        'success' => false, 
        'message' => 'Username can only contain letters, numbers, and underscores'
    ], 400);
}

try {
    $db = new Database();
    $conn = $db->getConnection();
    
    // Check if username already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->execute([$username]);
    if ($stmt->fetch()) {
        sendJsonResponse([
            'success' => false, 
            'message' => 'Username already exists'
        ], 409);
    }
    
    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        sendJsonResponse([
            'success' => false, 
            'message' => 'Email already exists'
        ], 409);
    }
    
    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert user
    $sql = "INSERT INTO users (firstName, middleName, lastName, suffix, phoneNumber, 
            region, province, municipality, barangay, username, email, password) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute([
        $firstName, $middleName, $lastName, $suffix, $phoneNumber,
        $region, $province, $municipality, $barangay, $username, 
        $email, $hashedPassword
    ]);
    
    if ($result) {
        sendJsonResponse([
            'success' => true, 
            'message' => 'Registration successful'
        ]);
    } else {
        sendJsonResponse([
            'success' => false, 
            'message' => 'Registration failed'
        ], 500);
    }
    
} catch (PDOException $e) {
    error_log("Registration error: " . $e->getMessage());
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