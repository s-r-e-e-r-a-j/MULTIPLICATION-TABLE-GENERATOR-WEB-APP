// Coded by Sreeraj

// Ask user for number and limit
const n = parseInt(prompt("Enter the number for multiplication table:"), 10);
const limit = parseInt(prompt("Enter the limit:"), 10);

if (isNaN(n) || isNaN(limit)) {
  alert("Please enter valid numbers!");
} else {
  let result = "";

  for (let i = 1; i <= limit; i++) {
    result += `${i} x ${n} = ${i * n}\n`;
  }

  alert(result);

  // Create a downloadable file
  const a = document.querySelector("#downloadLink");
  const blob = new Blob([result], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = `Multiplication_Table_${n}.txt`;
}
