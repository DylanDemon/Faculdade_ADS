package com.exemplo;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;

public class Cad_Generos {
    @FXML private TextField gstrID;
    @FXML private TextField gstrDescripcao;
    @FXML private TextField gstrSigla;
    @FXML private ComboBox<String> gstrStatus;

    @FXML
    private void digID(ActionEvent event){
        try {
            
        } catch (Exception e) {
            gstrID.requestFocus();
            exibirMensagem("Erro Na ID", "Teve Um Erro No ID", AlertType.INFORMATION);
        }
    }
        private void exibirMensagem(String titulo, String mensagem, AlertType tipo) {
        Alert alerta = new Alert(tipo);
        alerta.setTitle(titulo);
        alerta.setHeaderText(null); // Remove o cabeçalho secundário para ficar mais limpo
        alerta.setContentText(mensagem);
        alerta.showAndWait(); // Exibe a janela e aguarda o usuário clicar em OK
    }
}
