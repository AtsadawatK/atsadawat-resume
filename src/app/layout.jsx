import { Itim } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "@/theme";
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "@/navbar";
import { Box } from "@mui/material";
const itim = Itim
({ weight: '400',
subsets: ['latin'],
display: 'swap',});

export const metadata = {
  title: "Atsadawat Curriculum Vitae",
  description: 'Profolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={itim.className} style={{margin:0}}> <AppRouterCacheProvider options={{ key: 'css' }}><ThemeProvider theme={theme}>
      <Navbar /><Box sx={{pt:{xs:"50px",md:"60px",lg:"80px"}}}>{children} </Box></ThemeProvider></AppRouterCacheProvider></body>
    </html>
  );
}
