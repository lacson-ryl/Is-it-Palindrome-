const palTextInput = document.getElementById("text-input");
const palCheckBtn = document.getElementById("check-btn");
const palResult = document.getElementById("result");


const checkForPalInput = (input) => {
  const palTextInput = input;

  if (input === "") {
    alert("Please input a value")
    return;
  }
  const lowerPalInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let palOutcome = `${lowerPalInput ===  [...lowerPalInput].reverse().join("") ? "is" : "is not"}`

  palResult.innerHTML = `<strong>${palTextInput}</strong> ${palOutcome} a palindrome`
  palResult.display = "block";
}

palCheckBtn.addEventListener("click", () => {
  checkForPalInput(palTextInput.value);
  event.preventDefault();
});
