const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach((cell) => {
    total += Number(cell.innerText);
  });

  const table = document.querySelector("table");

  // Remove old total row if exists
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.parentElement.remove();
  }

  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.id = "ans";          // 🔥 REQUIRED BY CYPRESS
  cell.colSpan = 2;
  cell.innerText = total;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
