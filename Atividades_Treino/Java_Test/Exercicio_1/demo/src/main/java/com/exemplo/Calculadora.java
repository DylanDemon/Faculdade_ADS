package com.exemplo;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;

import java.io.IOException;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

public class Calculadora {

    @FXML
    private void trocarProjeto2() throws IOException {
        App.setRoot("questionario");
    }
    @FXML
    private TextField jtfNumeros;
    @FXML
    private ListView<String> lvHistorico;
    private float vfirstNum = 0;
    private float vsecondNum = 0;
    private float vresult = 0;
    private String voperation = "";
    private int vponto = 0;
    private ObservableList<String> ListOperacoes = FXCollections.observableArrayList();

    @FXML
        public void initialize() {
            if (lvHistorico != null) {
                lvHistorico.setItems(ListOperacoes);
                System.out.println("ListView conectado com sucesso!");
            } else {
                System.out.println("ERRO: lvHistorico continua NULL.");
            }
        }
    @FXML
    private void digitar(ActionEvent event){
        Button btn = (Button) event.getSource();
        String textoBtn = btn.getText();

        if(jtfNumeros.getText().equals("0") || jtfNumeros.getText().equals("Erro")) {
            jtfNumeros.setText(textoBtn);
        } else {
            jtfNumeros.setText(jtfNumeros.getText() + textoBtn);
        }
    }
    @FXML
    private void operacao(ActionEvent event){
    if (jtfNumeros.getText().isEmpty() || jtfNumeros.getText().equals("Erro")) return;

            getValor();
            Button btn = (Button) event.getSource();
            voperation = btn.getText();
    }
    @FXML
    private void btnPonto(ActionEvent event) {
        if (vponto == 0) {
            if (jtfNumeros.getText().isEmpty() || jtfNumeros.getText().equals("Erro")) {
                jtfNumeros.setText("0.");
            } else {
                jtfNumeros.setText(jtfNumeros.getText() + ".");
            }
            vponto = 1; // Trava para impedir a inserção de um segundo ponto
        }
    }
    @FXML
    private void btnLimpar(ActionEvent event) {
        jtfNumeros.setText("");
        vfirstNum = 0;
        vsecondNum = 0;
        vresult = 0;
        voperation = "";
        vponto = 0;
    }
    private void getValor() {
        try {
            vfirstNum = Float.parseFloat(jtfNumeros.getText().replace(",", "."));
            jtfNumeros.setText("");        
            vponto = 0;
        } catch (NumberFormatException e) {
            jtfNumeros.setText("Erro");
        }
    }
    @FXML
    private void Resultado(ActionEvent event) {
        calcular();
        }
    private void calcular() {
    try {
        vsecondNum = Float.parseFloat(jtfNumeros.getText().replace(",", "."));
        
        if (voperation.equals("/") && vsecondNum == 0) {
            jtfNumeros.setText("Erro");
            return;
        }

        switch (voperation) {
            case "+": vresult = vfirstNum + vsecondNum; break;
            case "-": vresult = vfirstNum - vsecondNum; break;
            case "*": vresult = vfirstNum * vsecondNum; break;
            case "/": vresult = vfirstNum / vsecondNum; break;
            default: return;
        }

        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.US);
        DecimalFormat df = new DecimalFormat("##.##", symbols);

        String strFirst = df.format(vfirstNum);
        String strSecond = df.format(vsecondNum);
        String strResult = df.format(vresult);

        String itemHistorico = strFirst + " " + voperation + " " + strSecond + " = " + strResult;

        ListOperacoes.add(itemHistorico);

        if (lvHistorico != null) {
            lvHistorico.setItems(FXCollections.observableArrayList(ListOperacoes));
        }
        jtfNumeros.setText(strResult);
        vponto = 0;
    } catch (NumberFormatException e) {
        jtfNumeros.setText("Erro");
    }
}
}

