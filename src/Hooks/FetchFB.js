async function FetchSignupFB(user) {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { 
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*"
       },
    };
    return await fetch("http://localhost:8080/signup/google", options);
  }
  
  export default FetchSignupFB;