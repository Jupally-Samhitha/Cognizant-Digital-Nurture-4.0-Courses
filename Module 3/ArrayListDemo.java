import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String input;

        System.out.println("Enter student names (type 'exit' to stop):");
        while (true) {
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("exit")) break;
            names.add(input);
        }

        System.out.println("Student Names:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
