document
  .getElementById("btn-click")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = 1724247815;
    const pinNumber = 1234;
    const mobileNumbervalue = document.getElementById("mobile-number");
    const mobile = mobileNumbervalue.value;
    const mobileNumbervalueConverted = parseInt(mobile);
    const pinNumberValue = document.getElementById("pin-number");
    const pin = pinNumberValue.value;
    const pinNumberValueConverted = parseInt(pin);

    if (
      mobileNumbervalueConverted === mobileNumber &&
      pinNumberValueConverted === pinNumber
    ) {
      window.location.href = "./main.html";
    } else {
      alert("Somethig is wrong..... Try Again");
    }
  });
