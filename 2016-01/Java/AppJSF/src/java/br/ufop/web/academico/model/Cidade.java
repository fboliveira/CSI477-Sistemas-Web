/*
 * 
 */

package br.ufop.web.academico.model;

import java.io.Serializable;

/**
 *
 * @author Fernando B Oliveira <https://github.com/fboliveira>
 * 
 * Created on 23/07/2016 - 19:14:14
 */

public class Cidade implements Serializable, InterfaceModel {

    private int id;
    private String nome;
    private Estado estado = new Estado();

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

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
    
    @Override
    public String getTable() {
        return "cidades";
    }

}
