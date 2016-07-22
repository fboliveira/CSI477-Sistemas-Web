/*
 * 
 */
package br.ufop.web.academico.bean;

import br.ufop.web.academico.controller.AlunoController;
import br.ufop.web.academico.model.Aluno;
import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;

/**
 *
 * @author Fernando B Oliveira <fboliveira25@gmail.com>
 */
@Named(value = "alunoCrud")
@SessionScoped
public class AlunoCrud implements Serializable {

    private Aluno aluno = new Aluno();

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }
    
    /**
     * Creates a new instance of AlunoCrud
     */
    public AlunoCrud() {
    }
    
    public void add() {
        //System.out.println(aluno.getNome());
        
        AlunoController alunoController = new AlunoController();
        alunoController.add(aluno);
        
    }
    
}
