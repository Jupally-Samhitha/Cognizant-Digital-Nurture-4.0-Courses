import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortDemo {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Orange");
        fruits.add("Mango");

        Collections.sort(fruits, (s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted fruits:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
