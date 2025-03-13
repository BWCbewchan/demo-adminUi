"use client"

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import AdminLayout from "./components/Layout/AdminLayout"
import OrderManagement from "./components/OrderManagement"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/Products/ProductList"
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
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AdminLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/list" element={<ProductList />} />
            <Route path="/products/add" element={<ProductForm />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/users" element={<UserManagement />} />
          </Routes>
        </AdminLayout>
      </ThemeProvider>
    </Router>
  )
}

export default App

