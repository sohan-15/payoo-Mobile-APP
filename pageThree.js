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
  });
// toggling feature
document
  .getElementById("addmoney-button")
  .addEventListener("click", function () {
    document.getElementById("Cashout-parent").style.display = "none";
    document.getElementById("addMoney-parent").style.display = "block";
  });
document
  .getElementById("CashOut-button")
  .addEventListener("click", function () {
    document.getElementById("addMoney-parent").style.display = "none";
    document.getElementById("Cashout-parent").style.display = "block";
  });
