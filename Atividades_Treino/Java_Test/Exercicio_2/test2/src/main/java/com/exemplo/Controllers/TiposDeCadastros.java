package com.exemplo.Controllers;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert.AlertType;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class TiposDeCadastros {
    @FXML 
    private void TelaUsuario(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/exemplo/CadastroUsuarios.fxml"));
            Parent root = loader.load();

            Stage stageTabela = new Stage();
            stageTabela.setTitle("Tabela De Usuarios");
            stageTabela.setScene(new Scene(root));
            stageTabela.initModality(Modality.APPLICATION_MODAL);

            stageTabela.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao abrir a janela da tabela de usuarios: " + e.getMessage());
            e.printStackTrace();
        }
    }
    @FXML 
    private void TelaGenero(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/exemplo/CadastroGeneros.fxml"));
            Parent root = loader.load();

            Stage stageTabela = new Stage();
            stageTabela.setTitle("Tabela De Usuarios");
            stageTabela.setScene(new Scene(root));
            stageTabela.initModality(Modality.APPLICATION_MODAL);

            stageTabela.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao abrir a janela da tabela de usuarios: " + e.getMessage());
            e.printStackTrace();
        }
    }
        @FXML 
    private void TelaProdutos(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/exemplo/CadastroProdutos.fxml"));
            Parent root = loader.load();

            Stage stageTabela = new Stage();
            stageTabela.setTitle("Tabela De Usuarios");
            stageTabela.setScene(new Scene(root));
            stageTabela.initModality(Modality.APPLICATION_MODAL);

            stageTabela.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao abrir a janela da tabela de usuarios: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
