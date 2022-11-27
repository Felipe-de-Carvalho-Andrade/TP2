<?php 

$db = mysqli_connect("localhost", "root", "", "usuarios");
$db->set_charset("utf8");



if (!$db) {
  $descricaoErro = "Erro! Detalhes: " . mysqli_connect_error();
  die($descricaoErro);
}

$sql = "SELECT * FROM usuario";
$resul = $db->query($sql);
$res = "[";

 while($user = $resul->fetch_assoc()){
$res .= json_encode($user).",";
 }
 echo $res."{}]";
?>