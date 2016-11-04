<?php

  $estado = $_GET['estado'];

  // Recuperar os dados do banco

  $cidades = array(

    'ES' => array('Vitoria', 'Cariacia', 'Cachoeiro do Itapemirim'),
    'MG' => array('Belo Horizonte', 'Itauna', 'Itabira', 'João Monlevade'),
    'SP' => array('São Paulo', 'São Carlos', 'Campinas')

  );

  echo '<select id="cidades">';

  foreach ($cidades as $uf => $lista) {

    if ($estado == $uf) {

      foreach ($lista as $codigo => $nome) {
        echo "<option value=\"$codigo\">$nome</option>";
      }

      break;

    }

  }

  echo '</select>';
