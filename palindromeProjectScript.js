const palTextInput = document.getElementById("text-input");
const palCheckBtn = document.getElementById("check-btn");
const palResult = document.getElementById("result");

const emptyPalInput = () => {
  const inputValue = palTextInput.value.trim();
  if (!inputValue) {
    alert("Please input a value");
    return;
  }
}

const acceptedPalInput = (palTextInput) => {
  const lowercasePalTextInput = palTextInput.toLowerCase();
  const regex = /[^a-z0-9]/g;
  return lowercasePalTextInput.replace(regex, '');
}
console.log(acceptedPalInput("ahsjkckjauehsljnxlvKJQDIHOHE243534"));

const palindromeChecker = (palTextInput) => {
  let a1 = acceptedPalInput(palTextInput);
  let a2 = acceptedPalInput(palTextInput).split(",").reverse().join(",");
  console.log(a1);
  console.log(a2);

  if (a1 === a2) {
    return palResult.innerText = `"${palTextInput}" is a palindrome.`;
  } else if (a1 !== a2) {
    return palResult.innerText = `"${palTextInput}" is not a palindrome.`;
  } else {
    return emptyPalInput();
  }
} 
console.log(palindromeChecker("abc123321cba"));

palCheckBtn.addEventListener("click", () => {
  palindromeChecker(palTextInput);
});


/*
const palTextInput = document.getElementById("text-input");
const palCheckBtn = document.getElementById("check-btn");
const palResult = document.getElementById("result");

const emptyPalInput = () => {
  if (!palTextInput.value) {
    alert("Please input a value");
  } else {
    return;
  }
}

const acceptedPalInput = (palTextInput) => {
  const lowercasePalTextInput = palTextInput.toLowerCase();
  const regex = /[^a-z]/g;
  return lowercasePalTextInput.replace(regex, "");
}

const unacceptedInput = (palTextInput) => {
  const regex = /[\d`!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~]/g;
  return palTextInput.match(regex);
}

const resultPalindrome = (palTextInput) => {
  if (!palTextInput.value) {
    emptyPalInput;
  } else if (palTextInput.value === 1) {
    acceptedPalInput();
    palResult.display = "block";
    palResult.innerText = `${palTextInput.value} is a palindrome`;
  } else { 
    
  }
}

console.log(resultPalindrome("sdgd"));


  
*/