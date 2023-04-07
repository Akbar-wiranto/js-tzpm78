// Import stylesheets
import './style.css';
const data = [];
let total = 0;
let rata = 0;

for (let i = 1; i <= 3; i++) {
  const nilai = parseInt(prompt(`Masukkan nilai ke-${i}:`));
  data.push(nilai);
  total += nilai;
}

rata = total / data.length;

console.log(`Nilai yang diinput adalah ${data.join(", ")}`);
console.log(`Total nilai yang diinput adalah ${total}`);
console.log(`Rata-rata nilai yang diinput adalah ${rata}`);
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;