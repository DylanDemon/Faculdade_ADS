package com.exemplo.Tabelas;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.exemplo.DAO.UsuarioDAO;
import com.exemplo.model.Usuario;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.TableView;
import javafx.scene.control.TableCell;
import javafx.scene.control.TableColumn;

public class TabelaUsuarios {
    @FXML private TableView<Usuario> tableUser;
    @FXML private TableColumn<Usuario, Integer> colID;
    @FXML private TableColumn<Usuario, String> colNome;
    @FXML private TableColumn<Usuario, String> colCPF;
    @FXML private TableColumn<Usuario, LocalDate> colNascimento;
    @FXML private TableColumn<Usuario, String> colGenero;
    @FXML private TableColumn<Usuario, String> colCivil;
    @FXML private TableColumn<Usuario, String> colCEP;
    @FXML private TableColumn<Usuario, String> colUF;
    @FXML private TableColumn<Usuario, String> colCidade;

    @FXML
    public void initialize() {
        colID.setCellValueFactory(new PropertyValueFactory<>("Id"));
        colNome.setCellValueFactory(new PropertyValueFactory<>("Nome"));
        colCPF.setCellValueFactory(new PropertyValueFactory<>("Cpf"));
        colGenero.setCellValueFactory(new PropertyValueFactory<>("Sexualidade"));
        colCivil.setCellValueFactory(new PropertyValueFactory<>("Civil"));
        colCEP.setCellValueFactory(new PropertyValueFactory<>("Cep"));
        colUF.setCellValueFactory(new PropertyValueFactory<>("Uf"));
        colCidade.setCellValueFactory(new PropertyValueFactory<>("Cidade"));

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        colNascimento.setCellValueFactory(new PropertyValueFactory<>("Nascimento"));
        colNascimento.setCellFactory(column -> new TableCell<Usuario, LocalDate>() {
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

        tableUser.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);
        carregarTabela();
    }

    public void carregarTabela() {
        UsuarioDAO dao = new UsuarioDAO();
        ObservableList<Usuario> obsList = FXCollections.observableArrayList(dao.listarTodos());
        tableUser.setItems(obsList);
    }
}
