package com.exemplo.DAO;

import com.exemplo.model.Sexualidade;
import com.exemplo.model.Usuario;
import com.exemplo.util.conexao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

    public boolean inserir(Usuario usuario){
        String sql = "INSERT INTO usuarios(nome, CPF, Nascimento, Telefone, ID_Genero, Civil,"
                     + "CEP, Logradouro, Numero, Bairro, Cidade, UF, Complemento)"
                     + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = conexao.getConexao();
            PreparedStatement stmt = conn.prepareStatement(sql)){
            
                stmt.setString(1, usuario.getNome());
                stmt.setString(2, usuario.getCpf());

                if (usuario.getNascimento() != null){
                    stmt.setDate(3, Date.valueOf(usuario.getNascimento()));
                }   else {
                stmt.setNull(3, java.sql.Types.DATE);
                }

                stmt.setString(4, usuario.getTelefone());

                if (usuario.getSexualidade() != null && usuario.getSexualidade().getId() > 0) {
                stmt.setInt(5, usuario.getSexualidade().getId());
                } else {
                stmt.setNull(5, java.sql.Types.INTEGER);
                }

                stmt.setString(6, usuario.getCivil());
                stmt.setString(7, usuario.getCep());
                stmt.setString(8, usuario.getLogradouro());
                stmt.setInt(9, usuario.getNumero());
                stmt.setString(10, usuario.getBairro());
                stmt.setString(11, usuario.getCidade());
                stmt.setString(12, usuario.getUf());
                stmt.setString(13, usuario.getComplemento());

                stmt.executeUpdate();
                return true;
        } catch (SQLException e) {
            System.err.println("Erro ao inserir usuário: " + e.getMessage());
            return false;
        }
    }
    public boolean alterar(Usuario usuario){
        String sql = "UPDATE usuarios SET nome = ?, CPF = ?, Nascimento = ?, Telefone = ? , ID_Genero = ?, Civil = ?,"
                   + "CEP = ?, Logradouro = ?, Bairro = ?, Cidade = ?, UF = ?, Numero = ?, Complemento = ? WHERE ID = ?";
        try (Connection conn = conexao.getConexao();
            PreparedStatement stmt = conn.prepareStatement(sql)){
            
                stmt.setString(1, usuario.getNome());
                stmt.setString(2, usuario.getCpf());

                if (usuario.getNascimento() != null){
                    stmt.setDate(3, Date.valueOf(usuario.getNascimento()));
                }   else {
                stmt.setNull(3, java.sql.Types.DATE);
                }
                stmt.setString(4, usuario.getTelefone());
                if (usuario.getSexualidade() != null && usuario.getSexualidade().getId() > 0) {
                stmt.setInt(5, usuario.getSexualidade().getId());
                } else {
                stmt.setNull(5, java.sql.Types.INTEGER);
                }
                stmt.setString(6, usuario.getCivil());
                stmt.setString(7, usuario.getCep());
                stmt.setString(8, usuario.getLogradouro());
                stmt.setString(9, usuario.getBairro());
                stmt.setString(10, usuario.getCidade());
                stmt.setString(11, usuario.getUf());
                stmt.setInt(12, usuario.getNumero());
                stmt.setString(13, usuario.getComplemento());
                stmt.setInt(14, usuario.getId());

                stmt.executeUpdate();
                return true;
        } catch (SQLException e) {
            System.err.println("Erro ao alterar usuário: " + e.getMessage());
            return false;
        }
    }
    public List<Usuario> listarTodos() {
        List<Usuario> lista = new ArrayList<>();

        String sql = "SELECT u.*, s.Descripcao AS sexualidade_descricao FROM usuarios u LEFT JOIN sexualidade s ON u.ID_Genero = s.ID";
        try (Connection conn = conexao.getConexao();
        PreparedStatement stmt = conn.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                Usuario u = new Usuario();
                u.setId(rs.getInt("ID"));
                u.setNome(rs.getString("nome"));
                u.setCpf(rs.getString("CPF"));
                Date dataNasc = rs.getDate("Nascimento");
                if (dataNasc != null) u.setNascimento(dataNasc.toLocalDate());

                u.setTelefone(rs.getString("Telefone"));
                int sexID = rs.getInt("ID_Genero");
                if(sexID > 0){
                    Sexualidade s = new Sexualidade();
                    s.setId(sexID);
                    s.setDescripcao(rs.getString("sexualidade_descricao"));
                    u.setSexualidade(s);
                }
                u.setCep(rs.getString("CEP"));
                u.setCivil(rs.getString("Civil"));
                u.setLogradouro(rs.getString("Logradouro"));
                u.setBairro(rs.getString("Bairro"));
                u.setCidade(rs.getString("Cidade"));
                u.setUf(rs.getString("UF"));
                u.setNumero(rs.getInt("Numero"));
                u.setComplemento(rs.getString("Complemento"));

                lista.add(u);
            }
        } catch (SQLException e) {
            System.err.println("Erro ao listar usuários: " + e.getMessage());
        }
        return lista;
    }
    public boolean excluir(int id) {
        String sql = "DELETE FROM usuarios WHERE id = ?";

        try (Connection conn = conexao.getConexao();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, id);
            stmt.executeUpdate();
            return true;

        } catch (SQLException e) {
            System.err.println("Erro ao excluir usuário: " + e.getMessage());
            return false;
        }
    }
    public boolean existeId(int id){
        String sql = "Select ID FROM usuarios WHERE id = ? LIMIT 1";
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
    public Usuario buscarPorId(int id) {
    String sql = "SELECT * FROM usuarios WHERE id = ?";
    Usuario user = null;

    try (Connection conn = conexao.getConexao();
         PreparedStatement stmt = conn.prepareStatement(sql)) {

        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();

        if (rs.next()) {
            user = new Usuario();
            user.setId(rs.getInt("ID"));
            user.setNome(rs.getString("nome"));
            user.setCpf(rs.getString("CPF"));
            user.setNascimento(rs.getDate("Nascimento") != null ? rs.getDate("Nascimento").toLocalDate() : null);
            user.setTelefone(rs.getString("Telefone"));
            user.setCivil(rs.getString("Civil"));
            user.setCep(rs.getString("CEP"));
            user.setLogradouro(rs.getString("Logradouro"));
            user.setBairro(rs.getString("Bairro"));
            user.setCidade(rs.getString("Cidade"));
            user.setUf(rs.getString("UF"));
            user.setComplemento(rs.getString("Complemento"));
            user.setNumero(rs.getInt("Numero"));

            // Mapeia a chave estrangeira de Sexualidade
            Sexualidade s = new Sexualidade();
            s.setId(rs.getInt("ID_Genero"));
            user.setSexualidade(s);
        }

    } catch (SQLException e) {
        e.printStackTrace();
    }

    return user;
}
}
