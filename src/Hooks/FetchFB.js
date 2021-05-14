async function FetchSignupFB(user) {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    };
    return await fetch("https://miutu-eco.herokuapp.com/signup/google", options);
  }
  
  export default FetchSignupFB;