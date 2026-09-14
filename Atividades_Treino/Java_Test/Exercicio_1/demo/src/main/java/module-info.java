module com.exemplo {
    requires javafx.controls;
    requires javafx.fxml;

    opens com.exemplo to javafx.fxml;
    exports com.exemplo;
}
