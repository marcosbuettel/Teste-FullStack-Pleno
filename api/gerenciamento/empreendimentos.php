<?php

if ($api == 'empreendimentos' || $api == 'unidades') {
  $response_json = file_get_contents("php://input");
  $dados = json_decode($response_json, true);

  if ($api == 'empreendimentos') {
    $query = "INSERT INTO $api (nome_empreendimento, localizacao_empreendimento, previsao_entrega_empreendimento) VALUES (:nome, :localizacao, :previsao)";
  } else {
    $query = "INSERT INTO $api (codigo_empreendimento, bloco_unidade, valor_unidade, status_unidade) VALUES (:codigo, :bloco, :valor, :status)";
  }

  if ($method == "GET") {
    include_once "get.php";
  }

  if ($method == "DELETE") {
    include_once "delete.php";
  }

  if ($method == "POST") {
    include_once "post.php";
  }

  if ($method == "POST" && isset($_POST['_method']) && $_POST['_method'] == "PUT") {
    include_once "put.php";
  }
}
