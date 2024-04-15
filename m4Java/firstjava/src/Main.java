
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static String concat(String a, String b, String c) {
        return "il prodotto di <a e b> è: " +  a + b + c;
    }

    public static int moltiplica(int a, int b) {
        return  a * b;
    }

    public static int rettangolo(int a, int b) {
        return  a * b;
    }

    public static boolean pariDispari(int a) {
        if (a % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    public static double areaTriangolo(float a, float b) {
        double semiperimetro = (a + b + Math.sqrt(a*a + b*b)) / 2;
        double area = Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b));

        return area;
    }





    public static void main(String[] args) {

        String concatenamento = concat("Prima ", "Seconda ", "Terza");
        
        System.out.println("Il risultato della concatenazione è: " + concatenamento);

        int prodotto = moltiplica(10,10);
        System.out.println("Il risultato del prodotto <a e b> è: " + prodotto);

        int areaRett = rettangolo(5,7);
        System.out.println("L'area del rettangolo è: " + areaRett);


        boolean bool = pariDispari(5);
        int risultatoPariDispari = bool ? 1 : 0;
        System.out.println("Risultato pariDispari: " + risultatoPariDispari);

        double areaTri= areaTriangolo(12,2);
        System.out.println("L'area del rettangolo è: " + areaTri);




    }
}