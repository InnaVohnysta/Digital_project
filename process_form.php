<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $name = $_POST["name"];
  $tel = $_POST["tel"];
  $email = $_POST["email"];
  $service = $_POST["service"];
  $message = $_POST["message"];

  $to_email = $_POST["email"];

  $subject = 'Новая заявка с формы контактов';

  $message_body = "Имя: $name\n";
  $message_body .= "Телефон: $tel\n";
  $message_body .= "Email: $email\n";
  $message_body .= "Товар/услуга: $service\n";
  $message_body .= "Сообщение: $message\n";

  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  if (mail($to_email, $subject, $message_body, $headers)) {
    
    echo "Спасибо, заявка отправлена";
  } else {
    echo "Ошибка при отправке! Попробуйте позже";
  }
}
?>
