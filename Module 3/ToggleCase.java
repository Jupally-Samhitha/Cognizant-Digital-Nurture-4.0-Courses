import java.util.Scanner;

public class ToggleCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a character: ");
        char ch = sc.next().charAt(0);

        if (Character.isUpperCase(ch)) {
            ch = Character.toLowerCase(ch);
        } else if (Character.isLowerCase(ch)) {
            ch = Character.toUpperCase(ch);
        }

        System.out.println("Toggled character: " + ch);
    }
}
