async function loadIntoTable(url, table) {
 const tableHead = table.querySelector("thead");
 const tableBody = table.querySelector("tbody");
 const response = await fetch(url);
 const { headers, rows } =  await response.json();

 //atīra tabulu 
 tableHead.innerHTML = "<tr></tr>";
 tableBody.innerHTML = "";
 
 // aizpilda tabulas galvu
 for (const headerText of headers){
  const headerElement = document.createElement("th");

  headerElement.textContent = headerText;
  tableHead.querySelector("tr").appendChild(headerElement);
 }
// aizpilda tabulas kolonas ar datiem
 for (const row of rows){
  const rowElement = document.createElement("tr");

  for (const cellText of row) {
    const cellElement = document.createElement("td");

    cellElement.textContent = cellText;
    rowElement.appendChild(cellElement);
  }

  tableBody.appendChild(rowElement);
 }

}
//pievieno datu bazi kas ir json
loadIntoTable("./dati2.json", document.querySelector("table"));