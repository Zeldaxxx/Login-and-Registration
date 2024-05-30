<?php
session_start(); // Start a session to store user data if needed

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_database";

// Establish connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Process login attempt
if(isset($_POST['submit'])) {
    $studmail = $_POST['studmail'];
    $pass = $_POST['pass'];

    // Prepare SQL query
    $sql_query = "SELECT * FROM student_registration WHERE studmail='$studmail' AND pass='$pass'";
    $result = mysqli_query($conn, $sql_query);

    if (mysqli_num_rows($result) == 1) {
        // Valid credentials, redirect to Aquino_table.php
        header("Location: Aquino_table.php");
        exit();
    } else {
        // Invalid credentials
        echo "<script>alert('Invalid username or password'); window.location.href='login.html';</script>";
        exit();
    }
}

mysqli_close($conn);
?>
