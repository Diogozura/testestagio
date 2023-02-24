import BaseWeb from '@/src/components/BaseSite';
import LinkNext from '@/src/components/LinkNext';
import { theme } from '@/styles/theme';
import { Box, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

  // função que faz a validação se é um Palindrome 

function isPalindrome(str: string): boolean {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, ''); // Remove caracteres especiais
  const len = cleanStr.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

export default function PalindromePage() {
  const [inputValue, setInputValue] = useState('');
  const [isPalindromeValue, setIsPalindromeValue] = useState(false);

  
  function handleInputChange(event: { target: { value: any; }; }) {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    setIsPalindromeValue(isPalindrome(inputValue));
  }

  return (
    <>
      <Head>
        <title>Desafio 2  - Populis</title>
        <meta name="description" content="Desafio para vaga de estagio na empresa Populis " />


      </Head>
      <BaseWeb>
        <Box sx={{ height: '100vh' }}>

          <Typography variant="h5" component="h1" fontWeight={500} mb={10} textAlign={'center'}>
            2 - Escreva uma função em TypeScript que receba uma string e verifique se ela é um palíndromo.
          </Typography>
        
            <Box mb={5}>
            <Typography variant="h5" component="h3">Digite qualquer no campo abaixo coisa e confira se é um palíndromo</Typography>
            <Box bgcolor={theme.colors.claro} borderRadius={2} mt={2} maxWidth={350} alignItems='center'  padding={1}>
              
              <Typography variant="body2" component="p" display={'flex'}> <InfoIcon sx={{mr:1}}/> frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.</Typography>
            </Box>
            </Box>

            <Box margin={'auto'} maxWidth={'70%'} mb={15} textAlign="center">
            <TextField
              type="text"
              id="outlined-required"
              label="Palíndromo"
              fullWidth
              defaultValue="Hello World"
              sx={{mb:2}}
              value={inputValue} onChange={handleInputChange} />

            {isPalindromeValue ? (
              <Typography>Esta é um palíndromo!</Typography>
            ) : (
              <Typography>Isto não é um palíndromo.</Typography>
            )}
            </Box>
            
       

          <LinkNext to={'/desafio3'} />
        </Box>

      </BaseWeb>

    </>
  );
}
