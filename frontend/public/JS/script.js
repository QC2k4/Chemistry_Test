document.addEventListener("DOMContentLoaded", () => {
  const isLocalhost = window.location.hostname === "localhost";
  const apiBaseUrl = isLocalhost 
    ? "http://127.0.0.1:5000"           // Local Flask
    : "https://chemistry-test.onrender.com"; // Deployed Render

  fetch(`${apiBaseUrl}/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ log: "user visited the page" })
  })
  .then(res => res.json())
  .then(data => console.log("Logged:", data))
  .catch(err => console.error("Logging failed:", err));
});