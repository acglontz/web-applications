/* eslint-disable indent */
"use strict";

class TableTemplate {
    static fillIn(tableId, dict, columnName) {
        const table = document.getElementById(tableId);
        const rows = table.rows;
        // Replace template strings in header row
        const headerRow = rows[0];
        const headerCells = headerRow.cells;
        for (let i = 0; i < headerCells.length; i++) {
            const cell = headerCells[i];
            const template = new TemplateProcessor(cell.innerHTML);
            const result = template.fillIn(dict);
            cell.innerHTML = result;
        }

        // Replace template strings in specified column
        if (columnName) {
            let columnIndex = -1;
            const headerCells = headerRow.cells;
            for (let i = 0; i < headerCells.length; i++) {
                const cell = headerCells[i];
                if (cell.innerHTML === columnName) {
                    columnIndex = i;
                    break;
                }
            }
            if (columnIndex === -1) {
                return;
            }
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const cell = row.cells[columnIndex];
                const template = new TemplateProcessor(cell.innerHTML);
                const result = template.fillIn(dict);
                cell.innerHTML = result;
            }
        } else {
            // Replace template strings in all columns
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.cells;
                for (let j = 0; j < cells.length; j++) {
                    const cell = cells[j];
                    const template = new TemplateProcessor(cell.innerHTML);
                    const result = template.fillIn(dict);
                    cell.innerHTML = result;
                }
            }
        }

    // Make table visible
        table.style.visibility = "visible";
  }
}
