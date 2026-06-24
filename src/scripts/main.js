'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const positionCell = row.cells[1];
  const clonedCell = positionCell.cloneNode(true);
  const salaryCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedCell, salaryCell);
}
