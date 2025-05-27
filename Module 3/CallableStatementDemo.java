import java.sql.*;

public class CallableStatementDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database";
        String user = "root";
        String pass = "your_password";

        try (Connection con = DriverManager.getConnection(url, user, pass)) {
            CallableStatement cs = con.prepareCall("{call GetEmployeeById(?)}");
            cs.setInt(1, 101);
            ResultSet rs = cs.executeQuery();

            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
            }

            rs.close();
            cs.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
