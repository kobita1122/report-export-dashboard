function generate() {
  const type = document.getElementById("type").value;
  const report = {
    type,
    generatedAt: new Date().toISOString(),
    records: Math.floor(Math.random() * 1000)
  };

  document.getElementById("output").innerText =
    JSON.stringify(report, null, 2);
}
