package com.exemplo.Controllers;

import com.exemplo.DAO.SexualidadeDAO;
import com.exemplo.DAO.UsuarioDAO;
import com.exemplo.model.Sexualidade;
import com.exemplo.model.Usuario;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.TextField;
import javafx.scene.control.TextFormatter;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.UnaryOperator;

import com.exemplo.util.ItemCombo;
import com.exemplo.viacep.ViaCEP;

import javafx.util.StringConverter;

public class CadastroUsuarios {
    public int vID = 0;
    @FXML private TextField strID;
    @FXML private TextField strNome;
    @FXML private TextField strCPF;
    @FXML private TextField strCelular;
    
    @FXML private TextField strCEP;
    @FXML private TextField strLogradouro;
    @FXML private TextField strBairro;
    @FXML private TextField strCidade;
    @FXML private TextField strNumCasa;
    @FXML private TextField strComplemento;
    
    
    @FXML private ComboBox<ItemCombo> strGenero;
    @FXML private ComboBox<String> strCivil;
    @FXML private ComboBox<String> strUF;

    @FXML private DatePicker strNascimento;

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
        strUF.getItems().addAll("PR","AP");
        
        String pattern = "dd/MM/yyyy";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);

        strNascimento.setConverter(new StringConverter<LocalDate>() {
            @Override
            public String toString(LocalDate date) {
                return (date != null) ? formatter.format(date) : "";
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

        UnaryOperator<TextFormatter.Change> dateFilter = change -> {
            if (change.isDeleted()) {
                return change;
            }

            String input = change.getText();
            if (!input.matches("\\d*")) {
                return null; // Bloqueia letras
            }

            String newText = change.getControlNewText();
            String apenasNumeros = newText.replaceAll("/", "");

            if (apenasNumeros.length() > 8) {
                return null; // Limita ao tamanho da data
            }

            String textoFormatado = apenasNumeros;
            if (apenasNumeros.length() > 4) {
                textoFormatado = apenasNumeros.replaceAll("^(\\d{2})(\\d{2})(\\d{0,4})$", "$1/$2/$3");
            } else if (apenasNumeros.length() > 2) {
                textoFormatado = apenasNumeros.replaceAll("^(\\d{2})(\\d{0,2})$", "$1/$2");
            }

            change.setRange(0, change.getControlText().length());
            change.setText(textoFormatado);
            change.setCaretPosition(textoFormatado.length());
            change.setAnchor(textoFormatado.length());

            return change;
        };

        TextFormatter<String> textFormatter = new TextFormatter<>(dateFilter);
        strNascimento.getEditor().setTextFormatter(textFormatter);
        strNascimento.setPromptText("dd/mm/aaaa");

            carregarGeneros();
            strID.focusedProperty().addListener((observable, oldValue, newValue) -> {
                if(!newValue){
                    PreencherID(strID.getText());
                }
            });
            strCivil.valueProperty().addListener((obs, antigo, novo) -> {
                if(novo != null) {
                    strCEP.requestFocus();
                }
            });
    }
    @FXML
    private void fCompleto(ActionEvent event) {
        try {
            if(strGenero.getValue() == null) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio : Genero");
            if(strCivil.getValue() == null) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio : Civil");
            if(strUF.getValue() == null) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio: UF");
            if(strNascimento.getValue() == null) throw new IllegalArgumentException("Tem Algum Informaçao Obrigatoria Vacio: ");

        List<TextField> textfieldCadastro = List.of(strNome, strCPF, strCelular, strCEP, strLogradouro, strBairro, strCidade);
        for (TextField campo : textfieldCadastro) {
            if (campo.getText() == null || campo.getText().trim().isEmpty()) {
                throw new IllegalArgumentException("Informação obrigatória vazia: " + campo.getPromptText());
            }
        }   
            ItemCombo Selecionado = strGenero.getValue();
            Sexualidade s = new Sexualidade();
            s.setId(Selecionado.getId());

            Usuario user = new Usuario();
            
             String idTexto = strID.getText() != null ? strID.getText().trim() : "";
            if (!idTexto.isEmpty() && !idTexto.equals("0")) user.setId(Integer.parseInt(idTexto));
            else user.setId(0);

            user.setNome(strNome.getText().trim());
            user.setCpf(strCPF.getText().trim());
            user.setNascimento(strNascimento.getValue());
            user.setTelefone(strCelular.getText().trim());
            user.setSexualidade(s);
            user.setCivil(strCivil.getValue());
            user.setCep(strCEP.getText().trim());
            user.setLogradouro(strLogradouro.getText().trim());
            user.setBairro(strBairro.getText().trim());
            user.setCidade(strCidade.getText().trim());
            user.setUf(strUF.getValue());
            user.setComplemento(strComplemento.getText() != null ? strComplemento.getText().trim() : "");
            if (strNumCasa.getText() != null && !strNumCasa.getText().trim().isEmpty()) {
            user.setNumero(Integer.parseInt(strNumCasa.getText().trim()));
            } else {
                user.setNumero(0);
            }

            UsuarioDAO dao = new UsuarioDAO();
            boolean sucesso = false;
            if(user.getId() > 0 && dao.existeId(user.getId())){
                boolean aceitar = exibirConfirmacao("Usuario Existe", "Deseja Alterar Os Dados?");
                if(aceitar){
                    sucesso = dao.alterar(user);
                     if(sucesso) {
                        exibirMensagem("Sucesso", "Usuario Alterado Com Sucesso", AlertType.INFORMATION);
                        System.out.println("Usuário Alterado Com Sucesso");
                    }
                } 
                else return;
            }
            else{
                sucesso = dao.inserir(user);
                if (sucesso) System.out.println("Usuário Cadastrado Com Sucesso");
                
            }
            if (sucesso) {
                textfieldCadastro.forEach(TextField::clear);
                strID.clear();
                strNumCasa.clear();
                strComplemento.clear();
                
                strNascimento.setValue(null);
                strGenero.setValue(null);
                strCivil.setValue(null);
                strUF.setValue(null);

                exibirMensagem("Sucesso", "Informação salva com sucesso!", AlertType.INFORMATION);
                strNome.requestFocus();
                return;            
            }
            } catch (NumberFormatException e) {
                    exibirMensagem("Erro de Formatação", "O campo 'Número da Casa' ou 'ID' deve conter apenas números válidos.", AlertType.ERROR);
                    strNumCasa.requestFocus();
            } catch (IllegalArgumentException e) {
                    exibirMensagem("Validação", e.getMessage(), AlertType.WARNING);
                    strNome.requestFocus();
            } catch (Exception e) {
                    exibirMensagem("Erro Crítico", "Erro inesperado ao salvar: " + e.getMessage(), AlertType.ERROR);
                    e.printStackTrace();
            }
    }
    @FXML
        private void digID(ActionEvent event){
        try {
            String vID = strID.getText();
            if(vID != null) vID = vID.trim();
            strNome.requestFocus();
        } catch (IllegalArgumentException e) {
            strID.requestFocus();
        }
    }
    @FXML
    private void digNome(ActionEvent event){
        try {
            String vNome = strNome.getText();
            if (vNome == null || vNome.trim().isEmpty()) throw new IllegalArgumentException("Por favor, digite um nome válido.");
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
            if (vCPF == null || vCPF.trim().isEmpty()) throw new IllegalArgumentException("Por favor, digite um CPF válido.");
                strNascimento.requestFocus();

        } catch (IllegalArgumentException e) {
            strCPF.requestFocus();
            exibirMensagem("O CPF É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digNascimento(ActionEvent event){
        try {
            if(strNascimento.getValue().toString().isBlank() || strNascimento.getValue().toString() == null ) throw new IllegalArgumentException("Por favor, digite um Nascimento válido.");
                strCelular.requestFocus();

        } catch (IllegalArgumentException e) {
            strNascimento.requestFocus();
            exibirMensagem("O Nascimento É Invalido", e.getMessage(), AlertType.ERROR);
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
                strGenero.requestFocus();
            }
        } catch (IllegalArgumentException e) {
            strCelular.requestFocus();
            exibirMensagem("O Celular É Invalido", e.getMessage(), AlertType.ERROR);
        }
    }
    @FXML
    private void digCEP(ActionEvent event){
        try {
            String vCEP = strCEP.getText();
            if(vCEP == null || vCEP.isBlank()){
                throw new IllegalArgumentException("Por Favor Digite Uma CEP Valido, CEP: " + vCEP);
            }
            strCEP.setText(String.valueOf(vCEP));
            ViaCEP viaCep = new ViaCEP();
              viaCep.buscar(strCEP.getText());
              strBairro.setText(viaCep.getBairro());
              strLogradouro.setText(viaCep.getLogradouro());
              strUF.setValue(viaCep.getUf());
              strCidade.setText(viaCep.getLocalidade());
              
            strLogradouro.requestFocus();
        } catch (Exception e) {
            strCEP.requestFocus();
            exibirMensagem("O CEP É Invalido", e.getMessage(), AlertType.ERROR);
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
    private void digNumCasa(ActionEvent event){
        try {
            String vNumCasa = strNumCasa.getText();
            if(vNumCasa != null) vNumCasa = vNumCasa.trim();
                strBairro.requestFocus();
        } catch (IllegalArgumentException e) {
            strNumCasa.requestFocus();
            exibirMensagem("O Numero De Casa É Invalido", e.getMessage(), AlertType.ERROR);
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
    private void digComplemento(ActionEvent event){
        try {
            String vComplemento = strComplemento.getText();
            if(vComplemento != null ) vComplemento = vComplemento.trim();
        } catch (IllegalArgumentException e) {
            strComplemento.requestFocus();
            exibirMensagem("O Complemento É Invalido", e.getMessage(), AlertType.ERROR);
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
    private void carregarGeneros(){
        SexualidadeDAO dao = new SexualidadeDAO();
        List<Sexualidade> listaBanco = dao.listarTodos();
        List<ItemCombo> itensCombo = new ArrayList<>();
        for(Sexualidade s : listaBanco) if("Ativo".equalsIgnoreCase(s.getStatus()))itensCombo.add(new ItemCombo(s.getId(), s.getDescripcao()));
        ObservableList<ItemCombo> obsLista = FXCollections.observableArrayList(itensCombo);
        strGenero.setItems(obsLista);
    }
    private void PreencherID(String idTexto){
        if(idTexto == null || idTexto.trim().isEmpty()) return;
        try {int id = Integer.parseInt(idTexto.trim());
        UsuarioDAO dao = new UsuarioDAO();
        Usuario user = dao.buscarPorId(id);

        if (user != null) {
            strNome.setText(user.getNome());
            strCPF.setText(user.getCpf());
            strCelular.setText(user.getTelefone());
            strCEP.setText(user.getCep());
            strLogradouro.setText(user.getLogradouro());
            strBairro.setText(user.getBairro());
            strCidade.setText(user.getCidade());
            strComplemento.setText(user.getComplemento());
            strNumCasa.setText(String.valueOf(user.getNumero()));
            
            strNascimento.setValue(user.getNascimento());
            strCivil.setValue(user.getCivil());
            strUF.setValue(user.getUf());

            if (user.getSexualidade() != null && strGenero.getItems() != null) {
                for (ItemCombo item : strGenero.getItems()) {
                    if (item.getId() == user.getSexualidade().getId()) {
                        strGenero.setValue(item);
                        break;
                    }
                }
            }

            System.out.println("Dados do usuário ID " + id + " carregados na tela.");
        }
    } catch (NumberFormatException e) {
    } catch (Exception e) {
        exibirMensagem("Erro", "Erro ao buscar dados do usuário: " + e.getMessage(), AlertType.ERROR);
    }
    }
    @FXML 
    private void VerTabela(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/exemplo/TabelaUsuarios.fxml"));
            Parent root = loader.load();

            Stage stageTabela = new Stage();
            stageTabela.setTitle("Consulta de Usuarios");
            stageTabela.setScene(new Scene(root));
            stageTabela.initModality(Modality.APPLICATION_MODAL);

            stageTabela.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao abrir a janela da tabela de usuarios: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private boolean exibirConfirmacao(String titulo, String mensagem) {
        Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
        alert.setTitle(titulo);
        alert.setHeaderText(null);
        alert.setContentText(mensagem);

        Optional<ButtonType> resultado = alert.showAndWait();

        return resultado.isPresent() && resultado.get() == ButtonType.OK;
    }
    private void exibirMensagem(String titulo, String mensagem, AlertType tipo) {
        Alert alerta = new Alert(tipo);
        alerta.setTitle(titulo);
        alerta.setHeaderText(null);
        alerta.setContentText(mensagem);
        alerta.showAndWait();
    }
}