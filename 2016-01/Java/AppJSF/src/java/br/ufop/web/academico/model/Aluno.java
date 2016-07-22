/*
 * 
 */

package br.ufop.web.academico.model;

import java.io.Serializable;

/**
 *
 * @author Fernando B Oliveira <fboliveira25@gmail.com>
 * 
 */

public class Aluno implements Serializable {
    
    private int id = 0;
    private String nome = "";
    private int cidade_id = -1;

    public int getCidade_id() {
        return cidade_id;
    }

    public void setCidade_id(int cidade_id) {
        this.cidade_id = cidade_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
