public class MaxInArray {
    public static void main(String[] args) {
        int[] arr = {10, 25, 30, 5, 15};
        int max = arr[0];
        for (int num : arr)
            if (num > max)
                max = num;
        System.out.println("Maximum: " + max);
    }
}
