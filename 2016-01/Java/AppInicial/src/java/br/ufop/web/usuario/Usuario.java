/*
 * 
 */

package br.ufop.web.usuario;

/**
 *
 * @author Fernando B Oliveira - fernando@decea.ufop.br
 * 
 * Created on 13/07/2016 - 15:34:32
 */

public class Usuario {

    private String nome = "";
    private boolean logado = false;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isLogado() {
        return logado;
    }

    public void setLogado(boolean logado) {
        this.logado = logado;
    }
    
    public void login(String nome) {
        setNome(nome);
        setLogado(true);
    }
    
    public void logout() {
        setNome("");
        setLogado(false);
    }
    
}
