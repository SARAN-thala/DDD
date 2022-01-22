public class Customer
{
    public Address Address { get; set; }
    public List<Account> BankAccounts { get; set; }

    public bool UpdateAddress(Address newAddress)
    {
        this.Address = newAddress;

        if(BankAccounts.All(ba => { ba.Address = newAddress; return true; }))
            return true;
        else
            return false;
    }

    public override string ToString()
    {
        string output = string.Format("Customer Address: {0}, Bank Accounts: {1}", this.Address.City, this.BankAccounts.Count());

        foreach(Account ac in this.BankAccounts)
            output+= Environment.NewLine + "AccountNo:" + ac.       AccountNumber +
                    ", Bank Address:" + ac.Address.City;

        return output;
    }
}

