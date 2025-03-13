"use client"

import { Box, Button, Tab, Tabs } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import React from "react"
import { useTranslation } from 'react-i18next'
import OrderManagement from "./components/OrderManagement"
import ProductForm from "./components/ProductForm"
import UserManagement from "./components/UserManagement"
import './i18n'

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
  const { t, i18n } = useTranslation()

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <Button onClick={toggleLanguage} color="primary">
            {i18n.language === 'en' ? 'Tiếng Việt' : 'English'}
          </Button>
        </Box>
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
            <Tab label={t('products')} />
            <Tab label={t('orders')} />
            <Tab label={t('users')} />
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

