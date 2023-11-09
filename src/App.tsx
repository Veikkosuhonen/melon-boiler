import { ThemeProvider, } from "@emotion/react"
import { CssBaseline, Box, Typography, Paper, Button, Chip } from "@mui/material"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#180309',
    },
    text: {
      primary: 'rgba(255,220,230,0.9)',
      secondary: 'rgba(255,220,230,0.7)',
      disabled: 'rgba(255,220,230,0.5)',
    },
  },
})

export const App = () => {

    return (
        
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box display="flex" flexDirection="column" height="100vh">
                    <Box mb="auto" p="2rem">
                        <Box display="flex" width="100%" justifyContent="end" mb="2rem">
                            <Box>
                                <Typography variant="h5" component="h1" gutterBottom>MelonJS + React test</Typography>
                                <Typography gutterBottom>Use arrow keys to move the character</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" width="100%" justifyContent="end">
                            <Box width="20rem">
                                <Typography gutterBottom>The template has some nice but opinionated things set up, including...</Typography>
                                <Box display="flex" flexWrap="wrap" rowGap="0.5rem" columnGap="0.3rem" mb="1rem">
                                    <Chip label="React"/>
                                    <Chip label="Typescript"/>
                                    <Chip label="Vite"/>
                                    <Chip label="Material UI"/>
                                    <Chip label="Github pages"/>
                                    <Chip label="ESLint"/>
                                </Box>
                                <Typography gutterBottom>And for the game development side:</Typography>
                                <Box display="flex" flexWrap="wrap" rowGap="0.5rem" columnGap="0.3rem">
                                    <Chip label="MelonJS"/>
                                    <Chip label="Tiled map format"/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box p="1rem">
                        <Paper sx={{ p: "1rem" }}>
                            <Typography variant="body1" component="p" gutterBottom>See the source in <Button variant="contained" href="https://github.com/Veikkosuhonen/melon-test">Github</Button></Typography>
                        </Paper>
                    </Box>
                </Box>
            </CssBaseline>
        </ThemeProvider>
        
    )
}