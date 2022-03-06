import { Typography, Box } from "@mui/material"

export const Footer = () => {
  return (
    <footer>
      <Box bgcolor="text.secondary" p={2} mt={4} color="white" >
        <Typography align="center" variant="body2" >
          Copyright &copy; 2022, Buttercrust. All Rights Reserved
        </Typography>
      </Box>
    </footer>
  )
}