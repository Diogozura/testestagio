import { Box, List, ListItem, Typography } from "@mui/material";
import styled from 'styled-components'
import Link from "next/link";
import { theme } from "@/styles/theme";
import Image from "next/image";



const Navigation = styled.a`
color: ${theme.colors.claro};
text-decoration: none;
/* font-size: x-large; */
cursor: pointer;
@media only screen and (max-width: 550px){
    margin: 5px;
}
&:hover{    

    text-decoration: underline;
    }
`

const footer = [
    {
        categoria: 'Desafio',
        item1: {
            nome: 'Desafio 1',
            link: '/desafio1'
        },
        item2: {
            nome: 'Desafio 2',
            link: '/desafio2'
        },
        item3: {
            nome: 'Desafio 3',
            link: 'desafio3'
        },

    }, {
        categoria: 'Redes',
        item1: {
            nome: 'LinkedIn',
            link: 'https://www.linkedin.com/in/diogo-silva-santos-251bb5192/'
        },
        item2: {
            nome: 'Instagram',
            link: 'https://instagram.com/diogo__zura'
        }

    }, {
        categoria: 'Projeto',
        item1: {
            nome: 'Github',
            link: 'https://github.com/Diogozura/'
        },
        item2: {
            nome: 'Figma',
            link: 'https://www.figma.com/community/file/1210979595536394898'
        },
       
    },
]

export default function Footer() {
    return (
        <Box padding={3} mt={0} sx={{ backgroundColor: theme.colors.preto }}>
            <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'} >
                {footer.map((value) => (
                    <>
                        <List>
                            <ListItem sx={{ fontWeight: 700, fontSize: '1.5em', color: '#FFFF' }}>{value.categoria}</ListItem>
                            <ListItem>
                                <Link href={`${value.item1.link}`} legacyBehavior>
                                    <Navigation> {value.item1.nome}</Navigation>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={`${value.item2.link}`} legacyBehavior>
                                <Navigation> {value.item2.nome}</Navigation>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={`${value.item3?.link}`} legacyBehavior >
                                <Navigation> {value.item3?.nome}</Navigation>
                                </Link>
                            </ListItem>
                        </List>

                    </>

                ))}

            </Box>
            <Box display={'flex'} alignItems='center'>
            <Image src={'/logo.svg'} width={50} height={50} alt={'logo - lamapada'} />
                      <Typography variant="h5" component="h1" color={theme.colors.claro}>     
                          Desafio
            </Typography>
            </Box>
           
        </Box>


    )
}