function convert() {
  const jsonInput = document.getElementById("jsonInput").value;
  const csvOutput = document.getElementById("csvOutput");

  try {
    const data = JSON.parse(jsonInput);
    const items = Array.isArray(data) ? data : [data];

    // Collect all unique keys to build a complete header
    const headers = Array.from(new Set(items.flatMap(obj => Object.keys(obj))));

    const escapeCSV = (value) => {
      if (value === null || value === undefined) return '';
      const stringValue = String(value).replace(/"/g, '""');
      return `"${stringValue}"`;
    };

    const csv = [
      headers.join(","),
      ...items.map(row =>
        headers.map(header => escapeCSV(row[header])).join(",")
      )
    ].join("\n");

    csvOutput.value = csv;
  } catch (err) {
    csvOutput.value = "Invalid JSON format.";
  }
}
