<?php

$db = DB::connect();

if ($api == 'empreendimentos') {

  $query1 = "DELETE FROM empreendimentos WHERE codigo_empreendimento = $path[1]";
  $query2 = "DELETE FROM unidades WHERE codigo_empreendimento = $path[1]";

  $rs = $db->prepare($query1);
  $exec = $rs->execute();
  $rs = $db->prepare($query2);
  $exec = $rs->execute();
} else {
  $query = "DELETE FROM unidades WHERE codigo_unidade = $path[1]";
  $rs = $db->prepare($query);
  $exec = $rs->execute();
}

if ($exec) {
  echo json_encode(["dados" => 'Dados foram excluidos com sucesso.']);
} else {
  echo json_encode(["dados" => 'Houve algum erro ao excluir os dados.']);
}
