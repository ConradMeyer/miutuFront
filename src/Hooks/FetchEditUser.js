async function FetchEditUser (user, token) {
    const options = {
        method: "PUT",
        body: JSON.stringify(user),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }
      };
    return await fetch("https://miutu-eco.herokuapp.com/edit/user", options)
}

export default FetchEditUser;