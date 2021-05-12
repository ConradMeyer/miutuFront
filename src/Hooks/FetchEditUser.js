async function FetchEditUser (user, token) {
    const options = {
        method: "PUT",
        body: JSON.stringify(user),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("http://localhost:8080/edit/user", options)
}

export default FetchEditUser;