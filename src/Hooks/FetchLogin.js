async function FetchLogin (email, pass) {
    const options = {
        method: "POST",
        body: JSON.stringify({ 
          email: email,
          pass: pass
         }),
        headers: { "Content-Type": "application/json" }
      };
    return await fetch("http://localhost:8080/signin", options)
}

export default FetchLogin