function Add() {
  // Create table if it doesn't exist
  let table = document.getElementById("myTable");
  if (!table) {
    table = document.createElement("table");
    table.id = "myTable";
    document.body.appendChild(table);

    let headerRow = document.createElement("tr");
    let headers = ["Title", "Director", "Watched"];
    headers.forEach(headerText => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  }

  // Get values from input fields
  let title = document.getElementById("title").value;
  let director = document.getElementById("director").value;
  let watched = document.getElementById("watched").checked ? "Yes" : "No";

  let row = document.createElement("tr");

  let titleCell = document.createElement("td");
  titleCell.textContent = title;
  row.appendChild(titleCell);

  let directorCell = document.createElement("td");
  directorCell.textContent = director;
  row.appendChild(directorCell);

  let watchedCell = document.createElement("td");
  watchedCell.textContent = watched;
  row.appendChild(watchedCell);

  table.appendChild(row);

  document.getElementById("title").value = '';
  document.getElementById("director").value = '';
  document.getElementById("watched").checked = false;
}
