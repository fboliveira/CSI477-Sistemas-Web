/*
 * 
 */

package br.ufop.web.academico.controller;

import br.ufop.web.academico.dao.AlunoDAO;
import br.ufop.web.academico.model.Aluno;
import java.sql.SQLException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Fernando B Oliveira <fboliveira25@gmail.com>
 * 
 */

public class AlunoController {
    
    public List<Aluno> getAlunos() {
        
        AlunoDAO alunoDAO = new AlunoDAO();
        try {
            return alunoDAO.getAlunos();
        } catch (SQLException ex) {
            Logger.getLogger(AlunoController.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return null;
    }

}
