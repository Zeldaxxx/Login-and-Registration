<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_database";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);


$sql_query = "SELECT * FROM student_registration";
$result = mysqli_query($conn, $sql_query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration Data</title>
    <link rel="stylesheet" href="style-display.css">
    <style>
        /* Optional inline styles can be added here if necessary */
    </style>
</head>
<body>
    <div class="container">
        <h2>Student Registration Data</h2>
        <table>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Age</th>
                    <th>Student-Mail</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>College</th>
                    <th>Program</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if (mysqli_num_rows($result) > 0) {
                    while($row = mysqli_fetch_assoc($result)) {
                        echo "<tr>";
                        echo "<td>".$row['lname']."</td>";
                        echo "<td>".$row['fname']."</td>";
                        echo "<td>".$row['age']."</td>";
                        echo "<td>".$row['studmail']."</td>";
                        echo "<td>".$row['gender']."</td>";
                        echo "<td>".$row['city']."</td>";
                        echo "<td>".$row['college']."</td>";
                        echo "<td>".$row['program']."</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='7'>No records found</td></tr>";
                }
                mysqli_close($conn);
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>
