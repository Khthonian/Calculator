using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                // Welcome the user to the application
                Console.WriteLine("Hello, my name is Descartes. I am a calculator capable of simple calculations using two numbers.\n");
                Console.WriteLine("Press ENTER to begin\nInput E to exit");
                switch (Console.ReadLine().ToLower())
                {
                    case "":
                        Console.WriteLine("Let's get calculating!\n");
                        CalculatorMenu();
                        break;
                    case "e":
                        Console.WriteLine("Thanks for using Descartes.");
                        System.Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine();
                        break;
                }                
            }
        }

        // Create a menu for selecting which operation to carry out
        public static void CalculatorMenu()
        {
            Console.WriteLine("Which calculation do you want to do?");
            Console.WriteLine("Input 1 for ADDITION\nInput 2 for SUBTRACTION\nInput 3 for MULTIPLICATION\nInput 4 for DIVISION\nInput E to exit\n");
            // Create a switch to move between the calculator functions
            switch (Console.ReadLine().ToLower())
            {
                case "1":
                    Console.WriteLine();
                    Addition();
                    break;
                case "2":
                    Console.WriteLine();
                    //Subtraction();
                    break;
                case "3":
                    Console.WriteLine();
                    //Multiplication();
                    break;
                case "4":
                    Console.WriteLine();
                    //Division();
                    break;
                case "e":
                    Console.WriteLine();
                    Console.WriteLine("Thanks for using Descartes.");
                    System.Environment.Exit(0);
                    break;
                default:
                    Console.WriteLine();
                    CalculatorMenu();
                    break;
            }
        }

        public static void RestartCalculator()
        {
            Console.WriteLine("Do you wish to use Descartes again?");
            Console.WriteLine("Press ENTER to restart\nInput E to exit");
            switch (Console.ReadLine().ToLower())
            {
                case "":
                    Console.WriteLine("Restarting...\n");                    
                    break;
                case "e":
                    Console.WriteLine("Thanks for using Descartes.");
                    System.Environment.Exit(0);
                    break;
                default:
                    break;
            }
        }

        public static bool ContinueCalculator(bool Answer)
        {
            Console.WriteLine("Do you wish to continue this operation?");
            Console.WriteLine("Input Y for Yes\nInput N for No");
            switch (Console.ReadLine().ToLower())
            {
                case "y":
                    break;
                case "n":
                    RestartCalculator();
                    break;
                default:
                    ContinueCalculator(Answer);
                    break;
            }
            return true;
        }

        public static void Addition()
        {
            bool Add = true;
            do
            {
                Console.Write("Enter the first number: ");
                int firstNumber = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine();
                Console.Write("Enter the second number: ");
                int secondNumber = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine();
                int answer = firstNumber + secondNumber;
                Console.WriteLine($"Your answer is {answer}\n");
                ContinueCalculator(Add);
            } while (Add == true);
        }
    }    
}
