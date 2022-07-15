<?php

if ($method == '' && $param == '') {
  echo json_encode(['ERRO' => 'Caminho não encontrado!']);
  exit;
}

if ($param == '') {
  if ($dados) {

    $db = DB::connect();
    $rs = $db->prepare($query);

    if ($api == 'empreendimentos') {
      $rs->bindParam(':nome', $dados['data']['nome_empreendimento']);
      $rs->bindParam(':localizacao', $dados['data']['localizacao_empreendimento']);
      $rs->bindParam(':previsao', $dados['data']['previsao_empreendimento']);
    } else {
      $rs->bindParam(':codigo', $dados['data']['codigo_empreendimento']);
      $rs->bindParam(':bloco', $dados['data']['bloco_unidade']);
      $rs->bindParam(':valor', $dados['data']['valor_unidade']);
      $rs->bindParam(':status', $dados['data']['status_unidade']);
    }

    $exec = $rs->execute();

    $response = ["erro" => false, "menssagem" => "Cadastrado com sucesso!"];
  } else {
    $response = ["erro" => true, "menssagem" => "Falhou!"];
  }

  http_response_code(200);
  echo json_encode($response);
}
