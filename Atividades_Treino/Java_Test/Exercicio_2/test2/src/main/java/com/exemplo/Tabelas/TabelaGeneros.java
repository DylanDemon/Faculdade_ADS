package com.exemplo.Tabelas;

import com.exemplo.DAO.SexualidadeDAO;
import com.exemplo.model.Sexualidade;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;

public class TabelaGeneros {

    @FXML private TableView<Sexualidade> strTableGen;
    @FXML private TableColumn<Sexualidade, Integer> colID;
    @FXML private TableColumn<Sexualidade, String> colDescricao;
    @FXML private TableColumn<Sexualidade, String> colSigla;
    @FXML private TableColumn<Sexualidade, String> colEstado;

    @FXML
    public void initialize() {
        colID.setCellValueFactory(new PropertyValueFactory<>("Id"));
        colDescricao.setCellValueFactory(new PropertyValueFactory<>("Descripcao"));
        colSigla.setCellValueFactory(new PropertyValueFactory<>("Sigla"));
        colEstado.setCellValueFactory(new PropertyValueFactory<>("Status"));

        carregarTabela();
    }

    public void carregarTabela() {
        SexualidadeDAO dao = new SexualidadeDAO();
        ObservableList<Sexualidade> obsList = FXCollections.observableArrayList(dao.listarTodos());
        strTableGen.setItems(obsList);
    }
}
