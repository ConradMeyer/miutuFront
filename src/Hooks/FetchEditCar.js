async function FetchEditCar (coche, token) {
    const options = {
        method: "PUT",
        body: JSON.stringify(coche),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }
      };
    return await fetch("https://miutu-eco.herokuapp.com/edit/car", options)
}

export default FetchEditCar;