/*
 * 
 */

package br.ufop.web.academico.dao;

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
 * Created on 23/07/2016 - 19:32:27
 */

public class EstadoDAO implements InterfaceDAO {

    @Override
    public List<InterfaceModel> getList() {
        List<InterfaceModel> estados = new ArrayList<>();

        String sql = "SELECT * FROM estados";
        ResultSet rs = DataSource.executeQuery(sql);

        try {
            while (rs.next()) {
                Estado estado = new Estado();
                estado.setId(rs.getInt("id"));
                estado.setNome(rs.getString("nome"));

                estados.add(estado);
            }
        } catch (SQLException ex) {
            Logger.getLogger(this.getClass().getName()).log(Level.SEVERE, null, ex);
        }

        return estados;
    }

    @Override
    public InterfaceModel get(int id) {

        String sql = "SELECT id, nome, sigla FROM estados WHERE id = " + id;
        ResultSet rs = DataSource.executeQuery(sql);
        Estado estado = new Estado();

        try {
            if (rs.next()) {
                estado.setId(rs.getInt("id"));
                estado.setNome(rs.getString("nome"));
                estado.setSigla(rs.getString("sigla"));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AlunoDAO.class.getName()).log(Level.SEVERE, null, ex);
        }

        return (InterfaceModel) estado;        
    }

    @Override
    public boolean add(InterfaceModel item) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
