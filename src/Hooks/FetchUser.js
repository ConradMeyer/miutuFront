async function FetchUser (token) {
    const options = {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("http://localhost:8080/usuario/get", options)
}

export default FetchUser;