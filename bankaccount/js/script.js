
const bankAccount = function(ownerName) {
    let balance = 0;
    let owner = ownerName;

    let account = {
        withdrawal : function(withdrawalAmount) {
            if (balance < withdrawalAmount) {
                alert('You don\'t have enough money. Try again' )
            } else {
                balance = balance - withdrawalAmount;
            }
        },
     
        deposit : function(depositAmount) {
            balance = balance + depositAmount;
        },

        getBalance : function() {
            return balance;
        },

        getOwnerName : function() {
            return owner;
        },
    };
    displayinfo = function() {
        let nameC = document.getElementById('nameC');
        nameC.innerHTML = owner;

        let balanceC = document.getElementById('balanceC');
        balanceC.innerHTML = balance;

    }
    const clickName = function () {
        owner =  prompt("Enter your name");
        displayinfo();
    };

    const clickDeposit = function () {
        let userDeposit = parseInt (prompt("Enter an amount to deposit"));
        account.deposit(userDeposit);
        displayinfo();
    };
    
    const clickWithdrawal = function () {
        let userWithdrawal = parseInt (prompt("Enter an amount to withdrawal"));
        account.withdrawal(userWithdrawal);
        displayinfo();
    };

    window.addEventListener('load', () => {
        document.getElementById('name').addEventListener('click', clickName);
        document.getElementById('deposit').addEventListener('click', clickDeposit);
        document.getElementById('withdrawal').addEventListener('click', clickWithdrawal);
        displayinfo();
   });
   
    
   return account;
};

bankAccount();