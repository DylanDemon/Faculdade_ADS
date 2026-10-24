package com.exemplo.Controllers;

import com.exemplo.DAO.SexualidadeDAO;
import com.exemplo.model.Sexualidade;

import java.util.function.UnaryOperator;
import javafx.scene.control.TextFormatter;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;

import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.event.ActionEvent;
import javafx.scene.Parent;
import javafx.stage.Stage;
import javafx.stage.Modality;
import javafx.scene.Scene;
import java.util.List;
import java.util.Optional;

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
            genero.setId(Integer.parseInt(gstrID.getText()));
            genero.setDescripcao(gstrDescripcao.getText());
            genero.setSigla(gstrSigla.getText());
            genero.setStatus(gstrStatus.getValue().toString().trim());

            SexualidadeDAO generoDAO = new SexualidadeDAO();
            if(generoDAO.existeId(genero.getId())){
                boolean aceitou = exibirConfirmacao("Confirmaçao Alterar", "Já Existe Este Genero, Quer Alterar?");
                if(aceitou){
                    boolean alterar = generoDAO.Alterar(genero);
                    if(alterar) System.out.println("Usuário Alterado Com Sucesso");
                }
            }
            else {
                boolean insert = generoDAO.insert(genero);
                if(insert) System.out.println("Usuário Cadastrado Com Sucesso");
            }

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
        } catch (Exception e) {
            gstrSigla.requestFocus();
            exibirMensagem("Erro Na Sigla", "Teve Um Erro No Sigla", AlertType.INFORMATION);
        }
    }
    @FXML 
    private void AbrirTabela(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/exemplo/TabelaGenero.fxml"));
            Parent root = loader.load();

            Stage stageTabela = new Stage();
            stageTabela.setTitle("Consulta de Generos / Sexualidade");
            stageTabela.setScene(new Scene(root));
            stageTabela.initModality(Modality.APPLICATION_MODAL);

            stageTabela.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao abrir a janela da tabela de gênero: " + e.getMessage());
            e.printStackTrace();
        }
    }
    private void exibirMensagem(String titulo, String mensagem, AlertType tipo) {
        Alert alerta = new Alert(tipo);
        alerta.setTitle(titulo);
        alerta.setHeaderText(null); // Remove o cabeçalho secundário para ficar mais limpo
        alerta.setContentText(mensagem);
        alerta.showAndWait(); // Exibe a janela e aguarda o usuário clicar em OK
    }
        private boolean exibirConfirmacao(String titulo, String mensagem) {
        Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
        alert.setTitle(titulo);
        alert.setHeaderText(null);
        alert.setContentText(mensagem);

        Optional<ButtonType> resultado = alert.showAndWait();

        return resultado.isPresent() && resultado.get() == ButtonType.OK;
    }
}
