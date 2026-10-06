package com.exemplo;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;

import java.io.IOException;

public class IMC {
    @FXML
    private TextField strAltura;
    @FXML
    private TextField strPeso;
    @FXML
    private Label vIMC;

    private Double VAltura;
    private Double VPeso;

    @FXML
    private void trocarProjeto1(ActionEvent event) throws IOException {
        try {
        App.setRoot("calculadora");
    } catch (IOException e) {
        System.err.println("Erro ao carregar a tela imc.fxml:");
        e.printStackTrace();
    }
    }
    @FXML
    private void trocarProjeto3(ActionEvent event) throws IOException {
        try {
        App.setRoot("cadastro");
    } catch (IOException e) {
        System.err.println("Erro ao carregar a tela imc.fxml:");
        e.printStackTrace();
    }
    }
    @FXML
    private void ValorPeso(ActionEvent event){
        try {
            VPeso = Double.parseDouble(strPeso.getText());
            strAltura.requestFocus();
        } catch (Exception e) {
            exibirMensagemErro("Valor Invalido", "Digite Um Peso Valido");
            strPeso.requestFocus();
        }   
    }
    @FXML
    private void ValorAltura(ActionEvent event){
        try {
            VAltura = Double.parseDouble(strAltura.getText());
            if(VAltura != null && VPeso != null){
            Double Total = VPeso / (VAltura * VAltura);
            VPeso = null;
            VAltura = null;
            vIMC.setText(String.valueOf(Total));
            strPeso.setText(String.valueOf(""));
            strAltura.setText(String.valueOf(""));
            strPeso.requestFocus();
            }
        } catch (Exception e) {
            exibirMensagemErro("Valor Invalido", "Digite Uma Altura Valida");
        }   
    }
    private void exibirMensagemErro(String titulo, String mensagem) {
        Alert alert = new Alert(AlertType.ERROR);
        alert.setTitle("Erro de Entrada");
        alert.setHeaderText(titulo);
        alert.setContentText(mensagem);
        alert.showAndWait(); // Exibe a janela e espera o usuário clicar em 'OK'
    }
}