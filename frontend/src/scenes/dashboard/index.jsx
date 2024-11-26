import Header from "../../components/Header"
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";



const Dashboard = () => {
  return (
    <Box mb="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>

      </Box>


    </Box>

  )
}

export default Dashboard