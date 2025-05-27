import java.sql.*;

public class ResultSetMetaDataDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database";
        String user = "root";
        String pass = "your_password";

        try (Connection con = DriverManager.getConnection(url, user, pass);
             Statement stmt = con.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM employees")) {

            ResultSetMetaData meta = rs.getMetaData();
            int columnCount = meta.getColumnCount();

            for (int i = 1; i <= columnCount; i++) {
                System.out.println("Column " + i + ": " + meta.getColumnName(i) + " - " + meta.getColumnTypeName(i));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
