'use strict';

class DatePicker {
    constructor(containerId, onSelect) {
        this.containerId = containerId;
        this.onSelect = onSelect;
        this.date = new Date();
    }

    getMonthName(month) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[month];
    }

    render(date) {
        // Update the internal date value
        this.date = date;

        // Get container element
        const container = document.getElementById(this.containerId);

        // Clear container
        container.innerHTML = '';

        // Create calendar container
        const calendarContainer = document.createElement('div');
        calendarContainer.classList.add('calendar-container');

        // Render previous month button
        const prevMonthBtn = document.createElement('button');
        prevMonthBtn.textContent = '<';
        prevMonthBtn.classList.add('prev-btn');
        prevMonthBtn.classList.add('calendar-btn');
        prevMonthBtn.style.marginRight = '10px'; // Add right margin for spacing
        prevMonthBtn.addEventListener('click', () => {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1);
            this.render(this.date);
        });

        // Render next month button
        const nextMonthBtn = document.createElement('button');
        nextMonthBtn.textContent = '>';
        nextMonthBtn.classList.add('next-btn');
        nextMonthBtn.classList.add('calendar-btn');
        nextMonthBtn.style.marginLeft = '10px'; // Add left margin for spacing
        nextMonthBtn.addEventListener('click', () => {
            this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
            this.render(this.date);
        });

        // Render month and year label
        const monthYearLabel = document.createElement('div');
        monthYearLabel.textContent = this.getMonthName(this.date.getMonth()) + ' ' + this.date.getFullYear();
        monthYearLabel.classList.add('month-year-label');

        // Render table
        const table = document.createElement('table');
        const tableHead = document.createElement('thead');
        const tableBody = document.createElement('tbody');

        // Render table header with weekday names
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const headerRow = document.createElement('tr');
        weekdays.forEach((weekday) => {
            const th = document.createElement('th');
            th.textContent = weekday;
            headerRow.appendChild(th);
        });
        tableHead.appendChild(headerRow);

        // Render table body with date cells
        this.renderCalendar(tableBody);

        table.appendChild(tableHead);
        table.appendChild(tableBody);

        // Append calendar elements to container
        calendarContainer.appendChild(prevMonthBtn);
        calendarContainer.appendChild(monthYearLabel);
        calendarContainer.appendChild(nextMonthBtn);
        calendarContainer.appendChild(table);
        container.appendChild(calendarContainer);
    }

    renderCalendar(tableBody) {
        // Clear table body
        tableBody.innerHTML = '';

        // Get current month and year
        const month = this.date.getMonth();
        const year = this.date.getFullYear();

        // Get first day of the month
        const firstDay = new Date(year, month, 1).getDay();

        // Get last day of the month
        const lastDay = new Date(year, month + 1, 0).getDate();

        // Calculate number of cells in the last row
        let numCellsLastRow = (lastDay + firstDay) % 7;

        // If the last row has 0 cells, it means there are no empty cells in the last row
        if (numCellsLastRow === 0) {
            numCellsLastRow = 7;
        }

        // Render table rows and cells
        let row = document.createElement('tr');

        // Get last day of the previous month
        const lastDayPrevMonth = new Date(year, month, 0).getDate();

        // Render cells for days from the previous month
        for (let i = lastDayPrevMonth - firstDay + 1; i <= lastDayPrevMonth; i++) {
            const cell = document.createElement('td');
            cell.textContent = i;
            cell.classList.add('prev-month');
            row.appendChild(cell);
        }

        // Render cells for each day of the current month
        for (let day = 1; day <= lastDay; day++) {
            const cell = document.createElement('td');
            cell.textContent = day;
            cell.addEventListener('mouseover', () => {
                // Add hover effect when mouse is over the day number
                cell.classList.add('hover');
            });
            cell.addEventListener('mouseout', () => {
                // Remove hover effect when mouse is not over the day number
                cell.classList.remove('hover');
            });

            if (
                year === new Date().getFullYear() &&
                month === new Date().getMonth() &&
                day === new Date().getDate()
            ) {
                cell.classList.add('selected');
            }
            row.appendChild(cell);
            if (row.children.length === 7) {
                tableBody.appendChild(row);
                row = document.createElement('tr');
            }
        }

        // Render cells for days from the next month
        const nextMonthDays = 7 - (numCellsLastRow % 7);
        for (let i = 1; i <= nextMonthDays; i++) {
            const cell = document.createElement('td');
            cell.textContent = i;
            cell.classList.add('next-month');
            row.appendChild(cell);
        }

        tableBody.appendChild(row);

        while (tableBody.children.length < 6) {
            const emptyRow = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                const cell = document.createElement('td');
                emptyRow.appendChild(cell);
            }
            tableBody.appendChild(emptyRow);
        }
    }
}
