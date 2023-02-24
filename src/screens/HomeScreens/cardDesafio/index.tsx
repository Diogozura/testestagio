import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import { theme } from '@/styles/theme';
import Link from 'next/link';
import { Box } from '@mui/system';

export default function CardDesafio() {

    const desafios = [
        {
            title: 'Desafio 1',
            assunto: 'Escreva uma função em TypeScript que receba um array de números inteiros e retorne a soma de todos os números ímpares.',
            link: '/desafio1'
        },
        {
            title: 'Desafio 2',
            assunto: 'Escreva uma função em TypeScript que receba uma string e verifique se ela é um palíndromo. ',
            link: '/desafio2'
        },
        {
            title: 'Desafio 3',
            assunto: 'Escreva uma função em TypeScript que receba um array de números inteiros e retorne um objeto que contenha as seguintes informações...',
            link: '/desafio3'
        },

    ]


    return (
        <>
            <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'}
   > 
            {desafios.map((i) => (
                <> 
               
                    
        <Card sx={{ maxWidth: 345,bgcolor: theme.colors.Vermelho, height:350, mb: 2 }}>
            <CardActionArea>
                <CardMedia sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', padding:4 }}>
                    <Image src={'/foguete_1.svg'} alt='foguete Desafio' width={70} height={70}>
                    </Image>
                </CardMedia>
                <CardContent>
                   
                        <>
                            <Typography gutterBottom textAlign={'center'} color={'#FFFF'} variant="h5" component="div">
                                {i.title}
                            </Typography>
                            <Typography variant="body2" height={70} color={'#FFFF'}>
                                {i.assunto}
                            </Typography>
                                    <Typography variant="body2" textAlign={'center'} mt={2}  >
                                        <Link href={i.link}  style={{'color':theme.colors.preto, fontSize:'1.3em'}}  >
                                            Confira
                                </Link>
                            </Typography>
                        </>

                  

                </CardContent>
            </CardActionArea>
            </Card>
                   
                    </>        )
              )}
              </Box>
        </>
       

    );
}