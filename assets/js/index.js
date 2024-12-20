const button = document.getElementById("online-btn");
button.addEventListener("click", createGame);

function createGame() {
  fetch(
    "https://bigtactoe-backend.azurewebsites.net/api/games/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "OPEN" }),
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to create game session");
      }
    })
    .then((data) => {
      const sessionId = data.id;
      if (sessionId) {
        window.location.href = `waiting.html?sessionId=${sessionId}`;
      } else {
        console.error("Session ID not found in response");
      }
    })
    .catch((error) => console.error("Error creating game: ", error));

  //bigtactoe-backend-production.up.railway.app
  //localhost:8080
}