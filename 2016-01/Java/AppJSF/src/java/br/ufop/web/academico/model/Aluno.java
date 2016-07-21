/*
 * 
 */

package br.ufop.web.academico.model;

/**
 *
 * @author Fernando B Oliveira <fboliveira25@gmail.com>
 * 
 */

public class Aluno {
    
    private int id = 0;
    private String nome = "";    

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
