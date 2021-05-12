async function FetchEditCar (coche, token) {
    const options = {
        method: "PUT",
        body: JSON.stringify(coche),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token
        }
      };
    return await fetch("http://localhost:8080/edit/car", options)
}

export default FetchEditCar;