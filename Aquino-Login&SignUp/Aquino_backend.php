<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_database";


$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());

}
echo "Connected Successfully\n";

if(isset($_POST['register']))
{
    $lname = $_POST['lname'];
    $fname = $_POST['fname'];
    $mname = $_POST['mname'];
    $age = $_POST['age'];
    $birthdate = $_POST['birthdate'];
    $studmail = $_POST['studmail'];
    $mobile = $_POST['mobile'];
    $gender = $_POST['gender'];
    $pass = $_POST['pass'];
    $city = $_POST['city'];
    $district = $_POST['district'];
    $barangay = $_POST['barangay'];
    $streetadd = $_POST['streetadd'];
    $prevschool = $_POST['prevschool'];
    $schooladd = $_POST['schooladd'];
    $college = $_POST['college'];
    $program = $_POST['program'];

    $sql_query = "INSERT INTO student_registration (lname, fname, mname, age, birthdate, studmail, mobile, gender, 
                pass, city, district, barangay, streetadd, prevschool, schooladd, college, program)
                VALUES('$lname', '$fname', '$mname', '$age', '$birthdate', '$studmail', '$mobile', '$gender', '$pass',
                '$city', '$district', '$barangay', '$streetadd', '$prevschool', '$schooladd', '$college', '$program')";
                
    if (mysqli_query($conn, $sql_query)) {
        echo '1 new record added successfully.';
    } 
    else {
        echo 'Error: Record has not been added.' . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>