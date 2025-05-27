import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class BasicJDBCDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database";
        String user = "root";
        String password = "your_password";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");  // Load driver
            Connection con = DriverManager.getConnection(url, user, password);
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next()) {
                System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
            }

            rs.close();
            stmt.close();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
