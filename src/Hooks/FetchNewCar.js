async function FetchNewCar (coche, token) {
    const options = {
        method: "PUT",
        body: JSON.stringify(coche),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("http://localhost:8080/create/car", options)
}

export default FetchNewCar