class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be at least 18.");
        } else {
            System.out.println("Age is valid.");
        }
    }

    public static void main(String[] args) {
        int age = 16;  // You can change this value to test
        try {
            checkAge(age);
        } catch (InvalidAgeException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }
}
