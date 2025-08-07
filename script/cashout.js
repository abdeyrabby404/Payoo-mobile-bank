document.getElementById('withdraw-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('agent-number').value;
    console.log(typeof phoneNumber);

    const amountWithdraw = document.getElementById('cash-amount').value;
    const amountWithdrawFloat = parseFloat(amountWithdraw);

    // const pinNumber = document.getElementById('pin-number').value;
    // const pinNumberInt = parseInt(pinNumber);

    const pinNumber = document.getElementById('pin').value;
    const pinNumberInt = parseInt(pinNumber);
    console.log(typeof pinNumberInt);


    const mainAmount = document.getElementById('main-ammount').innerText;
    const mainAmountFloat = parseFloat(mainAmount);


    if (amountWithdraw > mainAmount){
            alert("You don't have this amount! Please add money first!!");
            return;
        }

    if(phoneNumber.length === 11){
        if(amountWithdraw){
        if (pinNumberInt === 1234){
        const restOfTheBalance = mainAmountFloat - amountWithdrawFloat;
        document.getElementById('main-ammount').innerText = restOfTheBalance;
        alert(amountWithdrawFloat + " " + 'Cashout successfully done!!'); 

        // const cashOutTransactionHistory = document.getElementById("transaction-container");
        // const p = document.createElement("p");
        // p.innerText=`
        // Cashout ${amountWithdraw} from ${phoneNumber} successfully!
        // `
        // cashOutTransactionHistory.appendChild(p);

        const transactionHistory = document.getElementById("transaction-container");

                const p = document.createElement("div");
                p.innerHTML = `
                <div class="border border-gray-300 rounded-lg p-5 bg-slate-100 mb-2">
                        <h1>Cashout amount ${amountWithdraw} from ${phoneNumber} Successfully!</h1>
                </div>
                `
                // console.log(div);
                transactionHistory.appendChild(p);





         }
        else{
            alert('Pin is incorrect');
        }
         

    }
    else{
        alert('Please enter the amount you want to cashout!');
    }
    }
    else{
        alert('Enter valid phone Number');
    }





})