import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import BaseWeb from '@/src/components/BaseSite'
import { Typography } from '@mui/material'
import { theme } from '@/styles/theme'
import BoxResposta from '@/src/components/BoxResposta'
import CardDesafio from './cardDesafio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Estagio  - Populis</title>
        <meta name="description" content="Desafio para vaga de estagio na empresa Populis " />
        
      
          </Head>
          <BaseWeb>
              <Typography variant="h3" component="h1" fontWeight={500} mb={10} textAlign={'center'}>
                  Desafio Estagio - <Link href={'https://populisrh.com.br'} color={theme.colors.preto}>POPULIS</Link>
            </Typography>

              <BoxResposta pergunta={'1 - Por que você está interessado neste estágio e nesta empresa em particular? '} resposta={'Uma oportunidade de aprender mais , com situações reais , alias ....'} />
              <Typography textAlign={'center'} mb={15}>
              <Link  style={{color: theme.colors.preto, fontSize:'1.4em'}} href={'/resposta'}>Veja todas as respostas</Link>
              </Typography>
               
              <CardDesafio />
              
              <BoxResposta pergunta={'Afinal porque next.js ?'} resposta={'De fato o desafio proposto era para usar TypeScript , porém para deixar mais intuitivo para o usuário escolhi Next.js ,aliás a versão 13, já vem nativo , assim o desafio continua sendo em TypeScript , porém com um pouquinho de Next.js para deixar mais bonitinho visualmente . Espero que goste de resultado '} />
              
          </BaseWeb>
     
    </>
  )
}
