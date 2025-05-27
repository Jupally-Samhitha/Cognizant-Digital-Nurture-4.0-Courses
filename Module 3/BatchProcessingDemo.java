import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class BatchProcessingDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database";
        String user = "root";
        String pass = "your_password";

        try (Connection con = DriverManager.getConnection(url, user, pass);
             Statement stmt = con.createStatement()) {

            con.setAutoCommit(false);

            stmt.addBatch("INSERT INTO employees (id, name) VALUES (201, 'Alice')");
            stmt.addBatch("INSERT INTO employees (id, name) VALUES (202, 'Bob')");
            stmt.addBatch("UPDATE employees SET name = 'Charlie' WHERE id = 201");

            int[] counts = stmt.executeBatch();
            con.commit();

            System.out.println("Batch executed with counts: ");
            for (int count : counts) {
                System.out.println(count);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
