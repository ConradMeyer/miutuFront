async function FetchLogin (email, pass) {
    const options = {
        method: "POST",
        body: JSON.stringify({ 
          email: email,
          pass: pass
         }),
        headers: { 
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': "*"
       }
      };
    return await fetch("https://miutu-eco.herokuapp.com/signin", options)
}

export default FetchLogin