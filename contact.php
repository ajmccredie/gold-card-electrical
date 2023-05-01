<?php

#Receive user input
$email_address = $_POST['email_address'];
$full_name = $_POST['full_name'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$feedback = $_POST['feedback'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_email_header($email_address);

#Send email
$headers = "From: $email_address";
$email_subject = "New Gold Card form submission";
$email_body = "You have received a new message from $full_name. \n".
    "Email address: $email_address\n".
    "Telephone contact: $phone\n".
    "Interested in: $course\n".
    "Additional information/queries: $feedback";
$sent = mail('aj.mccredie@yahoo.co.uk', $email_subject, $email_body, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for your interest.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your form. Please try again.</p>
</body>
</html>
<?php
}
?>