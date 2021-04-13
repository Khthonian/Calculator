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
                    Subtraction();
                    break;
                case "3":
                    Console.WriteLine();
                    Multiplication();
                    break;
                case "4":
                    Console.WriteLine();
                    Division();
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
            // Create a prompt asking if the user wants to restart the application
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
            // Create a prompt asking whether the user wants to continue their current operation
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
            // Create a method for adding two numbers together
            bool Add = true;
            // Have the operation loop throught the method until the user decides otherwise
            do
            {
                // Ask the user for a number and validate that the number can be parsed as an int
                Console.Write("Enter the first number: ");
                bool firstNumberValid = Int32.TryParse(Console.ReadLine(), out int firstNumber);
                if (firstNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Addition();
                }

                Console.Write("Enter the second number: ");
                bool secondNumberValid = Int32.TryParse(Console.ReadLine(), out int secondNumber);
                if (secondNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Addition();
                }

                int answer = firstNumber + secondNumber;
                Console.WriteLine($"Your answer is {answer}\n");
                ContinueCalculator(Add);
            } while (Add == true);
        }

        public static void Subtraction()
        {
            // Create a method for subtracting a number from another
            bool Minus = true;
            // Have the operation loop throught the method until the user decides otherwise
            do
            {
                // Ask the user for a number and validate that the number can be parsed as an int
                Console.Write("Enter the first number: ");
                bool firstNumberValid = Int32.TryParse(Console.ReadLine(), out int firstNumber);
                if (firstNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Subtraction();
                }

                Console.Write("Enter the second number: ");
                bool secondNumberValid = Int32.TryParse(Console.ReadLine(), out int secondNumber);
                if (secondNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Subtraction();
                }

                int answer = firstNumber - secondNumber;
                Console.WriteLine($"Your answer is {answer}\n");
                ContinueCalculator(Minus);
            } while (Minus == true);
        }

        public static void Multiplication()
        {
            // Create a method for multiplying a number with another
            bool Times = true;
            // Have the operation loop throught the method until the user decides otherwise
            do
            {
                // Ask the user for a number and validate that the number can be parsed as an int
                Console.Write("Enter the first number: ");
                bool firstNumberValid = Int32.TryParse(Console.ReadLine(), out int firstNumber);
                if (firstNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Multiplication();
                }

                Console.Write("Enter the second number: ");
                bool secondNumberValid = Int32.TryParse(Console.ReadLine(), out int secondNumber);
                if (secondNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Multiplication();
                }

                int answer = firstNumber * secondNumber;
                Console.WriteLine($"Your answer is {answer}\n");
                ContinueCalculator(Times);
            } while (Times == true);
        }

        public static void Division()
        {
            // Create a method for dividing a number by another
            bool Over = true;
            // Have the operation loop throught the method until the user decides otherwise
            do
            {
                // Ask the user for a number and validate that the number can be parsed as an int
                Console.Write("Enter the first number: ");
                bool firstNumberValid = Int32.TryParse(Console.ReadLine(), out int firstNumber);
                if (firstNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Division();
                }

                Console.Write("Enter the second number: ");
                bool secondNumberValid = Int32.TryParse(Console.ReadLine(), out int secondNumber);
                if (secondNumberValid == true)
                {
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("You did not enter the value in the correct format. I shall reset the operation.\n");
                    Division();
                }

                int answer = firstNumber / secondNumber;
                Console.WriteLine($"Your answer is {answer}\n");
                ContinueCalculator(Over);
            } while (Over == true);
        }
    }    
}
