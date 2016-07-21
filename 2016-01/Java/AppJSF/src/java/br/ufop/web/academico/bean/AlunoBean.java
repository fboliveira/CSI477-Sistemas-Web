/*
 * 
 */
package br.ufop.web.academico.bean;

import br.ufop.web.academico.controller.AlunoController;
import br.ufop.web.academico.model.Aluno;
import java.util.List;
import javax.inject.Named;
import javax.enterprise.context.RequestScoped;

/**
 *
 * @author Fernando B Oliveira <fboliveira25@gmail.com>
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
        AlunoController alunoController = new AlunoController();
        return alunoController.getAlunos();
    }
    
}
