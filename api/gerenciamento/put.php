<?php

if ($method == '' && $param == '') {
  echo json_encode(['ERRO' => 'Caminho não encontrado!']);
  exit;
}

if ($param == '') {
  echo json_encode(['ERRO' => "É necessário informar um cliente."]);
  exit;
}

if ($param != '') {

  if ($api == 'empreendimentos') {
    $codigo = 'codigo_empreendimento';
  } else {
    $codigo = 'codigo_unidade';
  }

  array_shift($_POST);

  $sql = "UPDATE $api SET ";

  $contador = 1;
  foreach (array_keys($_POST) as $indice) {
    if (count($_POST) > $contador) {
      $sql .= "{$indice} = '{$_POST[$indice]}', ";
    } else {
      $sql .= "{$indice} = '{$_POST[$indice]}' ";
    }
    $contador++;
  }

  $sql .= "WHERE {$codigo}={$param}";

  $db = DB::connect();
  $rs = $db->prepare($sql);
  $exec = $rs->execute();

  if ($exec) {
    echo json_encode(["dados" => 'Dados atualizados com sucesso.']);
  } else {
    echo json_encode(["dados" => 'Houve erro ao atualizar dados.']);
  }
}
