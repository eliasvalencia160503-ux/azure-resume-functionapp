const counterElement = document.getElementById("visitor-count");
const API_URL = "https://elias-resume-api-hvceanh6c2gngzbg.centralus-01.azurewebsites.net/api/visitor-count";

async function loadVisitorCount() {
  if (!counterElement) return;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const count = data.count ?? 0;
    counterElement.textContent = count.toLocaleString();
  } catch (error) {
    console.error("Unable to load visitor count:", error);
    counterElement.textContent = "Unavailable";
  }
}

loadVisitorCount();