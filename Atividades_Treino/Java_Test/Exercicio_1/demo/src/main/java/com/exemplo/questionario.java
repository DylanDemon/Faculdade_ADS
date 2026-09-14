package com.exemplo;

import java.io.IOException;
import javafx.fxml.FXML;

public class questionario {

    @FXML
    private void trocarProjeto1() throws IOException {
        App.setRoot("calculadora");
    }
}