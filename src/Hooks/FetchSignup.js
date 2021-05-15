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
     },
     mode: 'cors'
  };
  return await fetch("https://miutu-eco.herokuapp.com/signup", options);
}

export default FetchSignup;
