
import BaseWeb from '@/src/components/BaseSite';
import LinkNext from '@/src/components/LinkNext';
import { theme } from '@/styles/theme';
import { Box, Button, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import * as React from 'react';

  // função que faz os cálculos estáticos  

function calcularEstatisticas(numeros: number[]): { soma: number, media: number, maximo: number, minimo: number } {
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    return { soma, media, maximo, minimo };
}

export default function MinhaPagina() {
    const [inputValue, setInputValue] = React.useState('')
    const [numeros, setNumeros] = React.useState([0]);
    const estatisticas = calcularEstatisticas(numeros);

    const gerarNumerosAleatorios = () => {
        const numerosAleatorios = Array.from({ length: 5 }, () =>
          Math.round(Math.random() * 10)
        );
        setNumeros(numerosAleatorios);
      };

    const adicionarNumero = () => {
        const novoNumero = Number(inputValue);
        setNumeros([...numeros, novoNumero]);
        setInputValue('');
    };

    const handleGerarAleatoriosClick = () => {
        gerarNumerosAleatorios();
    };
    const limparNumeros = () => {
        setNumeros([]);
        setNumeros([0]);
      }

    return (
        <>
            <Head>
                <title>Desafio 3  - Populis</title>
                <meta name="description" content="Desafio para vaga de estagio na empresa Populis " />


            </Head>
            <BaseWeb>
                <Box sx={{ height: '100vh' }}>
                    <Typography variant="h5" component="h1" fontWeight={500} mb={2} textAlign={'center'}>
                        3 -Escreva uma função em TypeScript que receba um array de números inteiros e retorne um objeto que contenha as seguintes informações:
                    </Typography>
                    <Box mb={10}>
                        <ul>
                            <li>Soma de todos os números no array </li>
                            <li>Média aritmética dos números no array  </li>
                            <li>Número máximo no array Número mínimo no array</li>
                        </ul>
                    </Box>

                    <Box display='flex' justifyContent='space-evenly' mb={5}>
                        <TextField
                            type="number"
                            label="Número"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button variant='contained' color='success' onClick={adicionarNumero}>Adicionar número</Button>
                        <Button variant="contained" color={'warning'} sx={{ mb: 1 }} onClick={handleGerarAleatoriosClick}>Gerar números</Button>  
                        <Button  variant="contained" color="error"  onClick={limparNumeros}>Limpar números</Button>
                    </Box>

                    <Box textAlign='left' bgcolor={theme.colors.claro} maxWidth={'80%'} padding={3} borderRadius={ 2}>
                        <Typography>
                            Numeros:[{numeros.join(", ")}]
                        </Typography>

                        <ul>
                            <li>Soma: {estatisticas.soma}</li>
                            <li>Média: {estatisticas.media}</li>
                            <li>Soma: {estatisticas.soma}</li>
                            <li>Máximo: {estatisticas.maximo}</li>
                            <li>Mínimo: {estatisticas.minimo}</li>
                        </ul>
                    </Box>

                    <Box>

                    </Box>


                <LinkNext to='/resposta'/>
                </Box>
            </BaseWeb>

        </>
    )
}