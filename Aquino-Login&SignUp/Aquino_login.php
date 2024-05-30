<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_database";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['submit'])) {
    if (!empty($_POST['studmail']) && !empty($_POST['pass'])) {
        $studmail = $_POST['studmail'];
        $pass = $_POST['pass'];

        // Use prepared statements for security
        $stmt = $conn->prepare("SELECT * FROM student_registration WHERE studmail = ? AND pass = ?");
        $stmt->bind_param("ss", $studmail, $pass);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();
            $_SESSION['studmail'] = $user['studmail']; // Save only the email in session
            $_SESSION['user'] = $user; // Save the entire user data in session
            header("Location: Aquino_table.php");
            exit();
        } else {
            echo "Invalid email or password.";
        }

        $stmt->close();
    } else {
        echo "Please fill in both email and password.";
    }
}
mysqli_close($conn);
?>
