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
      window.location.href = "./pageThree.html";
    } else {
      window.location.href = "./error.html";
    }
  });
const buttons = document.querySelectorAll(".hoverBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    //   btn.classList.remove("bg-blue-500");
    btn.classList.add("bg-green-600");

    btn.classList.add(
      "hover:scale-110",
      "transform",
      "transition",
      "duration-300"
    );
  });
});
