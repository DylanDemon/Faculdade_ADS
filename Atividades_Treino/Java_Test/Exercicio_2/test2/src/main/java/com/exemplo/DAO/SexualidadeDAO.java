package com.exemplo.DAO;

import com.exemplo.model.Sexualidade;
import com.exemplo.util.conexao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;

public class SexualidadeDAO {
    public boolean inserir(Sexualidade genero){
        String sql = "INSERT INTO sexualidade (Descripcao, Sigla, Status)"
                    + "VALUES(?,?,?)";
        try (Connection conn = conexao.getConexao();
        PreparedStatement stmt = conn.prepareStatement(sql)){
            stmt.setString(1, genero.getDescripcao());
            stmt.setString(2, genero.getSigla());
            stmt.setString(3, genero.getStatus());

            stmt.executeUpdate();
            return true;
        } catch (Exception e) {
            System.err.println("Erro ao inserir Sexualidade: " + e.getMessage());
            return false;
        }
    }
    public boolean alterar(Sexualidade genero){
        String sql = "UPDATE sexualidade SET Descripcao = ?, Sigla = ?, Status = ? WHERE ID = ?";
        try (Connection conn = conexao.getConexao();
        PreparedStatement stmt = conn.prepareStatement(sql)){
            stmt.setString(1, genero.getDescripcao());
            stmt.setString(2, genero.getSigla());
            stmt.setString(3, genero.getStatus());
            stmt.setInt(4, genero.getId());

            int linhasAfetadas = stmt.executeUpdate();
            return linhasAfetadas > 0;
        } catch (Exception e) {
            System.err.println("Erro ao alterar Sexualidade: " + e.getMessage());
            return false;
        }
    }
    public List<Sexualidade> listarTodos(){
        List<Sexualidade> lista = new ArrayList<>();
        String sql = "SELECT ID, Descripcao, Sigla, Status FROM sexualidade";
        try (Connection conn = conexao.getConexao();
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery()){
            while(rs.next()){
                Sexualidade s = new Sexualidade();
                s.setId(rs.getInt("ID"));
                s.setDescripcao(rs.getString("Descripcao"));
                s.setSigla(rs.getString("Sigla"));
                s.setStatus(rs.getString("Status"));
                lista.add(s);
            }
        } catch (Exception e) {
            System.err.println("Erro ao listar Sexualidade: " + e.getMessage());
        }
        return lista;
    }
    public boolean excluir(int id){
        String sql = "DELETE FROM sexualidade WHERE id = ?";

        try (Connection conn = conexao.getConexao();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, id);
            stmt.executeUpdate();
            return true;

        } catch (SQLException e) {
            System.err.println("Erro ao excluir Sexualidade: " + e.getMessage());
            return false;
        }
    }
    public boolean existeId(int id){
        String sql = "Select ID FROM sexualidade WHERE id = ? LIMIT 1";
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
    public Sexualidade buscarPorId(int id) {
    String sql = "SELECT * FROM sexualidade WHERE id = ?";
    Sexualidade s = null;

    try (Connection conn = conexao.getConexao();
         PreparedStatement stmt = conn.prepareStatement(sql)) {

        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            s = new Sexualidade();
            s.setId(rs.getInt("ID"));
            s.setDescripcao(rs.getString("Descripcao"));
            s.setSigla(rs.getString("Sigla"));
            s.setStatus(rs.getString("Status"));
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }

    return s;
}
}
