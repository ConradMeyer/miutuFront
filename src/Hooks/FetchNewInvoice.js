async function FetchNewInvoice (factura, token) {
    const options = {
        method: "PUT",
        body: JSON.stringify(factura),
        headers: { 
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }
      };
    return await fetch("http://localhost:8080/invoice", options)
}

export default FetchNewInvoice;