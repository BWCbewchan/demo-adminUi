"use client"

import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Tabs, Tab, Box } from "@mui/material"
import ProductForm from "./components/ProductForm"
import OrderManagement from "./components/OrderManagement"
import UserManagement from "./components/UserManagement"

// Tạo theme tối
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ec4899",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    divider: "#333",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
})

function App() {
  const [tabValue, setTabValue] = React.useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="admin tabs"
            sx={{
              "& .MuiTab-root": {
                py: 2,
                minHeight: "48px",
                "&.Mui-selected": {
                  color: "primary.main",
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                },
              },
            }}
          >
            <Tab label="Products" />
            <Tab label="Orders" />
            <Tab label="Users" />
          </Tabs>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          {tabValue === 0 && <ProductForm />}
          {tabValue === 1 && <OrderManagement />}
          {tabValue === 2 && <UserManagement />}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App

