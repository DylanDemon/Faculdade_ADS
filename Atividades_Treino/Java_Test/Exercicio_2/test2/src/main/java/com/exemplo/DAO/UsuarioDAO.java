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
        String sql = "INSERT INTO usuarios(nome, CPF, Nascimento, ID_Genero, Telefone, "
                     + "CEP, Logradouro, Bairro, Cidade, UF, Numero, Complemento)"
                     + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = conexao.getConexao();
            PreparedStatement stmt = conn.prepareStatement(sql)){
            
                stmt.setString(1, usuario.getNome());
                stmt.setString(2, usuario.getCpf());

                if (usuario.getNascimento() != null){
                    stmt.setDate(3, Date.valueOf(usuario.getNascimento()));
                }   else {
                stmt.setNull(3, java.sql.Types.DATE);
                }

                if (usuario.getSexualidade() != null && usuario.getSexualidade().getId() > 0) {
                stmt.setInt(4, usuario.getSexualidade().getId());
                } else {
                stmt.setNull(4, java.sql.Types.INTEGER);
                }

                stmt.setString(5, usuario.getTelefone());
                stmt.setString(6, usuario.getCep());
                stmt.setString(7, usuario.getLogradouro());
                stmt.setString(8, usuario.getBairro());
                stmt.setString(9, usuario.getCidade());
                stmt.setString(10, usuario.getUf());
                stmt.setInt(11, usuario.getNumero());
                stmt.setString(12, usuario.getComplemento());

                stmt.executeUpdate();
                return true;
        } catch (SQLException e) {
            System.err.println("Erro ao inserir usuário: " + e.getMessage());
            return false;
        }
    }
    public boolean Alterar(Usuario usuario){
        String sql = "UPDATE usuarios SET nome = ?, CPF = ?, Nascimento = ?, ID_Genero = ?, Telefone = ?,"
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

                if (usuario.getSexualidade() != null && usuario.getSexualidade().getId() > 0) {
                stmt.setInt(4, usuario.getSexualidade().getId());
                } else {
                stmt.setNull(4, java.sql.Types.INTEGER);
                }

                stmt.setString(5, usuario.getTelefone());
                stmt.setString(6, usuario.getCep());
                stmt.setString(7, usuario.getLogradouro());
                stmt.setString(8, usuario.getBairro());
                stmt.setString(9, usuario.getCidade());
                stmt.setString(10, usuario.getUf());
                stmt.setInt(11, usuario.getNumero());
                stmt.setString(12, usuario.getComplemento());
                stmt.setInt(13, usuario.getId());

                stmt.executeUpdate();
                return true;
        } catch (SQLException e) {
            System.err.println("Erro ao alterar usuário: " + e.getMessage());
            return false;
        }
    }
    public List<Usuario> listarTodos() {
        List<Usuario> lista = new ArrayList<>();

        String sql = "SELECT u.*, s.Descricao AS sexualidade_descricao"
                   + "FROM usuarios u "
                   + "LEFT JOIN sexualidade s ON u.ID_Genero = s.id";
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
}
