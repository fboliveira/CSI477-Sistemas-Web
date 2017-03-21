/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.ufop.web.login;

/**
 *
 * @author fernando
 */
public class Usuario {
    
    private String nome = "";
    private boolean registrado = false;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isRegistrado() {
        return registrado;
    }

    public void setRegistrado(boolean registrado) {
        this.registrado = registrado;
    }
    
    public void login(String nome) {
        this.setNome(nome);
        this.setRegistrado(true);
    }
    
    public void logoff() {
        this.setNome("");
        this.setRegistrado(false);
    }
    
}
