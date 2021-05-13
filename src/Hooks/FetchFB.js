async function FetchSignupFB(user) {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    };
    return await fetch("http://localhost:8080/signup/google", options);
  }
  
  export default FetchSignupFB;