
<?php
  //Если форма отправлена
  if(isset($_POST['submit'])) {
 //Проверка Поля ИМЯ
  if(trim($_POST['name']) == '') {
  $hasError = true;
  } else {
  $name = trim($_POST['name']);
  }
 //Проверка поля ТЕМА
  if(trim($_POST['form-text']) == '') {
  $hasError = true;
  } else {
  $subject = trim($_POST['form-text']);
  }
 //Проверка правильности ввода EMAIL
  if(trim($_POST['email']) == '')  {
  $hasError = true;
  } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
  $hasError = true;
  } else {
  $email = trim($_POST['email']);
  }

 //Проверка наличия ТЕКСТА сообщения
  if(trim($_POST['form-text']) == '') {
  $hasError = true;
  } else {
  $comments = trim($_POST['form-text']);
  }

  }

  if($hasError) {
    {echo 'ERROR';}
    }
     //Если ошибок нет, отправить email
  if(!isset($hasError)) {
  $emailTo = 'info@astrosoul.com.ua, k.kostenko@ukr.net';
  $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments";
  $headers = 'From: ASTROSOUL.COM.UA <info@astrosoul.com.ua>';
 mail($emailTo, $subject, $body, $headers, "-f info@astrosoul.com.ua");
  $emailSent = true;
  if($emailSent) {echo 'OK';}

  }

  ?>