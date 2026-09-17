package com.exemplo;

import java.io.IOException;

import javafx.event.ActionEvent;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.TextField;
import javafx.fxml.FXML;

public class IMC {
    @FXML
    private TextField strAltura;
    private TextField strPeso;
    @FXML
    private void trocarProjeto1() throws IOException {
        App.setRoot("calculadora");
    }
    private void ValorAltura(ActionEvent event){
        try {
            Double VAltura = Double.parseDouble(strAltura.getText());
            if(event.getCode() || keyCode.Enter){
                strPeso.requestFocus();
            }
        } catch (Exception e) {
            exibirMensagemErro("Valor Invalido", "Digite Uma Altura Valida");
            strAltura.requestFocus();
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