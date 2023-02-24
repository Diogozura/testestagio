import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}


export default function Header( ) {
    return (
        <>
           
        <AppBar sx={{bgcolor: theme.colors.laranja}}>
                <Toolbar>
                    <Link href={'/'} style={{color: '#FFFF' , textDecoration:'none', display:'flex', alignItems:'center' }}>
                    <Image src={'/logo.svg'} width={50} height={50} alt={'logo - lamapada'} />
                      <Typography variant="h5" component="h2">     
                          Desafio
            </Typography>
                    </Link>
                
          </Toolbar>
        </AppBar>
     
      <Toolbar />
      </>
      
     
  );
}