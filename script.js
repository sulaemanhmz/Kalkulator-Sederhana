// Fungsi untuk membersihkan input
function clearInput() {
  const input = document.getElementById("input");
  input.value = "";
}

// Fungsi untuk melakukan perhitungan
function calculate() {
  const input = document.getElementById("input").value;
  const numbers = input.split(/[\+\-\*\/]/);

  // Memeriksa apakah input valid
  if (numbers.length !== 2 || isNaN(Number(numbers[0])) || isNaN(Number(numbers[1]))) {
    alert("Input tidak valid. Mohon masukkan dua bilangan yang akan dioperasikan.");
    return;
  }

  // Melakukan perhitungan dan menampilkan hasil
  const result = eval(input);
  const inputElement = document.getElementById("input");
  inputElement.value = result;
}

// Event listener untuk tombol enter
const inputElement = document.getElementById("input");
inputElement.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    calculate();
  }
});
