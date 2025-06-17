function convert() {
  const jsonInput = document.getElementById("jsonInput").value;
  const csvOutput = document.getElementById("csvOutput");

  try {
    const data = JSON.parse(jsonInput);
    const items = Array.isArray(data) ? data : [data];
    const headers = Object.keys(items[0]);

    const csv = [
      headers.join(","),
      ...items.map(row => headers.map(h => JSON.stringify(row[h] ?? "")).join(","))
    ].join("\n");

    csvOutput.value = csv;
  } catch (err) {
    csvOutput.value = "Invalid JSON format.";
  }
}

function copyCSV() {
  const csvOutput = document.getElementById("csvOutput");
  csvOutput.select();
  document.execCommand("copy");
}
