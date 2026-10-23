package com.exemplo.model;

public class Sexualidade {
    private int ID;
    private String Descripcao;
    private String Sigla;
    private String Status;

    public Sexualidade(){}
    public Sexualidade(int ID, String Descripcao, String Sigla, String Status){
        this.ID = ID;
        this.Descripcao = Descripcao;
        this.Sigla = Sigla;
        this.Status = Status;
    }
    
    public int getId() {return ID;}
    public void setId(int ID) {this.ID = ID;}

    public String getDescripcao() {return Descripcao;}
    public void setDescripcao(String Descripcao) {this.Descripcao = Descripcao;}

    public String getSigla() {return Sigla;}
    public void setSigla(String Sigla) {this.Sigla = Sigla;}

    public String getStatus() {return Status;}
    public void setStatus(String Status) {this.Status = Status;}
    @Override
    public String toString() {
        return Descripcao;
    }
}
