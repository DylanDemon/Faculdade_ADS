package com.exemplo;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexao {
    private static final String URL = "jdbc:mysql://localhost:3306/bancoregistro";
    private static final String USUARIO = "root";
    private static final String SENHA = "#Maestros#21";

    // Método estático que qualquer outro arquivo Java pode chamar
    public static Connection getConexao() throws SQLException {
        return DriverManager.getConnection(URL, USUARIO, SENHA);
    }
}