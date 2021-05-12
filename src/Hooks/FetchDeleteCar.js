async function FetchDeleteCar (coche, token) {
    const options = {
        method: "DELETE",
        body: JSON.stringify(coche),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("http://localhost:8080/delete/car", options)
}

export default FetchDeleteCar