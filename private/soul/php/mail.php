<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
 $name = $_POST['name'];
 $formtext = $_POST['form-text'];
 $email = $_POST['email'];
 $mobile = $_POST["mobile"];
 $text = $_POST["form-text"];
 $headers .= 'Content-type:text/plain; charset = UTF-8' . "\r\n";
 $headers .= 'From: astrosoul.com.ua <info@astrosoul.com.ua>' . "\r\n";
 $error = '';
 if(!$name) {$error.= "<p>Укажите свое имя.</p>";}
 if(!$email) {$error.= "<p>Укажите имейл.</p>";}
 if(!$mobile) {$error.= "<p>Укажите мобильный обращения.</p>";}
 if(!$formtext) {$error.= "<p>Укажите тему обращения.</p>";}
 if(!$error) {
  $addressUser = $email;
  $addressOrder = "info@astrosoul.com.ua, astrosoultatyana@gmail.com";
  $sub = "Астрологический сайт Соул Татьяны";
  $subOrder = "Новое сообщение на сайте astrosoul.com.ua";
  $mesOrder =  "Имя клиента: " .$name."\n\nКонтактный номер телефона: "
  .$mobile."\n\nE-mail адрес: ".$email."\n\nТекст заявки: ".$text;

  $mesUser =  "Спасибо за оставленную заявку "
  .$name."\n\nВы оставили заявку на сайте astrosoul.com.ua.\n\nВы указали следующий e-mail адрес: ".$email.
  "\n\nВаш контактный номер телефона: ".$mobile."\n\nВ ближайшее время я свяжусь с вами для уточнения вашей заявки.";
  $sendUser = mail ($addressUser,'=?UTF-8?B?'.base64_encode($sub).'?=', $mesUser,$headers);
  $send = mail ($addressOrder,'=?UTF-8?B?'.base64_encode($subOrder).'?=', $mesOrder,$headers);
   }
    if($send && $sendUser) {echo 'OK';}
    else {echo '<div class="err">'.$error.'</div>';}
 }
?>
