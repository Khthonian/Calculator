using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Initialise the app
            Menu Calculator = new Menu();

            // Welcome the user to the application
            Console.WriteLine("Hello, my name is Descartes. I am a calculator capable of simple calculations.\n");
            Console.WriteLine("Press ENTER to begin\nInput E to exit\n");
            switch (Console.ReadLine().ToLower())
            {
                case "":
                    Console.WriteLine("Let's get calculating");
                    Calculator.CalculatorMenu();
                    break;
                case "e":
                    Console.WriteLine("Thanks for using Descartes.");
                    System.Environment.Exit(0);
                    break;
            }
        }
    }

    class Menu
    {
        // Create a menu for selecting which operation to carry out
        public void CalculatorMenu()
        {
            Console.WriteLine("Which calculation do you want to do?");
            Console.WriteLine("Input 1 for ADDITION\nInput 2 for SUBTRACTION\nInput 3 for MULTIPLICATION\nInput 4 for DIVISION");
        }
    }

    class Operations
    {

    }
}
