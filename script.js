let currentValue = '';

// Menghapus karakter terakhir
function removeLastCharacter() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

//persen
function calculatePercentage() {
  const display = document.getElementById('display');
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const percentageValue = currentValue / 100;
    display.value = percentageValue; // Menampilkan hasil persen
  }
}

function appendToDisplay(value) {
  currentValue += value;
  document.getElementById('display').value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  document.getElementById('display').value = currentValue;
}

function calculate() {
  try {
    document.getElementById('display').value = eval(currentValue);
    currentValue = '';
  } catch (error) {
    alert('Terjadi kesalahan dalam perhitungan.');
  }
}