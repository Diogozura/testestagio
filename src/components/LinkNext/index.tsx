import { theme } from "@/styles/theme";
import Box from "@mui/material/Box";
import Link from "next/link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function LinkNext({to, children}:any) {
    return (
        <Box textAlign={'end'} mb={2} alignItems='flex-start'      display='flex'
        justifyContent='flex-end'>
            <Link href={to} style={{color: theme.colors.preto} }>proximo  </Link> <NavigateNextIcon/>
        </Box>
    )
}