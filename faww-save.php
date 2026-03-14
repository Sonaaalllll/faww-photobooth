<?php

$data = json_decode(file_get_contents("php://input"));

$image = $data->image;

$image = str_replace("data:image/png;base64,", "", $image);
$image = str_replace(" ", "+", $image);

$file = "faww-captures/photo_".time().".png";

file_put_contents($file, base64_decode($image));

echo "saved";

?>