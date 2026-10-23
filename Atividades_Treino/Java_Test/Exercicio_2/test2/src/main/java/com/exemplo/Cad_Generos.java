package com.exemplo;

import com.exemplo.DAO.SexualidadeDAO;
import com.exemplo.model.Sexualidade;

import java.util.function.UnaryOperator;
import javafx.scene.control.TextFormatter;

import javafx.beans.Observable;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;
import java.util.List;

public class Cad_Generos {
    @FXML private TextField gstrID;
    @FXML private TextField gstrDescripcao;
    @FXML private TextField gstrSigla;
    @FXML private ComboBox<String> gstrStatus;
    @FXML private List<TextField> TextField_Genero;

    @FXML
    public void initialize(){
        UnaryOperator<TextFormatter.Change> fNumero = change -> {
            String text = change.getControlNewText();
            if(text.matches("\\d*")) return change;
            return null;
        };
        UnaryOperator<TextFormatter.Change> fLetras = change -> {
            String text = change.getControlNewText();
            if(text.matches("[a-z]*")) return change;
            return null;
        };
        gstrID.setTextFormatter(new TextFormatter<>(fNumero));
        gstrDescripcao.setTextFormatter(new TextFormatter<>(fLetras));

        gstrStatus.getItems().addAll(
            "Ativo", "Desativado"
        );
    }
    @FXML
    private void digSalvar(ActionEvent event){
        Sexualidade genero = new Sexualidade();
        try {
            for(TextField campo : TextField_Genero) {
                if(campo.getText() == null|| campo.getText().trim().isEmpty()){
                    throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio");
                }
            }
            if(gstrStatus.getValue().toString().trim() == null) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio");
            
        } catch (Exception e) {
            exibirMensagem("Não Foi Possivel Salvar", "Tem Alguma Informaçao Obrigatoria", AlertType.INFORMATION);
        }

    }
    @FXML
    private void digID(ActionEvent event){
        try {
            int vID = Integer.parseInt(gstrID.getText());
            if(vID < 0) throw new IllegalArgumentException("Por Favor Digite Um ID Valido, ID: " + vID);
            gstrDescripcao.requestFocus();
        } catch (IllegalArgumentException e) {
            gstrID.requestFocus();
            exibirMensagem("Erro Na ID", "Teve Um Erro No ID", AlertType.INFORMATION);
        }
    }
    @FXML
    private void digDescripcao(ActionEvent event){
        try {
            String vDescripcao = gstrDescripcao.getText();
            if(vDescripcao != null) throw new IllegalArgumentException("Por Favor Digite Uma Descriçao Valido, Descriçao: " + vDescripcao);
            gstrSigla.requestFocus();
        } catch (IllegalArgumentException e) {
            gstrDescripcao.requestFocus();
            exibirMensagem("Erro Na Descripçao", "Teve Um Erro No Descripcao", AlertType.INFORMATION);
        }
    }
    @FXML 
    private void digSigla(ActionEvent event){
        try {
            String vSigla = gstrSigla.getText();
            if(vSigla != null) throw new IllegalArgumentException("Por Favor Digite Uma Sigla Valida, Sigla: " + vSigla);
            gstrStatus.requestFocus();
        } catch (IllegalArgumentException e) {
            gstrSigla.requestFocus();
            exibirMensagem("Erro Na Sigla", "Teve Um Erro No Sigla", AlertType.INFORMATION);
        }
    }
    @FXML
    private void digStatus(ActionEvent event){
        try {
            Object objStatus = gstrStatus.getValue();
            if(objStatus == null || objStatus.toString().isBlank()) throw new IllegalArgumentException("Por Favor Seleccione Um Status");
            String vStatus = objStatus.toString().trim();
        } catch (Exception e) {
            gstrSigla.requestFocus();
            exibirMensagem("Erro Na Sigla", "Teve Um Erro No Sigla", AlertType.INFORMATION);
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
