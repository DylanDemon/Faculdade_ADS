package com.exemplo.model;
import  java.time.LocalDate;
public class Usuario {
    private int id;
    private String nome;
    private String cpf;
    private LocalDate nascimento;
    private String telefone;
    private Sexualidade sexualidade;
    private String civil;
    private String cep;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String uf;
    private int numero;
    private String complemento;

    public Usuario(){}
    public Usuario(int id, String nome, String cpf, LocalDate nascimento, String telefone, Sexualidade sexualidade, String civil,String cep,
    String logradouro, String bairro, String cidade, String uf, String rua, int numero, String complemento){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.telefone = telefone;
        this.sexualidade = sexualidade;
        this.civil = civil;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.numero = numero;
        this.complemento = complemento;
    }

    public int getId() {return id;}
    public void setId(int id) {this.id = id;}

    public String getNome() {return nome;}
    public void setNome(String nome) {this.nome = nome;}

    public String getCpf() {return cpf;}
    public void setCpf(String cpf) {this.cpf = cpf;}

    public LocalDate getNascimento() {return nascimento;}
    public void setNascimento(LocalDate nascimento) {this.nascimento = nascimento;}

    public String getTelefone() {return telefone;}
    public void setTelefone(String telefone) {this.telefone = telefone;}

    public Sexualidade getSexualidade() {return sexualidade;}
    public void setSexualidade(Sexualidade sexualidade) {this.sexualidade = sexualidade;}

    public String getCivil() {return civil;}
    public void setCivil(String civil) {this.civil = civil;}

    public String getCep() {return cep;}
    public void setCep(String cep) {this.cep = cep;}

    public String getLogradouro() {return logradouro;}
    public void setLogradouro(String logradouro) {this.logradouro = logradouro;}

    public String getBairro() {return bairro;}
    public void setBairro(String bairro) {this.bairro = bairro;}

    public String getCidade() {return cidade;}
    public void setCidade(String cidade) {this.cidade = cidade;}

    public String getUf() {return uf;}
    public void setUf(String uf) {this.uf = uf;}

    public int getNumero() {return numero;}
    public void setNumero(int numero) {this.numero = numero;}

    public String getComplemento() {return complemento;}
    public void setComplemento(String complemento) {this.complemento = complemento;}

}
