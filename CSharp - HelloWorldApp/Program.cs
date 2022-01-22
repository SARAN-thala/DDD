// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
Console.WriteLine("Time is"+ DateTime.Now);

Customer cust1 = new Customer{Address = new Address(), BankAccounts = new List<Account>()};
cust1.BankAccounts.Add(
    new Account{AccountNumber = 1, Address = 
        new Address(){ City = "Gurgaon"}
    });

cust1.BankAccounts.Add(
    new Account{AccountNumber = 2, Address = 
        new Address(){ City = "Chennai"}
    });

cust1.BankAccounts.Add(
    new Account{AccountNumber = 3, Address = 
        new Address(){ City = "Pune"}
    });

Console.ReadLine();
Console.WriteLine(cust1.ToString());

Console.ReadLine();
cust1.UpdateAddress(new Address(){City = "Newyork"});
Console.WriteLine(cust1.ToString());

Console.ReadLine();
