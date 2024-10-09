 Boston Top Earners Data Visualization

This project displays the names and salaries of top earners in the Boston dataset. The application fetches data, filters out individuals earning more than $200,000, and dynamically updates the webpage to display the top earners.

 Technologies Used
- **HTML5**: For the page structure.
- **JavaScript (ES6 Modules)**: For data manipulation and DOM updates.
- **Module Imports**: Data is imported from an external JavaScript file (`bos.js`).

 Features
- Filters data from the `boston` dataset to find individuals with salaries greater than $200,000.
- Dynamically displays the top earner’s name and salary on the webpage.
- Utilizes ES6 module import for fetching and processing external data.

 How to Use
1. Clone or download the repository.
2. Ensure you have an `index.html` file and the following JavaScript files:
   - `index.js`: Contains the logic to filter and display the top earners.
   - `bos.js`: Contains the `boston` data array in the format: `boston = { data: [...] }`.
3. Open `index.html` in any modern browser.
4. The webpage will display the top earners
