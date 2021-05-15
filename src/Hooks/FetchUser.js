async function FetchUser (token) {
    const options = {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }
      };
    return await fetch("https://miutu-eco.herokuapp.com/usuario/get", options)
}

export default FetchUser;