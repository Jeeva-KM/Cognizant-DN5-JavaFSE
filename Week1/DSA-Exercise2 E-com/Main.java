package com.cognizant.dsa;

public class Main {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Mobile", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")
        };

        int searchId = 103;

        System.out.println("Linear Search");
        linearSearch(products, searchId);

        System.out.println();

        System.out.println("Binary Search");
        binarySearch(products, searchId);

    }

    static void linearSearch(Product[] products, int searchId) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productId == searchId) {

                System.out.println("Product Found");
                System.out.println("Product ID : " + products[i].productId);
                System.out.println("Product Name : " + products[i].productName);
                System.out.println("Category : " + products[i].category);
                return;

            }

        }

        System.out.println("Product Not Found");

    }

    static void binarySearch(Product[] products, int searchId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].productId == searchId) {

                System.out.println("Product Found");
                System.out.println("Product ID : " + products[mid].productId);
                System.out.println("Product Name : " + products[mid].productName);
                System.out.println("Category : " + products[mid].category);
                return;

            }

            if (products[mid].productId < searchId) {

                left = mid + 1;

            } else {

                right = mid - 1;

            }

        }

        System.out.println("Product Not Found");

    }

}