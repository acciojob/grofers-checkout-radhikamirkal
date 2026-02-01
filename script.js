const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Calculate total
  prices.forEach((cell) => {
    total += Number(cell.innerText);
  });

  // Get table
  const table = document.querySelector("table");

  // Prevent adding total row multiple times
  const existingTotal = document.getElementById("total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  // Create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  // Create single cell
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.innerText = `Total Price: ${total}`;

  // Append
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
