//1. Think of an object
//Customer: name,age,phone,email

//2. define the object-> Class

class Customer {
    String name;
    String phone;
    String email;
}

public class App{
    public static void main(String[] args) {
        Customer c1 = new Customer();
        System.out.println(c1);
    }
}