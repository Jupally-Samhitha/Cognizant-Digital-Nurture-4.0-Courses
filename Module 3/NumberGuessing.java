import java.util.Scanner;

public class NumberGuessing {
    public static void main(String[] args) {
        int target = (int) (Math.random() * 100) + 1;
        Scanner sc = new Scanner(System.in);
        int guess;

        System.out.println("Guess a number between 1 and 100:");

        do {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess > target) {
                System.out.println("Too high!");
            } else if (guess < target) {
                System.out.println("Too low!");
            } else {
                System.out.println("Correct! You guessed the number.");
            }
        } while (guess != target);
    }
}
