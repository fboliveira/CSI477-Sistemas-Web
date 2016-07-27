/*
 * 
 */
package br.ufop.web.academico.dao;

import br.ufop.web.academico.model.Aluno;
import br.ufop.web.academico.model.Cidade;
import br.ufop.web.academico.model.InterfaceModel;
import br.ufop.web.persistence.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 *
 */
public class AlunoDAO implements InterfaceDAO {

    @Override
    public List<InterfaceModel> getList() {

        List<InterfaceModel> alunos = new ArrayList<>();

        String sql = "SELECT * FROM alunos";
        ResultSet rs = DataSource.executeQuery(sql);

        CidadeDAO cidadeDAO = new CidadeDAO();
                        
        try {
            while (rs.next()) {
                Aluno aluno = new Aluno();
                aluno.setId(rs.getInt("id"));
                aluno.setNome(rs.getString("nome"));
                aluno.setCidade((Cidade) cidadeDAO.get(rs.getInt("cidade_id")));

                alunos.add(aluno);
            }
        } catch (SQLException ex) {
            Logger.getLogger(AlunoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return alunos;

    }

    @Override
    public boolean add(InterfaceModel item) {

        Aluno aluno = (Aluno) item;

        String sql = "INSERT INTO alunos (nome, rua, numero, bairro, cep, mail, cidade_id) VALUES ("
                + "'" + aluno.getNome() + "', '', '', '', '', '', "
                + aluno.getCidade().getId() + ")";
        System.out.println(sql);

        return DataSource.executeUpdate(sql);
    }

    @Override
    public InterfaceModel get(int id) {

        String sql = "SELECT id, nome FROM alunos WHERE id = " + id;
        ResultSet rs = DataSource.executeQuery(sql);
        Aluno aluno = new Aluno();

        try {
            if (rs.next()) {
                aluno.setId(rs.getInt("id"));
                aluno.setNome(rs.getString("nome"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AlunoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return (InterfaceModel) aluno;
        
    }

}
