public class DisplayAlphabets {
    public static void main(String[] args) {
        System.out.println("Uppercase A-Z:");
        for (char ch = 'A'; ch <= 'Z'; ch++) {
            System.out.print(ch + " ");
        }

        System.out.println("\nLowercase a-z:");
        for (char ch = 'a'; ch <= 'z'; ch++) {
            System.out.print(ch + " ");
        }
    }
}
