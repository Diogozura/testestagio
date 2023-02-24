import { theme } from "@/styles/theme";
import { Box, Typography } from "@mui/material";

export default function BoxResposta({pergunta, resposta, children}:any) {
    return (
        <>
             <Box mb={5}>
                  <Typography   variant="h5" component="h3" fontWeight={500} color={theme.colors.laranja}>
                      {pergunta}
                </Typography>
                <Box bgcolor={theme.colors.laranja} padding={3} borderRadius={3} textAlign={'center'}>
                    <Typography  variant="h6" component="p" fontWeight={500} color={theme.colors.claro} >
                        {resposta}
                    </Typography>
                </Box>
              </Box>
        </>
    )
}