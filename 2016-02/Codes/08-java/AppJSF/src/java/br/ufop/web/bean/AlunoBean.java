/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.ufop.web.bean;

import br.ufop.web.model.Aluno;
import java.util.ArrayList;
import java.util.List;
import javax.inject.Named;
import javax.enterprise.context.RequestScoped;

/**
 *
 * @author fernando
 */
@Named(value = "alunoBean")
@RequestScoped
public class AlunoBean {

    /**
     * Creates a new instance of AlunoBean
     */
    public AlunoBean() {
    }
    
    public List<Aluno> getAlunos() {
        
        List<Aluno> alunos = new ArrayList<>();
        
        // Conexao - BD
        // Executa SQL -> dados dos alunos
        // Percorrer ResultSet -> dados
        // -- Criar instância Aluno
        // -- Preencher insrância
        // -- adicionar na Lista
        Aluno aluno1 = new Aluno();
        aluno1.setId(1);
        aluno1.setNome("Fernando B Oliveira");
        alunos.add(aluno1);
        
        Aluno aluno2 = new Aluno();
        aluno2.setId(2);
        aluno2.setNome("Ana Flávia");
        alunos.add(aluno2);

        Aluno aluno3 = new Aluno();
        aluno3.setId(3);
        aluno3.setNome("Brígida");
        alunos.add(aluno3);

        Aluno aluno4 = new Aluno();
        aluno4.setId(4);
        aluno4.setNome("Hugo");
        alunos.add(aluno4);
        
        return alunos;
        
    }
    
}
