document
  .getElementById("addMoneyBTn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //
    //
    //
    // stet 1
    const bank = document.getElementById("bank").value;
    //
    //step 2
    const acountNumber = document.getElementById("AccountNumber").value;
    //
    // step 3
    const amount = parseInt(document.getElementById("AddAmount").value);
    //
    // const amounts = document.getElementById("AddAmount");
    // const ammount = parseInt(amounts.value);
    // amounts.value = " ";
    //
    // step 4
    const Validpins = 12345;
    const pin = parseInt(document.getElementById("AddPin").value);
    //
    // step 5
    const availableBanalce = parseInt(
      document.getElementById("AvailableBalance").innerText
    );
    //
    //
    // step 6
    if (pin !== Validpins) {
      alert("Invalid Pin");
    }
    if (acountNumber.length !== 11) {
      alert("Invaid");
      return;
    }
    const totalNewAvailablebalance = amount + availableBanalce;
    //
    // step 7
    document.getElementById("AvailableBalance").innerText =
      totalNewAvailablebalance;
    //data save part
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    Transactions.push(data);
    console.log(Transactions);
  });
const Transactions = [];
document
  .getElementById("Transactions-button")
  .addEventListener("click", function () {
    const transactioncontainer = document.getElementById(
      "transaction-container"
    );
    transactioncontainer.innerText = " ";
    for (const data of Transactions) {
      const div = document.createElement("div");
      div.innerHTML = ` <div class="mt-10  p-3  border-2 border-gray-200 rounded-[10px]  shadow-sm">
          <div class="flex items-center">
            <div class=" bg-white ">
              <img
                class=" w-10 h-10 border-2 border-gray-100 bg-white "
                src="./assets/wallet1.png"
                alt=""
              />
            </div>
            <div class="ml-4">
              <h1>${data.name}</h1>
              <p>${data.date}</p>
            </div>
          </div>`;
      transactioncontainer.appendChild(div);
    }
  });
////////////////////////////////////////////////////////////////////////////
document
  .getElementById("WithdrawMoneyBTn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //
    const WithdrawAmount = parseInt(
      document.getElementById("Withdraw-amount").value
    );
    //
    const availeableWithdrawAmmount = parseInt(
      document.getElementById("AvailableBalance").innerText
    );
    //

    const totalNewAvailablebalanceWithdraw =
      availeableWithdrawAmmount - WithdrawAmount;
    //
    document.getElementById("AvailableBalance").innerText =
      totalNewAvailablebalanceWithdraw;
    //data save part
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    Transactions.push(data);
    console.log(Transactions);
  });
// toggling feature
//add Money
document
  .getElementById("addmoney-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "block";
    document.getElementById("Cashout-parent").style.display = "none";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("Transactions").style.display = "none";
    document.getElementById("GetBonous").style.display = "none";
    document.getElementById("PayBill").style.display = "none";

    const formbtn = document.getElementsByClassName("form-btn");
    for (const btn of formbtn) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
      btn.classList.add("border-gray-400");
    }
    document
      .getElementById("addmoney-button")
      .classList.remove("border-gray-400");
    document
      .getElementById("addmoney-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
  });
//cash out
document
  .getElementById("CashOut-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "none";
    document.getElementById("Cashout-parent").style.display = "block";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("Transactions").style.display = "none";
    document.getElementById("GetBonous").style.display = "none";
    document.getElementById("PayBill").style.display = "none";

    const formbtn = document.getElementsByClassName("form-btn");
    for (const btn of formbtn) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
      btn.classList.add("border-gray-400");
    }
    document
      .getElementById("CashOut-button")
      .classList.remove("border-gray-400");
    document
      .getElementById("CashOut-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
  });
// //////////////////
// transfer Money
document
  .getElementById("TransferMoney-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "none";
    document.getElementById("Cashout-parent").style.display = "none";
    document.getElementById("transferMoney").style.display = "block";
    document.getElementById("Transactions").style.display = "none";
    document.getElementById("GetBonous").style.display = "none";
    document.getElementById("PayBill").style.display = "none";

    const formbtn = document.getElementsByClassName("form-btn");
    for (const btn of formbtn) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
      btn.classList.add("border-gray-400");
    }
    document
      .getElementById("TransferMoney-button")
      .classList.remove("border-gray-400");
    document
      .getElementById("TransferMoney-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
  });
///////////////////
document
  .getElementById("GetBonus-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "none";
    document.getElementById("Cashout-parent").style.display = "none";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("Transactions").style.display = "none";
    document.getElementById("GetBonous").style.display = "block";
    document.getElementById("PayBill").style.display = "none";

    const formbtn = document.getElementsByClassName("form-btn");
    for (const btn of formbtn) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
      btn.classList.add("border-gray-400");
    }
    document
      .getElementById("GetBonus-button")
      .classList.remove("border-gray-400");
    document
      .getElementById("GetBonus-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
  });
document
  .getElementById("payBill-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "none";
    document.getElementById("Cashout-parent").style.display = "none";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("Transactions").style.display = "none";
    document.getElementById("GetBonous").style.display = "none";
    document.getElementById("PayBill").style.display = "block";

    const formbtn = document.getElementsByClassName("form-btn");
    for (const btn of formbtn) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
      btn.classList.add("border-gray-400");
    }
    document
      .getElementById("payBill-button")
      .classList.remove("border-gray-400");
    document
      .getElementById("payBill-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
  });
document
  .getElementById("Transactions-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "none";
    document.getElementById("Cashout-parent").style.display = "none";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("GetBonous").style.display = "none";
    document.getElementById("PayBill").style.display = "none";
    document.getElementById("Transactions").style.display = "block";

    const formbtn = document.getElementsByClassName("form-btn");
    for (const btn of formbtn) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
      btn.classList.add("border-gray-400");
    }
    document
      .getElementById("Transactions-button")
      .classList.remove("border-gray-400");
    document
      .getElementById("Transactions-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "scale-105");
  });
///////////////////////////////////////////////////////////////////////////////////////////
// // সব div select করা
// const addMoneyParent = document.getElementById("addMoney-parent");
// const cashoutParent = document.getElementById("Cashout-parent");
// const transferMoneyParent = document.getElementById("transferMoney");
// const getBonusParent = document.getElementById("GetBonous");
// const payBillParent = document.getElementById("PayBill");
// const transactionsParent = document.getElementById("Transactions");

// // সব buttons select করা
// const addMoneyBtn = document.getElementById("addmoney-button");
// const cashOutBtn = document.getElementById("CashOut-button");
// const transferMoneyBtn = document.getElementById("TransferMoney-button");
// const getBonusBtn = document.getElementById("GetBonus-button");
// const payBillBtn = document.getElementById("payBill-button");
// const transactionsBtn = document.getElementById("Transactions-button");

// // helper function → hide all divs
// function hideAllDivs() {
//   addMoneyParent.classList.add("hidden");
//   cashoutParent.classList.add("hidden");
//   transferMoneyParent.classList.add("hidden");
//   getBonusParent.classList.add("hidden");
//   payBillParent.classList.add("hidden");
//   transactionsParent.classList.add("hidden");
// }

// // helper function → reset all button styles
// function resetAllButtons() {
//   const formBtns = document.getElementsByClassName("form-btn");
//   for (const btn of formBtns) {
//     btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
//     btn.classList.add("border-gray-300");
//   }
// }

// // single-click → show corresponding div + active button
// addMoneyBtn.addEventListener("click", () => {
//   hideAllDivs();
//   addMoneyParent.classList.remove("hidden");
//   resetAllButtons();
//   addMoneyBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
//   addMoneyBtn.classList.remove("border-gray-300");
// });

// cashOutBtn.addEventListener("click", () => {
//   hideAllDivs();
//   cashoutParent.classList.remove("hidden");
//   resetAllButtons();
//   cashOutBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
//   cashOutBtn.classList.remove("border-gray-300");
// });

// transferMoneyBtn.addEventListener("click", () => {
//   hideAllDivs();
//   transferMoneyParent.classList.remove("hidden");
//   resetAllButtons();
//   transferMoneyBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
//   transferMoneyBtn.classList.remove("border-gray-300");
// });

// getBonusBtn.addEventListener("click", () => {
//   hideAllDivs();
//   getBonusParent.classList.remove("hidden");
//   resetAllButtons();
//   getBonusBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
//   getBonusBtn.classList.remove("border-gray-300");
// });

// payBillBtn.addEventListener("click", () => {
//   hideAllDivs();
//   payBillParent.classList.remove("hidden");
//   resetAllButtons();
//   payBillBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
//   payBillBtn.classList.remove("border-gray-300");
// });

// transactionsBtn.addEventListener("click", () => {
//   hideAllDivs();
//   transactionsParent.classList.remove("hidden");
//   resetAllButtons();
//   transactionsBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
//   transactionsBtn.classList.remove("border-gray-300");
// });

// // ======================
// // double-click → hide corresponding div + reset button
// const buttonDivMap = {
//   "addmoney-button": addMoneyParent,
//   "CashOut-button": cashoutParent,
//   "TransferMoney-button": transferMoneyParent,
//   "GetBonus-button": getBonusParent,
//   "payBill-button": payBillParent,
//   "Transactions-button": transactionsParent,
// };

// for (const [btnId, div] of Object.entries(buttonDivMap)) {
//   const button = document.getElementById(btnId);

//   button.addEventListener("dblclick", () => {
//     div.classList.add("hidden"); // hide div
//     button.classList.remove("border-[#0874f2]", "bg-[#0874f20d]"); // reset button
//     button.classList.add("border-gray-300");
//   });
// }
