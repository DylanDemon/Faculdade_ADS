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

public class CadastroGeneros {
    @FXML private TextField strID;
    @FXML private TextField strDescripcao;
    @FXML private TextField strSigla;
    @FXML private ComboBox<String> strStatus;

    @FXML
    public void initialize(){
        UnaryOperator<TextFormatter.Change> fNumero = change -> {
            String text = change.getControlNewText();
            if(text.isEmpty() || text.matches("\\d*")) return change;
            return null;
        };
        UnaryOperator<TextFormatter.Change> fLetras = change -> {
            String text = change.getControlNewText();
            if(text.isEmpty() || text.matches("^[a-zA-Z]+$")) return change;
            return null;
        };
        strID.setTextFormatter(new TextFormatter<>(fNumero));
        strDescripcao.setTextFormatter(new TextFormatter<>(fLetras));

        strStatus.getItems().addAll(
            "Ativo", "Inativo"
        );
        strStatus.setValue("Ativo");
        strID.focusedProperty().addListener((observable, oldValue, newValue) -> {
            if(!newValue) PreencherID(strID.getText());
        });
    }

    @FXML
    private void digSalvar(ActionEvent event){
        
        try {
            Sexualidade s = new Sexualidade();
            List<TextField> textfieldCadastro = List.of(strDescripcao, strSigla);
            for(TextField campo : textfieldCadastro) {
                if(campo.getText() == null|| campo.getText().trim().isEmpty()) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio");
            }
            if(strStatus.getValue().toString().trim() == null) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio");

            String idTexto = strID.getText() != null ? strID.getText().trim() : "";
            if (!idTexto.isEmpty() && !idTexto.equals("0")) s.setId(Integer.parseInt(idTexto));
            else s.setId(0);
            s.setDescripcao(strDescripcao.getText());
            s.setSigla(strSigla.getText());
            s.setStatus(strStatus.getValue().toString().trim());

            SexualidadeDAO dao = new SexualidadeDAO();
            boolean sucesso = false;
            if(s.getId() > 0 && dao.existeId(s.getId())){
                boolean aceitar = exibirConfirmacao("Confirmaçao Alterar", "Já Existe Este Genero, Quer Alterar?");
                if(aceitar){
                    sucesso = dao.alterar(s);
                    if(sucesso) System.out.println("Genero Alterado Com Sucesso");
                }
            }
            else {
                sucesso = dao.inserir(s);
                if(sucesso) System.out.println("Genero Cadastrado Com Sucesso");
            }
            if(sucesso){
                strID.clear();
                strDescripcao.clear();
                strSigla.clear();
                strStatus.setValue("Ativo");

                exibirMensagem("Sucesso", "Informação salva com sucesso!", AlertType.INFORMATION);
                strID.requestFocus();         
            }
        } catch (Exception e) {
            exibirMensagem("Não Foi Possivel Salvar", "Tem Alguma Informaçao Obrigatoria", AlertType.INFORMATION);
        }

    }
    @FXML
    private void digID(ActionEvent event){
        try {
            int vID = Integer.parseInt(strID.getText());
            if(vID < 0) throw new IllegalArgumentException("Por Favor Digite Um ID Valido, ID: " + vID);
            strDescripcao.requestFocus();
        } catch (IllegalArgumentException e) {
            strID.requestFocus();
            exibirMensagem("Erro Na ID", "Teve Um Erro No ID", AlertType.INFORMATION);
        }
    }
    @FXML
    private void digDescripcao(ActionEvent event){
        try {
            String vDescripcao = strDescripcao.getText();
            if(vDescripcao.isBlank() || vDescripcao == null) throw new IllegalArgumentException("Por Favor Digite Uma Descriçao Valido, Descriçao: " + vDescripcao);
            strSigla.requestFocus();
        } catch (IllegalArgumentException e) {
            strDescripcao.requestFocus();
            exibirMensagem("Erro Na Descripçao", "Teve Um Erro No Descripcao", AlertType.INFORMATION);
        }
    }
    @FXML 
    private void digSigla(ActionEvent event){
        try {
            String vSigla = strSigla.getText();
            if(vSigla.isBlank() || vSigla == null) throw new IllegalArgumentException("Por Favor Digite Uma Sigla Valida, Sigla: " + vSigla);
            strStatus.requestFocus();
        } catch (IllegalArgumentException e) {
            strSigla.requestFocus();
            exibirMensagem("Erro Na Sigla", "Teve Um Erro No Sigla", AlertType.INFORMATION);
        }
    }
    @FXML
    private void digStatus(ActionEvent event){
        try {
            Object objStatus = strStatus.getValue();
            if(objStatus == null || objStatus.toString().isBlank()) throw new IllegalArgumentException("Por Favor Seleccione Um Status");
        } catch (Exception e) {
            strSigla.requestFocus();
            exibirMensagem("Erro Na Sigla", "Teve Um Erro No Sigla", AlertType.INFORMATION);
        }
    }
    @FXML 
    private void VerTabela(ActionEvent event){
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
    private void PreencherID(String idTexto){
        if(idTexto == null || idTexto.trim().isEmpty()) return;
        try {int id = Integer.parseInt(idTexto.trim());
        SexualidadeDAO dao = new SexualidadeDAO();
        Sexualidade s = dao.buscarPorId(id);

        if (s != null) {
            strDescripcao.setText(s.getDescripcao());
            strSigla.setText(s.getSigla());
            strStatus.setValue(s.getStatus());

            System.out.println("Dados do produto ID " + id + " carregados na tela.");
        }
    } catch (NumberFormatException e) {
    } catch (Exception e) {
        exibirMensagem("Erro", "Erro ao buscar dados do produto: " + e.getMessage(), AlertType.ERROR);
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
