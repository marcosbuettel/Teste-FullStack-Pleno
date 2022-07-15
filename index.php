<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

date_default_timezone_set("America/Sao_Paulo");

if (isset($_GET['path'])) {
  $path = explode("/", $_GET['path']);
} else {
  echo "Caminho não existe";
  exit;
}

if (isset($path[0])) {
  $api = $path[0];
} else {
  echo "Caminho não existe";
  exit;
}

if (isset($path[1])) {
  $param = $path[1];
} else {
  $param = '';
}

$method = $_SERVER['REQUEST_METHOD'];

include_once "db/db.php";
include_once "api/gerenciamento/empreendimentos.php";
