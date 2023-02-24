import BaseWeb from "@/src/components/BaseSite";
import BoxResposta from "@/src/components/BoxResposta";
import LinkNext from "@/src/components/LinkNext";
import { theme } from "@/styles/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Link from "next/link";

export default function Respostas() {

    const perguntas = [{
        title: '1 - Por que você está interessado neste estágio e nesta empresa em particular?',
        res: 'Uma oportunidade de aprender mais , com situações reais , alias a empresa trabalha exatamente com o que estou alinhado , ajudar pessoas por meio da Tecnologia'
    },
    {
        title: '2 - Quais habilidades você tem que podem ser aplicadas neste papel?',
        res: 'Tenho conhecimentos em React.Js , especialmente em Next.js , desenvolvimento de telas , interfaces e a preocupação com com a experiencia do usuário'
        },
        {
        title: '3 - Como você descreveria seu estilo de trabalho e como você lida com desafios?',
        res: 'Adoro receber um desafio e uma missão , com objetivo de ajudar alguém . Eu aprendo na prática , lidando com problemas e procurando solução para tal'
        },
        {
        title: '4 - Quais são suas expectativas para este estágio é o que você espera aprender?',
        res: 'Expectativa de conseguir aprender e ser útil para a empresa , onde eu possa ser livre para explorar minha criatividade de resolver problemas'
        },
        {
        title: '5 - Como você lida com feedback construtivo e críticas?',
        res: 'Só assim consigo evoluir , sempre que recebo um feedback eu evoluo um pouco mais como pessoa e como profissional .'
        },
        {
        title: '6 - Quais são suas principais áreas de interesse na sua área de atuação?',
        res: 'Gosto muito de ser Dev front-end e criar interface de usuários , achar soluções para os usuários'
        }
    
    ]


    return (
        <>
             <Head>
        <title>Resposta Estagio  - Populis</title>
        <meta name="description" content="Desafio para vaga de estagio na empresa Populis " />
        
      
          </Head>
            <BaseWeb>
                <Link href={'/'} style={{ color: theme.colors.preto }}>Voltar para home</Link>
                <Typography variant="h5" component="h1" fontWeight={500} mb={2} textAlign={'center'}>
                    Respostas
                </Typography>
                <Box>
                    {perguntas.map((i) => (
                        <>
                               <BoxResposta pergunta={i.title} resposta={i.res} />
                        </>
                    ))}
                 
                </Box>
                <LinkNext to='/desafio1'/>
            </BaseWeb>
        </>
    )
}