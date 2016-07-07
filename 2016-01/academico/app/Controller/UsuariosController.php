 <?php
 class UsuariosController extends AppController {

   public $helpers = array('Form');
   public $components = array('Flash');

   public function index_login() {

   }

   public function login() {

      if (!empty($this->data['Usuario']['login'])) {

        // Validar
        $usuario  = $this->Usuario->findAllByLoginAndSenha(
              $this->data['Usuario']['login'],
              md5($this->data['Usuario']['senha']));

        // Se está correto
        if (!empty($usuario)) {
            $this->Flash->set('Acesso realizado com Sucesso!');
            $this->Session->write('Usuario', $usuario);
            $this->redirect('/');
            exit();

        } else {
          // Caso contrário
          $this->Flash->set('Usuário e/ou Senha inválidos!');
          $this->redirect(array('action' => 'index_login'));
          exit();
        }

      } else {
        $this->Flash->set('Informe usuário e senha para acesso.');
        $this->redirect(array('action' => 'index_login'));
        exit();
      }
   }
 }
  ?>
