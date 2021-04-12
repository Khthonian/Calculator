using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // Welcome the user to the application
            Console.WriteLine("Hello, my name is Descartes. I am a calculator capable of simple calculations.\n");
            Console.WriteLine("Press ENTER to begin\nInput E to exit\n");
            switch (Console.ReadLine().ToLower())
            {
                case "":
                    Console.WriteLine("Let's get calculating");
                    // CalculatorMenu();
                    break;
                case "e":
                    Console.WriteLine("Thanks for using Descartes.");
                    System.Environment.Exit(0);
                    break;
            }
        }
    }
}
