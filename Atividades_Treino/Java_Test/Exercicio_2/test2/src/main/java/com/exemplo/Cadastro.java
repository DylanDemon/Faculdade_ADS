package com.exemplo;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.TextField;
import javafx.scene.control.TextFormatter;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.function.UnaryOperator;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import javafx.util.StringConverter;

public class Cadastro {
    public int vID = 0;
    @FXML private TextField strID;
    @FXML private TextField strNome;
    @FXML private TextField strCPF;
    @FXML private TextField strCelular;
    
    @FXML private TextField strCEP;
    @FXML private TextField strLogradouro;
    @FXML private TextField strBairro;
    @FXML private TextField strCidade;
    @FXML private TextField strRua;
    @FXML private TextField strNumCasa;
    @FXML private TextField strComplemento;
    
    
    @FXML private ComboBox<ItemCombo> strGenero;
    @FXML private ComboBox<String> strCivil;
    @FXML private ComboBox<String> strPais;
    @FXML private ComboBox<String> strTrabalho;
    @FXML private ComboBox<String> strUF;

    @FXML private DatePicker strNascimento;

    @FXML private List<TextField> textfieldCadastro;
    @FXML private List<ComboBox<String>> ComboBoxCadastro;

    @FXML
    public void initialize(){
        strCPF.setTextFormatter(criarFormatterCPF());
        strNome.setTextFormatter(criarFormatterApenasLetras());
        strCelular.setTextFormatter(criarFormatterCelular());

        strCivil.getItems().addAll(
            "Solteiro(a)",
            "Casado(a)",
            "Divorciado(a)",
            "Viúvo(a)",
            "União Estável"
        );
        strPais.getItems().addAll(
            "Argentina","Paraguay","Brasil","Estados Unidos","Inglaterra"
        );
        strUF.getItems().addAll("PR","AP");
        strTrabalho.getItems().addAll("Presencial","HomeOffice", "Hibrido");
        
        String pattern = "dd/MM/yyyy";
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);

            strNascimento.setConverter(new StringConverter<LocalDate>() {
                @Override
                public String toString(LocalDate date) {
                    if (date != null) {
                        return formatter.format(date);
                    } else {
                        return "";
                    }
                }

                @Override
                public LocalDate fromString(String string) {
                    if (string != null && !string.trim().isEmpty()) {
                        try {
                            return LocalDate.parse(string, formatter);
                        } catch (Exception e) {
                            return null;
                        }
                    }
                    return null;
                }
            });
            
            strNascimento.setPromptText("dd/mm/aaaa");
    }
    @FXML
    private void fCompleto(ActionEvent event) {
        try {
            for(TextField campo : textfieldCadastro) {
                if(campo.getText() == null|| campo.getText().trim().isEmpty()){
                    throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio");
                }
            }
            for(ComboBox<String> campo : ComboBoxCadastro) {
                if(campo.getValue() == null|| campo.getValue().trim().isEmpty()){
                    throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio");
                }
            }
            vID =+ 1;
            String Mensagem = "Informaçao Salvada";
            exibirMensagem("Cadastro Completo", Mensagem , AlertType.INFORMATION);

            strNome.requestFocus();

            strID.clear();
            strNome.clear();
            strCPF.clear();
            strNascimento.setValue(null);
            strCelular.clear();
            strGenero.setValue(null);
            strCivil.setValue(null);
            strCEP.clear();
            strPais.setValue(null);
            strLogradouro.clear();
            strBairro.clear();
            strCidade.clear();
            strUF.setValue(null);
            strRua.clear();
            strNumCasa.clear();
            strComplemento.clear();
        } catch (Exception e) {
            strNome.requestFocus();
            exibirMensagem("ERROR", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
        private void digID(ActionEvent event){
        try {
            String vID = strID.getText();
            if(vID != null) vID = vID.trim();
            strID.setText(vID);
            strNome.requestFocus();
        } catch (IllegalArgumentException e) {
            strID.requestFocus();
        }
    }
    @FXML
    private void digNome(ActionEvent event){
        try {
            String vNome = strNome.getText();
            if(vNome != null) vNome = vNome.trim();
            if(vNome.isBlank()) throw new IllegalArgumentException("Por Favor Digite Um Nome Valido, Nome: " + vNome);
            strNome.setText(vNome);
            strCPF.requestFocus();
        } catch (IllegalArgumentException e) {
            strNome.requestFocus();
            exibirMensagem("O Nome É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digCPF(ActionEvent event){
        try {
            String vCPF = strCPF.getText();
            if(vCPF != null) vCPF = vCPF.trim();
            if(vCPF == null || vCPF.isBlank()) throw new IllegalArgumentException("Por Favor Digite Um CPF Valido, CPF: " + vCPF);
            else{
                strNascimento.requestFocus();
            }
        } catch (IllegalArgumentException e) {
            strCPF.requestFocus();
            exibirMensagem("O CPF É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digNascimento(ActionEvent event){
        try {
            LocalDate vNascimento = strNascimento.getValue();
            if(vNascimento == null) throw new IllegalArgumentException("Por Favor Digite Uma Data Valido, Data: " + vNascimento);
            strCelular.requestFocus();
        } catch (IllegalArgumentException e) {
            strNascimento.requestFocus();
            exibirMensagem("A Data É Invalida", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digCelular(ActionEvent event){
        try {
            String vCelular = strCelular.getText();
            if(vCelular != null) vCelular = vCelular.trim();
            if(vCelular == null || vCelular.isBlank() ){
                throw new IllegalArgumentException("Por Favor Digite Um Numero De Celular Valido, Celular: " + vCelular);
            }
            else{
                strCelular.setText(vCelular);
                strGenero.requestFocus();
            }
        } catch (IllegalArgumentException e) {
            strCelular.requestFocus();
            exibirMensagem("O Celular É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digGenero(ActionEvent event){
    try {
            ItemCombo objGenero = strGenero.getValue();
            if (objGenero == null) {
                throw new IllegalArgumentException("Por favor, selecione um gênero na lista.");
            }
            String vGenero = objGenero.getDescricao();
            strCivil.requestFocus();

        } catch (IllegalArgumentException e) {
            strGenero.requestFocus();
            exibirMensagem("Gênero Inválido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digCivil(ActionEvent event){
        try {
            Object objCivil = strCivil.getValue();
            if(objCivil == null || objCivil.toString().isBlank()) throw new IllegalArgumentException("Por Favor Digite Um Estado Civil Valido");
                String vCivil = objCivil.toString().trim();
                strCivil.setValue(vCivil);
                strCEP.requestFocus();
        } catch (IllegalArgumentException e) {
            strCivil.requestFocus();
            exibirMensagem("O Civil É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digCEP(ActionEvent event){
        try {
            Integer vCEP = Integer.parseInt(strCEP.getText());;
            if(vCEP == null){
                throw new IllegalArgumentException("Por Favor Digite Uma CEP Valido, CEP: " + vCEP);
            }
            strCEP.setText(String.valueOf(vCEP));
          ViaCEP viaCep = new ViaCEP();
              viaCep.buscar(strCEP.getText());
              strBairro.setText(viaCep.getBairro());
              strRua.setText(viaCep.getLogradouro());
              strUF.setValue(viaCep.getUf());
              strCidade.setText(viaCep.getLocalidade());
              
            strPais.requestFocus();
        } catch (Exception e) {
            strCEP.requestFocus();
            exibirMensagem("O CEP É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digPais(ActionEvent event){
        try {
            Object objPais = strPais.getValue();
            if(objPais == null || objPais.toString().isBlank()) throw new IllegalArgumentException("Por Favor Digite Um Pais Valido");
                String vPais = objPais.toString().trim();
                strPais.setValue(vPais);
                strLogradouro.requestFocus();
        } catch (IllegalArgumentException e) {
            strPais.requestFocus();
            exibirMensagem("O Pais É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digLogradouro(ActionEvent event){
        try {
            String vLogradouro = strLogradouro.getText();
            if(vLogradouro != null) vLogradouro = vLogradouro.trim();
            if(vLogradouro == null || vLogradouro.isBlank()){
                throw new IllegalArgumentException("Por Favor Digite Uma Logradouro Valido, Logradouro: " + vLogradouro);
            }
            strLogradouro.setText(vLogradouro);
            strBairro.requestFocus();
        } catch (Exception e) {
            strLogradouro.requestFocus();
            exibirMensagem("O Logradouro É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digBairro(ActionEvent event){
        try {
            String vBairro = strBairro.getText();
            if(vBairro != null) vBairro = vBairro.trim();
            if(vBairro == null || vBairro.isBlank()){
                throw new IllegalArgumentException("Por Favor Digite Um Bairro Valido, Bairro: " + vBairro);
            }
            else{
                strBairro.setText(vBairro);
                strCidade.requestFocus();
            }
        } catch (IllegalArgumentException e) {
            strBairro.requestFocus();
            exibirMensagem("O Bairro É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digCidade(ActionEvent event){
        try {
            String vCidade = strCidade.getText();
            if(vCidade != null) vCidade = vCidade.trim();
            if(vCidade == null || vCidade.isBlank() ){
                throw new IllegalArgumentException("Por Favor Digite Uma Cidade Valido, Cidade: " + vCidade);
            }
            else{
                strCidade.setText(vCidade);
                strUF.requestFocus();
            }
        } catch (IllegalArgumentException e) {
            strCidade.requestFocus();
            exibirMensagem("A Cidade É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digUF(ActionEvent event){
        try {
            Object objUF = strUF.getValue();
            if(objUF == null || objUF.toString().isBlank()) throw new IllegalArgumentException("Por Favor Digite Um UF Valido");
                String vUF = objUF.toString().trim();
                strUF.setValue(vUF);
                strRua.requestFocus();
        } catch (IllegalArgumentException e) {
            strUF.requestFocus();
            exibirMensagem("O UF É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digRua(ActionEvent event){
        try {
            String vRua = strRua.getText();
            if(vRua != null) vRua = vRua.trim();
            if(vRua == null || vRua.isBlank()){
                throw new IllegalArgumentException("Por Favor Digite Uma Rua Valido, Rua: " + vRua);
            }
            else{
                strRua.setText(vRua);
                strNumCasa.requestFocus();
            }
        } catch (IllegalArgumentException e) {
            strRua.requestFocus();
            exibirMensagem("O Pais É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digNumCasa(ActionEvent event){
        try {
            String vNumCasa = strNumCasa.getText();
            if(vNumCasa != null) vNumCasa = vNumCasa.trim();
                strComplemento.requestFocus();
        } catch (IllegalArgumentException e) {
            strNumCasa.requestFocus();
            exibirMensagem("O Numero De Casa É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digComplemento(ActionEvent event){
        try {
            String vComplemento = strComplemento.getText();
            if(vComplemento != null ) vComplemento = vComplemento.trim();
        } catch (IllegalArgumentException e) {
            strComplemento.requestFocus();
            exibirMensagem("O Complemento É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
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
    private void trocarProjeto2(ActionEvent event) throws IOException {
        try {
        App.setRoot("imc");
    } catch (IOException e) {
        System.err.println("Erro ao carregar a tela imc.fxml:");
        e.printStackTrace();
    }
    }

    public static TextFormatter<String> criarFormatterCelular() {
        UnaryOperator<TextFormatter.Change> filtro = change -> {
            String novoTexto = change.getControlNewText();

            if (novoTexto.length() > 15) {
                return null;
            }
            if (novoTexto.matches("\\d*")) {
                return change;
            }
            return null;
        };

        return new TextFormatter<>(filtro);
    }
    public static TextFormatter<String> criarFormatterApenasLetras() {
        UnaryOperator<TextFormatter.Change> filtro = change -> {
            String novoTexto = change.getControlNewText();

            if (novoTexto.matches("[a-zA-Zá-úÁ-ÚçÇ ]*")) {
                return change;
            }
            return null; // Rejeita letras, símbolos e espaços
        };

        return new TextFormatter<>(filtro);
    }
    public static TextFormatter<String> criarFormatterEmail() {
        UnaryOperator<TextFormatter.Change> filtro = change -> {
            String novoTexto = change.getControlNewText();

            if (novoTexto.matches("^[a-zA-Z0-9._%+-]*@?[a-zA-Z0-9.-]*\\.?[a-zA-Z]*$")) {
                return change;
            }
            return null;
        };

        return new TextFormatter<>(filtro);
    }
    public static TextFormatter<String> criarFormatterCPF() {
        UnaryOperator<TextFormatter.Change> filtro = change -> {
            String textoProposto = change.getControlNewText();

            String apenasNumeros = textoProposto.replaceAll("\\D", "");
            if (apenasNumeros.length() > 11) {
                return null;
            }

            StringBuilder cpfnovo = new StringBuilder();
            int qtdNumeros = apenasNumeros.length();

            for (int i = 0; i < qtdNumeros; i++) {
                if (i == 3) {
                    cpfnovo.append(".");
                }
                if (i == 6) {
                    cpfnovo.append(".");
                }
                if (i == 9) {
                    cpfnovo.append("-");
                }
                cpfnovo.append(apenasNumeros.charAt(i));
            }

            change.setText(cpfnovo.toString());
            change.setRange(0, change.getControlText().length());
            change.setCaretPosition(cpfnovo.length());
            change.setAnchor(cpfnovo.length());

            return change;
        };

        return new TextFormatter<>(filtro);
    }
    private void exibirMensagem(String titulo, String mensagem, AlertType tipo) {
        Alert alerta = new Alert(tipo);
        alerta.setTitle(titulo);
        alerta.setHeaderText(null); // Remove o cabeçalho secundário para ficar mais limpo
        alerta.setContentText(mensagem);
        alerta.showAndWait(); // Exibe a janela e aguarda o usuário clicar em OK
    }
}