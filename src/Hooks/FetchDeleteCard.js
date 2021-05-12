async function FetchDeleteCard (tajeta, token){
    const options = {
        method: "DELETE",
        body: JSON.stringify(tajeta),
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    };
    return await fetch("http://localhost:8080/delete/card", options)
}

export default FetchDeleteCard;