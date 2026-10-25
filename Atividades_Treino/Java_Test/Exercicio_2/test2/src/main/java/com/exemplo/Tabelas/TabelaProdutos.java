package com.exemplo.Tabelas;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.exemplo.DAO.ProdutosDAO;
import com.exemplo.model.Produtos;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;

import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.TableView;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;
import java.math.BigDecimal;

public class TabelaProdutos {
    @FXML private TableView<Produtos> tableProducts;
    @FXML private TableColumn<Produtos, Integer> colID;
    @FXML private TableColumn<Produtos, String> colNome;
    @FXML private TableColumn<Produtos, String> colCategoria;
    @FXML private TableColumn<Produtos, Integer> colEstoque;
    @FXML private TableColumn<Produtos, LocalDate> colValidade;
    @FXML private TableColumn<Produtos, BigDecimal> colPrecoCusto;
    @FXML private TableColumn<Produtos, BigDecimal> colPrecoVenda;
    @FXML private TableColumn<Produtos, String> colStatus;

    @FXML
    public void initialize() {
        colID.setCellValueFactory(new PropertyValueFactory<>("Id"));
        colNome.setCellValueFactory(new PropertyValueFactory<>("Nome"));
        colCategoria.setCellValueFactory(new PropertyValueFactory<>("Categoria"));
        colEstoque.setCellValueFactory(new PropertyValueFactory<>("Estoque"));
        colPrecoCusto.setCellValueFactory(new PropertyValueFactory<>("PrecoCusto"));
        colPrecoVenda.setCellValueFactory(new PropertyValueFactory<>("PrecoVenda"));
        colStatus.setCellValueFactory(new PropertyValueFactory<>("Status"));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        colValidade.setCellValueFactory(new PropertyValueFactory<>("Validade"));
        colValidade.setCellFactory(column -> new TableCell<Produtos, LocalDate>() {
            @Override
            protected void updateItem(LocalDate item, boolean empty) {
                super.updateItem(item, empty);

                if (empty || item == null) {
                    setText(null);
                } else {
                    setText(formatter.format(item));
                }
            }
        });

        tableProducts.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);
        carregarTabela();
    }

    public void carregarTabela() {
        ProdutosDAO dao = new ProdutosDAO();
        ObservableList<Produtos> obsList = FXCollections.observableArrayList(dao.listarTodos());
        tableProducts.setItems(obsList);
    }
}
