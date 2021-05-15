async function FetchCard(card) {
  const options = {
    method: "PUT",
    body: JSON.stringify(card),
    headers: {
      "Content-Type": "application/json",
      "Authorization": card.token,
      'Access-Control-Allow-Origin': "*"
    }
  };
  return await fetch("https://miutu-eco.herokuapp.com/create/card", options);
}

export default FetchCard;
