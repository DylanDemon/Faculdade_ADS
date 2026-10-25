module com.exemplo {
    requires javafx.controls;
    requires javafx.fxml;
    requires transitive java.sql;
    requires org.json;

    opens com.exemplo.Controllers to javafx.fxml;
    opens com.exemplo.Tabelas to javafx.fxml;
    opens com.exemplo.model to javafx.base;
    opens com.exemplo to javafx.fxml;
    
    exports com.exemplo;
}
