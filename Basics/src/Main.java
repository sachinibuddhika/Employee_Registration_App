import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

   int num1;
   int num2;
   int out;

   Scanner sn=new Scanner(System.in);
    System.out.println("Input first number: ");
    num1=sn.nextInt();
    System.out.println("Input second number: ");
    num2=sn.nextInt();
    out=num1*num2;
    System.out.println("Expected output: "+out);
  ;}
}
