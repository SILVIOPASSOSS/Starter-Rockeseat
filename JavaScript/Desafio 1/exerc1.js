var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

 
  const {rua, numero, bairro, cidade, uf} = endereco

  console.log('o usuário mora em ${cidade} /{$uf}, no bairro ${bairro}, na "${rua}" com nº ${numero}.');
  