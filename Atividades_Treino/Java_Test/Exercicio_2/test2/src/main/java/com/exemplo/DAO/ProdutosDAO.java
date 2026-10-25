package com.exemplo.DAO;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.exemplo.model.Produtos;
import com.exemplo.util.conexao;

public class ProdutosDAO {
    public boolean inserir(Produtos produtos){
        String sql = "INSERT INTO produtos(Nome, Categoria, Estoque, Validade, PrecoCusto, PrecoVenda, Status) VALUES(?,?,?,?,?,?,?)";
        try (Connection conn = conexao.getConexao();
        PreparedStatement stmt = conn.prepareStatement(sql)){
            stmt.setString(1,produtos.getNome());
            stmt.setString(2, produtos.getCategoria());
            stmt.setInt(3, produtos.getEstoque());

            if (produtos.getValidade() != null) stmt.setDate(4, Date.valueOf(produtos.getValidade()));
            else stmt.setNull(4, java.sql.Types.DATE);

            stmt.setBigDecimal(5, produtos.getPrecoCusto());
            stmt.setBigDecimal(6, produtos.getPrecoVenda());
            stmt.setString(7, produtos.getStatus());

            stmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.err.println("Erro ao inserir produtos: " + e.getMessage());
            return false;
        }
    }

    public boolean alterar(Produtos produtos){
        String sql = "UPDATE produtos SET Nome = ?, Categoria = ?, Estoque = ?, Validade = ?, PrecoCusto = ?, PrecoVenda = ?, Status = ? WHERE ID = ?";
        try (Connection conn = conexao.getConexao();
        PreparedStatement stmt = conn.prepareStatement(sql)){
            stmt.setString(1, produtos.getNome());
            stmt.setString(2, produtos.getCategoria());
            stmt.setInt(3, produtos.getEstoque());

            if(produtos.getValidade() != null) stmt.setDate(4, Date.valueOf(produtos.getValidade()));
            else stmt.setNull(4, java.sql.Types.DATE);
            
            stmt.setBigDecimal(5, produtos.getPrecoCusto());
            stmt.setBigDecimal(6, produtos.getPrecoVenda());
            stmt.setString(7, produtos.getStatus());
            stmt.setInt(8,produtos.getId());

            stmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.err.println("Erro ao alterar produtos: " + e.getMessage());
            return false;
        }
    }

    public List<Produtos> listarTodos(){
        List<Produtos> Lista = new ArrayList<>();
        String sql = "SELECT * FROM produtos";

        try (Connection conn = conexao.getConexao();
        PreparedStatement stmt = conn.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery()){
            while (rs.next()) {
                Produtos p = new Produtos();
                p.setId(rs.getInt("ID"));
                p.setNome(rs.getString("Nome"));
                p.setCategoria(rs.getString("Categoria"));
                p.setEstoque(rs.getInt("Estoque"));
                p.setValidade(rs.getObject("Validade", LocalDate.class));
                p.setPrecoCusto(rs.getBigDecimal("PrecoCusto"));
                p.setPrecoVenda(rs.getBigDecimal("PrecoVenda"));
                p.setStatus(rs.getString("Status"));

                Lista.add(p);
            }
        } catch (SQLException e) {
            System.err.println("Erro ao listar produtos: " + e.getMessage());
        }
        return Lista;
    }
    public boolean existeId(int id){
        String sql = "Select ID FROM produtos WHERE id = ? LIMIT 1";
            try (Connection conn = conexao.getConexao();
             PreparedStatement stmt = conn.prepareStatement(sql)){
                stmt.setInt(1, id);
                try (ResultSet rs = stmt.executeQuery()) {
                    return rs.next(); 
                }
            } catch (Exception e) {
                System.err.println("Erro ao verificar existência do ID: " + e.getMessage());
                e.printStackTrace();
                return false;
            }
    }
    public Produtos buscarPorId(int id) {
    String sql = "SELECT * FROM produtos WHERE id = ?";
    Produtos p = null;

    try (Connection conn = conexao.getConexao();
         PreparedStatement stmt = conn.prepareStatement(sql)) {

        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            p = new Produtos();
            p.setId(rs.getInt("ID"));
            p.setNome(rs.getString("Nome"));
            p.setCategoria(rs.getString("Categoria"));
            p.setEstoque(rs.getInt("Estoque"));
            p.setValidade(rs.getDate("Validade") != null ? rs.getDate("Validade").toLocalDate() : null);
            p.setPrecoCusto(rs.getBigDecimal("PrecoCusto"));
            p.setPrecoVenda(rs.getBigDecimal("PrecoVenda"));
            p.setStatus(rs.getString("Status"));
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }

    return p;
}
}
