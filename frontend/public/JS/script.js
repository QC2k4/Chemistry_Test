document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:5000/log", {
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