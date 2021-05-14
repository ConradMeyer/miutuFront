async function FetchCard(card) {
  const options = {
    method: "PUT",
    body: JSON.stringify(card),
    headers: {
      "Content-Type": "application/json",
      "Authorization": card.token
    }
  };
  return await fetch("https://miutu-eco.herokuapp.com/create/card", options);
}

export default FetchCard;
