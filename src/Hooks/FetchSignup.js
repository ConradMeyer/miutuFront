async function FetchSignup(nombre, apellido, email, pass, movil) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      name: nombre,
      surname: apellido,
      email: email,
      pass: pass,
      movil: movil,
    }),
    headers: { 
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': "*"
     }
  };
  return await fetch("http://localhost:8080/signup", options);
}

export default FetchSignup;
