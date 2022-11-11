<?php

//Сбор данных из полей формы.
$input_for_bot = $_POST['bot']; // Берём данные из input c атрибутом name="bot"
$name = $_POST['name']; // Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$email = $_POST['email']; // Берём данные из input c атрибутом name="email"

$token = "1983833965:AAGhHaaTkhvm8aQxxR9a-YEvXA-igmFmWAI"; // Тут пишем токен
$chat_id = "-1001547831567"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "Коуч тур «Море Перемен»"; //Указываем название сайта

if (
  !empty($input_for_bot) ||
  empty($name) ||
  empty($phone)
) {
  exit;
}

$arr = array(
  'Заявка c сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Почта: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
