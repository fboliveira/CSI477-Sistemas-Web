/*
 * 
 */

package br.ufop.web.academico.dao;

import br.ufop.web.academico.model.Aluno;
import br.ufop.web.persistence.MySQLConnectionProcess;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Fernando B Oliveira <fboliveira25@gmail.com>
 * 
 */

public class AlunoDAO {

    public AlunoDAO() {
        
        MySQLConnectionProcess.getInstance().setHost("localhost");
        MySQLConnectionProcess.getInstance().setDatabase("academico");
        MySQLConnectionProcess.getInstance().setDbUsername("sistemaweb");
        MySQLConnectionProcess.getInstance().setDbPassword("123456");
        
        
    }
    
    public List<Aluno> getAlunos() throws SQLException {
        
        List<Aluno> alunos = new ArrayList<>();
        
        String sql = "SELECT id, nome FROM alunos";
        ResultSet rs = MySQLConnectionProcess
                .getInstance()
                .getStatement()
                .executeQuery(sql);
        
        while(rs.next()) {
            Aluno aluno = new Aluno();
            aluno.setId(rs.getInt("id"));
            aluno.setNome(rs.getString("nome"));
            
            alunos.add(aluno);
        }
        
        return alunos;
        
    }

       
    
    
}
















