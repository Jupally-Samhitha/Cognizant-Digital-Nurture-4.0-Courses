import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/your_database";
    private static final String USER = "root";
    private static final String PASS = "your_password";

    public void insertStudent(int id, String name) {
        String sql = "INSERT INTO students (id, name) VALUES (?, ?)";
        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, id);
            ps.setString(2, name);
            ps.executeUpdate();
            System.out.println("Student inserted.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void updateStudentName(int id, String newName) {
        String sql = "UPDATE students SET name = ? WHERE id = ?";
        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, newName);
            ps.setInt(2, id);
            ps.executeUpdate();
            System.out.println("Student updated.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();
        dao.insertStudent(1, "Alice");
        dao.updateStudentName(1, "Alicia");
    }
}
