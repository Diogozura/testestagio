import BaseWeb from "@/src/components/BaseSite";
import LinkNext from "@/src/components/LinkNext";
import { theme } from "@/styles/theme";
import { Box, Button, TextField, Typography } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";


  // função que faz os cálculos
function somaNumerosImpares(numeros: number[]): number {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      soma += numeros[i];
    }
  }
  return soma;
}

function MinhaPagina() {
  const [numeros, setNumeros] = useState<number[]>([]);
  const [somaImpares, setSomaImpares] = useState<number>(0);
  const [numeroManual, setNumeroManual] = useState<string>("");

  // função que gera numeros aleatorios 
  const gerarNumerosAleatorios = () => {
    const numerosAleatorios = Array.from({ length: 5 }, () =>
      Math.round(Math.random() * 10)
    );
    setNumeros(numerosAleatorios);
  };

    // função que limpa o array de numeros  

  const limparNumeros = () => {
    setNumeros([]);
    setSomaImpares(0);
  }

    // função que add numeros  

  const adicionarNumeroManual = () => {
    const numero = parseInt(numeroManual, 10);
    if (!isNaN(numero)) {
      setNumeros([...numeros, numero]);
      setNumeroManual("");
    }
  };

  const handleNumerosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroManual(e.target.value);
  };

  const handleGerarAleatoriosClick = () => {
    gerarNumerosAleatorios();
  };

  React.useEffect(() => {
    const soma = somaNumerosImpares(numeros);
    setSomaImpares(soma);
  }, [numeros]);

  return (
    <>
      <Head>
        <title>Desafio 1 - Populis</title>
        <meta name="description" content="Desafio para vaga de estagio na empresa Populis " />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseWeb>

        <Box sx={{ height: '100vh' }}>


          <Typography variant="h5" component="h1" fontWeight={500} mb={10} textAlign={'center'}>
            1 - Escreva uma função em TypeScript que receba um array de números inteiros e retorne a soma de todos os números ímpares.
          </Typography>

          <Box margin={'auto'} maxWidth={350} height={140} textAlign={'center'}>
            {numeros.length > 0 && (
              <>

                <Box bgcolor={'#D9D9D9'} padding={1} borderRadius={2} >
                  Os números gerados são :<Typography color={theme.colors.Vermelho}> [{numeros.join(", ")}] </Typography>
                </Box>

                <Typography>
                  A soma dos números ímpares é <Typography color={theme.colors.Vermelho}>{somaImpares}</Typography>.
                </Typography>
              </>
            )}
          </Box>

          <Box  margin={'auto'} width='50%' maxWidth='90%' sx={{}}>

            <Box sx={{ mb: 1 }}>
              
            <TextField
                type="number"
                value={numeroManual}
                onChange={handleNumerosChange}
                variant="outlined"
                label="Número"
                InputProps={{
                  inputProps: {
                    step: "1",
                    min: "0",
                  },
                }}
              />
              
            <Button variant="contained" color='success' onClick={adicionarNumeroManual}>Adicionar número</Button>
          </Box>
          <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
          <Button variant="contained" color={'warning'} sx={{mb:1}} onClick={handleGerarAleatoriosClick}>Gerar números</Button>     
          <Button  variant="contained" color="error"  onClick={limparNumeros}>Limpar números</Button>
        
            </Box>
            </Box>
           
        </Box>

        <LinkNext to={'/desafio2'} />
        
      </BaseWeb>
    </>
  );
}

export default MinhaPagina;
