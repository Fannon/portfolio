<?php
// Here we get all the information from the fields sent over by the form.
$name    = $_POST['name'];
$email   = $_POST['email'];
$message = $_POST['message'];
$token   = $_POST['token'];

$to      = 'heimlersimon@gmail.com';
$subject = 'Kontaktformular: www.fannon.de';
$message = $message;
$headers = 'From: ' . $email . "\r\n";

if ($token !== 'nByqVq7bDwq67DKg') {
    die('Invalid Token!');
}

/* AJAX check  */
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
        mail($to, $subject, $message, $headers); //This method sends the mail.
        echo "Your email was sent!"; // success message
    } else{
        echo "Invalid Email, please provide an correct email.";
    }

} else {
    die();
}


?>
