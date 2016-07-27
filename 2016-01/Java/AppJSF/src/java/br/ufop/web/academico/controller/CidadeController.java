/*
 * 
 */
package br.ufop.web.academico.controller;

import br.ufop.web.academico.dao.CidadeDAO;
import br.ufop.web.academico.model.InterfaceModel;
import java.util.List;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 *
 * Created on 27/07/2016 - 09:11:02
 */
public class CidadeController implements InterfaceController {

    @Override
    public List<InterfaceModel> getList() {
        CidadeDAO cidadeDAO = new CidadeDAO();
        return cidadeDAO.getList();
    }

    @Override
    public InterfaceModel get(int id) {
        CidadeDAO cidadeDAO = new CidadeDAO();
        return cidadeDAO.get(id);
    }

    @Override
    public boolean add(InterfaceModel item) {
        CidadeDAO cidadeDAO = new CidadeDAO();
        return cidadeDAO.add(item);
    }

}
