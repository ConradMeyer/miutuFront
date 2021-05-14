async function FetchUser (token) {
    const options = {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("https://miutu-eco.herokuapp.com/usuario/get", options)
}

export default FetchUser;