/*
 * 
 */
package br.ufop.web.academico.bean;

import br.ufop.web.academico.controller.AlunoController;
import br.ufop.web.academico.controller.CidadeController;
import br.ufop.web.academico.model.Aluno;
import br.ufop.web.academico.model.Cidade;
import br.ufop.web.academico.model.InterfaceModel;
import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import javax.faces.application.FacesMessage;
import javax.faces.application.FacesMessage.Severity;
import javax.faces.context.FacesContext;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 */
@Named(value = "alunoCrud")
@SessionScoped
public class AlunoCrud implements Serializable {

    private Aluno aluno = new Aluno();
    private CidadeController cidadeController = new CidadeController();
    private int cidade_id;
    private Cidade cid = new Cidade();

    public Cidade getCid() {
        return cid;
    }

    public void setCid(Cidade cid) {
        this.cid = cid;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public CidadeController getCidadeController() {
        return cidadeController;
    }

    public int getCidade_id() {
        return cidade_id;
    }

    public void setCidade_id(int cidade_id) {
        this.cidade_id = cidade_id;
    }

    public Map<String, Integer> getCidades() {

        Map<String, Integer> cidades = new HashMap<>();
        for (InterfaceModel m : cidadeController.getList()) {
            Cidade cidade = (Cidade) m;
            cidades.put(cidade.getNome() + "-" + cidade.getEstado().getSigla(), cidade.getId());
        }

        return cidades;
    }

    /**
     * Creates a new instance of AlunoCrud
     */
    public AlunoCrud() {
    }

    public void add() {

        String msg;
        Severity s;
        
        AlunoController alunoController = new AlunoController();
        Cidade cidade = new Cidade();
        cidade.setId(cidade_id);
        aluno.setCidade(cidade);

        if (alunoController.add(aluno)) {
            msg = "Registro inserido com sucesso!";
            s = FacesMessage.SEVERITY_INFO;
        } else {
            msg = "O registro não foi inserido. Verifique o erro reportado.";
            s = FacesMessage.SEVERITY_ERROR;
        }

        FacesMessage message = new FacesMessage(s, "Alunos", msg);
        FacesContext.getCurrentInstance().addMessage(null, message);

    }

}
