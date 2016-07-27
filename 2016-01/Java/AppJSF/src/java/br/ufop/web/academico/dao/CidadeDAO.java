/*
 * 
 */
package br.ufop.web.academico.dao;

import br.ufop.web.academico.model.Cidade;
import br.ufop.web.academico.model.Estado;
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
 * Created on 23/07/2016 - 19:30:33
 */
public class CidadeDAO implements InterfaceDAO {

    @Override
    public List<InterfaceModel> getList() {

        List<InterfaceModel> cidades = new ArrayList<>();
        EstadoDAO estadoDAO = new EstadoDAO();

        String sql = "SELECT * FROM cidades";
        ResultSet rs = DataSource.executeQuery(sql);

        try {
            while (rs.next()) {
                Cidade cidade = new Cidade();
                cidade.setId(rs.getInt("id"));
                cidade.setNome(rs.getString("nome"));
                cidade.setEstado((Estado) estadoDAO.get(rs.getInt("estado_id")));

                cidades.add(cidade);
            }
        } catch (SQLException ex) {
            Logger.getLogger(AlunoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return cidades;
    }

    @Override
    public InterfaceModel get(int id) {
        String sql = "SELECT id, nome FROM cidades WHERE id = " + id;
        ResultSet rs = DataSource.executeQuery(sql);
        Cidade cidade = new Cidade();

        EstadoDAO estadoDAO = new EstadoDAO();
        
        try {
            if (rs.next()) {
                cidade.setId(rs.getInt("id"));
                cidade.setNome(rs.getString("nome"));
                cidade.setEstado((Estado) estadoDAO.get(rs.getInt("estado_id")));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AlunoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return (InterfaceModel) cidade;      }

    @Override
    public boolean add(InterfaceModel item) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
