async function FetchLogout (token) {
    const options = {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("http://localhost:8080/signout", options)
}

export default FetchLogout;