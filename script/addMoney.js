// const { createContext, createElement } = require("react");

document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const accountNumberr = document.getElementById('account-number').value;

        const addAmount = document.getElementById('add-ammount').value;
        const addAmountFloat = parseFloat(addAmount);
        const pinNumber = document.getElementById('pin-number').value;
        const pinNumberInt = parseInt(pinNumber);
        const mainAmount = document.getElementById('main-ammount').innerText;
        // console.log(mainAmount);
        const mainAmountFloat = parseFloat(mainAmount);

        if (addAmount < 0){
            alert("Please enter right amount!!");
            return;
        }


        if(accountNumberr.length === 11){
            if (addAmount) {
            if (pinNumberInt === 1234) {
                const sum = mainAmountFloat + addAmountFloat;
                document.getElementById('main-ammount').innerText = sum;
                alert(addAmountFloat+ " "+"Money Added Successfully!");

            //     const transactionHistory = document.getElementById("transaction-container");
            //     const p = document.createElement("p");
            //     p.innerText = `
            // Added ${addAmount} from ${accountNumberr} account Succesfully!
            //     `
            //     transactionHistory.appendChild(p);

                const transactionHistory = document.getElementById("transaction-container");

                const p = document.createElement("div");
                p.innerHTML = `
                <div class="border border-gray-300 rounded-lg p-5 bg-slate-100 mb-2">
                        <h1>Added Money ${addAmount} from ${accountNumberr} Successfully!</h1>
                </div>
                `
                // console.log(div);
                transactionHistory.appendChild(p);






            }
            else {
                alert(
                    "Please enter correct PIN number"
                )
            }
        }
        else {
            alert("Please enter Amount!");
        }
        }
        else{
        alert('Enter valid phone Number');
    }
    });

document.getElementById('log-out')
    .addEventListener('click', function () {
        window.location.href = "./index.html"
    })