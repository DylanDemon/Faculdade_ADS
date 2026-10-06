module com.exemplo {
    requires javafx.controls;
    requires javafx.fxml;
    requires transitive java.sql;

    opens com.exemplo to javafx.fxml;
    exports com.exemplo;
}
