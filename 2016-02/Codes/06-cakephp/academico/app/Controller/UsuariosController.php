<?php

class UsuariosController extends AppController {

    public $helpers = array('Form');
    public $components = array('Flash');

    public function index_login() {

    }

    public function validar() {

        $usuario = $this->Usuario->findAllByLoginAndSenha(
                $this->data['Usuario']['login'],
                md5($this->data['Usuario']['senha'])
        );

        if (!empty($usuario))
            return $usuario;
        else
            return false;

    }

    public function login() {

        if (!empty($this->data['Usuario']['login'])) {
            // Validar
            $usuario = $this->validar();

            if($usuario != false) {
                $this->Flash->set('Acesso realizado com sucesso!');
                $this->Session->write('Usuario', $usuario);

                $this->redirect('/');
                exit();
            } else {
                $this->Flash->set('Usuário e/ou senha inválidos!');
                $this->redirect(array('action' => 'index_login'));
                exit();
            }

        } else {
            $this->redirect(array('action' => 'index_login'));
            exit();
        }

    }

    public function logout() {
      $this->Flash->set('Atividades encerradas com sucesso!');

      $this->redirect(array('action' => 'index_login'));
      exit();        
    }

}
