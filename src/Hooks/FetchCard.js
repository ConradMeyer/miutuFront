async function FetchCard(card) {
  const options = {
    method: "PUT",
    body: JSON.stringify(card),
    headers: {
      "Content-Type": "application/json",
      "Authorization": card.token
    }
  };
  console.log(options);
  return await fetch("http://localhost:8080/create/card", options);
}

export default FetchCard;
