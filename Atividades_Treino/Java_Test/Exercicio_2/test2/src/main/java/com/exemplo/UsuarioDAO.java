package com.exemplo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDAO {

    public List<String> buscarNomesUsuarios() {
        List<String> nomes = new ArrayList<>();
        String sql = "SELECT nome FROM usuarios";

        try (Connection conn = conexao.getConexao();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                nomes.add(rs.getString("nome"));
            }

        } catch (Exception e) {
            System.out.println("Erro ao buscar usuários: " + e.getMessage());
        }

        return nomes;
    }
}
