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
}
