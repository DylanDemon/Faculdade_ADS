package com.exemplo.Controllers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.function.UnaryOperator;

import com.exemplo.DAO.ProdutosDAO;
import com.exemplo.model.Produtos;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.ComboBox;
import javafx.scene.control.DatePicker;
import javafx.scene.control.TextField;
import javafx.scene.control.TextFormatter;
import javafx.stage.Modality;
import javafx.stage.Stage;
import javafx.util.StringConverter;

public class CadastroProdutos {
    @FXML private TextField strID;
    @FXML private TextField strNome;
    @FXML private TextField strCategoria;
    @FXML private TextField strQuantidade;
    @FXML private TextField strPrecoCusto;
    @FXML private TextField strPrecoVenda;

    @FXML private DatePicker strValidade;

    @FXML private ComboBox<String> strStatus;

    @FXML
    public void initialize(){
        UnaryOperator<TextFormatter.Change> fNumero = change -> {
            String text = change.getControlNewText();
            if(text.isEmpty() || text.matches("\\d*")) return change;
            return null;
        };
        UnaryOperator<TextFormatter.Change> fDecimal = change -> {
            String text = change.getControlNewText();
            if (text.isEmpty() || text.matches("^\\d*[.,]?\\d*$")) {
                return change;
            }
            return null;
        };
        UnaryOperator<TextFormatter.Change> fLetras = change -> {
            String text = change.getControlNewText();
            if(text.isEmpty() || text.matches("^[a-zA-Z\\s]+$")) return change;
            return null;
        };
        strID.setTextFormatter(new TextFormatter<>(fNumero));
        strNome.setTextFormatter(new TextFormatter<>(fLetras));
        strCategoria.setTextFormatter(new TextFormatter<>(fLetras));
        strQuantidade.setTextFormatter(new TextFormatter<>(fNumero));
        strPrecoCusto.setTextFormatter(new TextFormatter<>(fDecimal));
        strPrecoVenda.setTextFormatter(new TextFormatter<>(fDecimal));
        strStatus.getItems().addAll(
            "Ativo", "Inativo"
        );
        strStatus.setValue("Ativo");

        String pattern = "dd/MM/yyyy";
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);

            strValidade.setConverter(new StringConverter<LocalDate>() {
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
                return null;
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
        strValidade.getEditor().setTextFormatter(textFormatter);
        strValidade.setPromptText("dd/mm/aaaa");
        strID.focusedProperty().addListener((observable, oldValue, newValue) -> {
            if(!newValue) PreencherID(strID.getText());
        });
    }
    @FXML
    private void digSalvar(ActionEvent event){
        try {
            if(strNome.getText().isBlank() || strNome.getText() == null || strCategoria.getText().isBlank() || strCategoria.getText() == null) throw new IllegalArgumentException("O Nome e Categoria Sao Obrigatorios");
            Produtos p = new Produtos();

            String idTexto = strID.getText() != null ? strID.getText().trim() : "";
            if (!idTexto.isEmpty() && !idTexto.equals("0")) p.setId(Integer.parseInt(idTexto));
            else p.setId(0);

            p.setNome(strNome.getText().trim());
            p.setCategoria(strCategoria.getText().trim());
            p.setValidade(strValidade.getValue());
            p.setStatus(strStatus.getValue());

            String qtdTexto = strQuantidade.getText() != null ? strQuantidade.getText().trim() : "";
            int estoque = qtdTexto.isEmpty() ? 0 : Integer.parseInt(qtdTexto);
            p.setEstoque(estoque);

            String custoTexto = strPrecoCusto.getText() != null ? strPrecoCusto.getText().trim().replace(",", ".") : "";
            BigDecimal precoCusto = custoTexto.isEmpty() ? BigDecimal.ZERO : new BigDecimal(custoTexto);
            p.setPrecoCusto(precoCusto);

            String vendaTexto = strPrecoVenda.getText() != null ? strPrecoVenda.getText().trim().replace(",", ".") : "";
            BigDecimal precoVenda = vendaTexto.isEmpty() ? BigDecimal.ZERO : new BigDecimal(vendaTexto);
            p.setPrecoVenda(precoVenda);

            ProdutosDAO dao = new ProdutosDAO();
            Boolean sucesso = false;
            List<TextField> textfieldCadastro = List.of(strID, strNome, strCategoria, strQuantidade, strPrecoCusto, strPrecoVenda);

            if(p.getId() > 0 && dao.existeId(p.getId())){
                boolean aceitar = exibirConfirmacao("Produto Existe", "Deseja Alterar Os Dados?");
                if(aceitar){
                    sucesso = dao.alterar(p);
                    if(sucesso) System.out.println("Produto Alterado Com Sucesso");
                } else return;
            }
            else{
                sucesso = dao.inserir(p);
                if (sucesso) System.out.println("Produto Cadastrado Com Sucesso");
            }

            if (sucesso) {
                textfieldCadastro.forEach(TextField::clear);       
                strValidade.setValue(null);
                strStatus.setValue("Ativo");

                exibirMensagem("Sucesso", "Informação salva com sucesso!", AlertType.INFORMATION);
                strNome.requestFocus();
            }
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
        strNome.requestFocus();
    }
    @FXML
    private void digNome(ActionEvent event){
        strCategoria.requestFocus();
    }
    @FXML
    private void digCategoria(ActionEvent event){
        strQuantidade.requestFocus();
    }
    @FXML
    private void digQuantidade(ActionEvent event){
        strPrecoCusto.requestFocus();
    }
    @FXML
    private void digCusto(ActionEvent event){
        strPrecoVenda.requestFocus();
    }
    @FXML 
    private void VerTabela(ActionEvent event){
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/exemplo/TabelaProdutos.fxml"));
            Parent root = loader.load();

            Stage stageTabela = new Stage();
            stageTabela.setTitle("Consulta de Produtos");
            stageTabela.setScene(new Scene(root));
            stageTabela.initModality(Modality.APPLICATION_MODAL);

            stageTabela.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao abrir a janela da tabela de produtos: " + e.getMessage());
            e.printStackTrace();
        }
    }
    private void PreencherID(String idTexto){
        if(idTexto == null || idTexto.trim().isEmpty()) return;
        try {int id = Integer.parseInt(idTexto.trim());
        ProdutosDAO dao = new ProdutosDAO();
        Produtos p = dao.buscarPorId(id);

        if (p != null) {
            strNome.setText(p.getNome());
            strCategoria.setText(p.getCategoria());
            strQuantidade.setText(String.valueOf(p.getEstoque()));
            strPrecoCusto.setText(String.valueOf(p.getPrecoCusto()));
            strPrecoVenda.setText(String.valueOf(p.getPrecoVenda()));
            
            strValidade.setValue(p.getValidade());
            strStatus.setValue(p.getStatus());

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
