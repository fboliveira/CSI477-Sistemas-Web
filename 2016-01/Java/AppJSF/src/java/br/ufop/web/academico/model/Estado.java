/*
 * 
 */

package br.ufop.web.academico.model;

import java.io.Serializable;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 * 
 * Created on 23/07/2016 - 19:16:22
 */

public class Estado implements Serializable, InterfaceModel {

    private int id;
    private String nome;

    @Override
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }
    private String sigla;
    
    @Override
    public String getTable() {
        return "estados";
    }

}
