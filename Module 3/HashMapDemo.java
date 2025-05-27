import java.util.HashMap;
import java.util.Scanner;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        // Adding entries
        System.out.println("Enter student ID and name (enter 0 to stop):");
        while (true) {
            System.out.print("ID: ");
            int id = scanner.nextInt();
            if (id == 0) break;
            scanner.nextLine();  // Consume newline
            System.out.print("Name: ");
            String name = scanner.nextLine();
            studentMap.put(id, name);
        }

        // Retrieving by ID
        System.out.print("Enter ID to search: ");
        int searchId = scanner.nextInt();
        String studentName = studentMap.get(searchId);
        if (studentName != null) {
            System.out.println("Student name: " + studentName);
        } else {
            System.out.println("Student ID not found.");
        }
    }
}
