const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log("Email:", email);
  console.log("Password:", password);

  if (username && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/"); // re-direct elsewhere
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
