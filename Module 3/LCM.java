import java.util.Scanner;

public class LCM {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = scanner.nextInt();
        int b = scanner.nextInt();

        int gcd = a, temp = b;
        while (temp != 0) {
            int t = temp;
            temp = gcd % temp;
            gcd = t;
        }

        int lcm = (a * b) / gcd;
        System.out.println("LCM is " + lcm);
    }
}
