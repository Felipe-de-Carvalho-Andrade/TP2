<?php
  $db = mysqli_connect("localhost", "root", "", "usuarios");
  $db->set_charset("utf8");
 


  if (!$db) {
    $descricaoErro = "Erro! Detalhes: " . mysqli_connect_error();
    die($descricaoErro);
  }
 
  $nome = "erro";
  $senha= "erro";

  $nome = $_POST["nome"];

  $senha = $_POST["senha"];

  


      $sql = "INSERT INTO usuario (`id`, `nome`, `senha`) VALUES (NULL, '$nome', '$senha')";
      $resultado = $db->query($sql);
    
?>