<?php
	//chama o arquivo de conexão com o bd
	include("conectar.php");

	$info = $_POST['contatos'];

	$data = json_decode(stripslashes($info));

	$nome = $data->name;
	$email = $data->email;
	$phone = $data->phone;
	$id = $data->id;

	//consulta sql
	$query = sprintf("UPDATE contact SET name = '%s', email = '%s', phone = '%s' WHERE id=%d",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($email),
		mysql_real_escape_string($phone),
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"contatos" => array(
			"id" => $id,
			"name" => $nome,
			"email" => $email,
			"phone" => $phone
		)
	));
?>