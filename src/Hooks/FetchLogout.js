async function FetchLogout (token) {
    const options = {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("https://miutu-eco.herokuapp.com/signout", options)
}

export default FetchLogout;