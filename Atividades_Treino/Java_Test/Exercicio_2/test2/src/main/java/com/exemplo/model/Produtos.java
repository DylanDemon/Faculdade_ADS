package com.exemplo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Produtos {
    private int ID;
    private String Nome;
    private String Categoria;
    private int Estoque;
    private LocalDate Validade;
    private BigDecimal precoCusto;
    private BigDecimal precoVenda;
    private String Status;

    public Produtos(){}
    public Produtos(int id, String nome, String categoria, int estoque, LocalDate validade, BigDecimal precocusto, BigDecimal precovenda, String status){
        this.ID = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Estoque = estoque;
        this.Validade = validade;
        this.precoCusto = precocusto;
        this.precoVenda = precovenda;
        this.Status = status;
    }
    public int getId() {return ID;} 
    public void setId(int id){this.ID = id;}

    public String getNome() {return Nome;}
    public void setNome(String nome){this.Nome = nome;}

    public String getCategoria(){return Categoria;}
    public void setCategoria(String categoria){this.Categoria = categoria;}

    public int getEstoque(){return Estoque;}
    public void setEstoque(int estoque){this.Estoque = estoque;}

    public LocalDate getValidade(){return Validade;}
    public void setValidade(LocalDate validade){this.Validade = validade;}

    public BigDecimal getPrecoCusto(){return precoCusto;}
    public void setPrecoCusto(BigDecimal precocusto){this.precoCusto = precocusto;}

    public BigDecimal getPrecoVenda(){return precoVenda;}
    public void setPrecoVenda(BigDecimal precovenda){this.precoVenda = precovenda;}

    public String getStatus(){return Status;}
    public void setStatus(String status){this.Status = status;}
}
