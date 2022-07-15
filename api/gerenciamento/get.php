<?php

if ($method == '' && $param == '') {
  echo json_encode(['ERRO' => 'Caminho não encontrado!']);
  exit;
}

if ($param == '') {

  $db = DB::connect();
  $rs = $db->prepare("SELECT * FROM $api");
  $rs->execute();
  $obj = $rs->fetchAll(PDO::FETCH_ASSOC);

  if ($obj) {
    echo json_encode(["dados" => $obj]);
  }
}

if ($param != '') {

  if ($api == 'empreendimentos') {
    $codigo = 'codigo_empreendimento';
  } else {
    $codigo = 'codigo_unidade';
  }

  $db = DB::connect();
  $rs = $db->prepare("SELECT * FROM $api WHERE $codigo={$param}");
  $rs->execute();
  $obj = $rs->fetchObject();

  if ($obj) {
    echo json_encode(["dados" => $obj]);
  } else {
    echo json_encode(["dados" => 'Não existem dados para retornar']);
  }
}
