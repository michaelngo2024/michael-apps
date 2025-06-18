function validateJSON() {
  const input = document.getElementById("jsonInput").value;
  const result = document.getElementById("result");

  try {
    JSON.parse(input);
    result.textContent = "✅ Valid JSON";
    result.className = "result valid";
  } catch (e) {
    result.textContent = `❌ Invalid JSON: ${e.message}`;
    result.className = "result invalid";
  }
}
