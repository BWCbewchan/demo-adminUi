"use client"

import {
  Add,
  ChevronLeft,
  ChevronRight,
  ContentCopy,
  Delete,
  Edit,
  FilterList,
  Inventory2,
  MoreVert,
  Search,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

// Sample product data
const sampleProducts = [
  {
    id: "prod001",
    name: "CyberPowerPC Xtreme VR",
    brand: "CyberPowerPC",
    category: "Custom Builds",
    price: 1499.99,
    discount: 10,
    stock: 25,
    status: "active",
    rating: 4.5,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "prod002",
    name: "Gaming Mouse Pro",
    brand: "Logitech",
    category: "Accessories",
    price: 79.99,
    discount: 0,
    stock: 120,
    status: "active",
    rating: 4.8,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "prod003",
    name: "Mechanical Keyboard RGB",
    brand: "Corsair",
    category: "Accessories",
    price: 129.99,
    discount: 15,
    stock: 45,
    status: "active",
    rating: 4.7,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "prod004",
    name: "4K Gaming Monitor",
    brand: "ASUS",
    category: "Monitors",
    price: 699.99,
    discount: 5,
    stock: 18,
    status: "active",
    rating: 4.6,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "prod005",
    name: "Wireless Headset",
    brand: "SteelSeries",
    category: "Accessories",
    price: 149.99,
    discount: 0,
    stock: 0,
    status: "out_of_stock",
    rating: 4.4,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "prod006",
    name: "Gaming Laptop Pro",
    brand: "MSI",
    category: "Laptops",
    price: 1899.99,
    discount: 8,
    stock: 12,
    status: "active",
    rating: 4.3,
    image: "https://via.placeholder.com/100",
  },
  {
    id: "prod007",
    name: "RGB Gaming Chair",
    brand: "DXRacer",
    category: "Accessories",
    price: 349.99,
    discount: 0,
    stock: 7,
    status: "active",
    rating: 4.2,
    image: "https://via.placeholder.com/100",
  },
]

function ProductList({ onAddProduct }) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    const matchesStatus = statusFilter === "all" || product.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleMenuOpen = (event, product) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
    setSelectedProduct(product)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedProduct(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return { bgcolor: "rgba(76, 175, 80, 0.1)", color: "#4caf50" }
      case "out_of_stock":
        return { bgcolor: "rgba(244, 67, 54, 0.1)", color: "#f44336" }
      case "discontinued":
        return { bgcolor: "rgba(158, 158, 158, 0.1)", color: "#9e9e9e" }
      default:
        return { bgcolor: "rgba(33, 150, 243, 0.1)", color: "#2196f3" }
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case "active":
        return "Active"
      case "out_of_stock":
        return "Out of Stock"
      case "discontinued":
        return "Discontinued"
      default:
        return status.charAt(0).toUpperCase() + status.slice(1)
    }
  }

  const calculateFinalPrice = (price, discount) => {
    if (discount === 0) return price.toFixed(2)
    const discountedPrice = price - (price * discount) / 100
    return discountedPrice.toFixed(2)
  }

  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight="medium">
          {t('ecommerce')} /{" "}
          <Typography component="span" color="primary">
            {t('products')}
          </Typography>
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder={t('searchProducts')}
            variant="outlined"
            size="small"
            sx={{
              width: 256,
              "& .MuiOutlinedInput-root": {
                bgcolor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 1,
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search sx={{ color: "text.disabled" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      {/* Breadcrumb */}
      <Box sx={{ borderBottom: "1px solid", borderColor: "divider", p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: 14, color: "text.disabled" }}>
          <Typography variant="body2" color="text.disabled">
            {t('ecommerce')}
          </Typography>
          <Typography variant="body2" sx={{ mx: 1 }}>
            /
          </Typography>
          <Typography variant="body2" color="primary">
            {t('products')}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Inventory2 color="primary" />
            <Typography variant="h6" fontWeight="medium">
              {t('productList')}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton size="small">
              <ChevronLeft />
            </IconButton>
            <IconButton size="small">
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ p: 2, display: "flex", gap: 2 }}>
        <Card sx={{ flex: 1, bgcolor: "background.paper" }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {t('totalProducts')}
            </Typography>
            <Typography variant="h4">{sampleProducts.length}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, bgcolor: "background.paper" }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {t('activeProducts')}
            </Typography>
            <Typography variant="h4">{sampleProducts.filter((p) => p.status === "active").length}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, bgcolor: "background.paper" }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {t('outOfStock')}
            </Typography>
            <Typography variant="h4">{sampleProducts.filter((p) => p.status === "out_of_stock").length}</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Filters */}
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            placeholder={t('searchProducts')}
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: 240,
              "& .MuiOutlinedInput-root": {
                bgcolor: "rgba(255, 255, 255, 0.05)",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>{t('category')}</InputLabel>
            <Select
              value={categoryFilter}
              label={t('category')}
              onChange={(e) => setCategoryFilter(e.target.value)}
              startAdornment={<FilterList fontSize="small" sx={{ mr: 1 }} />}
            >
              <MenuItem value="all">{t('allCategories')}</MenuItem>
              <MenuItem value="Custom Builds">{t('customBuilds')}</MenuItem>
              <MenuItem value="Laptops">{t('laptops')}</MenuItem>
              <MenuItem value="Accessories">{t('accessories')}</MenuItem>
              <MenuItem value="Monitors">{t('monitors')}</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 160 }}>
            <InputLabel>{t('status')}</InputLabel>
            <Select value={statusFilter} label={t('status')} onChange={(e) => setStatusFilter(e.target.value)}>
              <MenuItem value="all">{t('allStatuses')}</MenuItem>
              <MenuItem value="active">{t('active')}</MenuItem>
              <MenuItem value="out_of_stock">{t('outOfStock')}</MenuItem>
              <MenuItem value="discontinued">{t('discontinued')}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Tooltip title={t('addNewProductTooltip')}>
          <Button variant="contained" color="primary" startIcon={<Add />} onClick={onAddProduct} size="large">
            {t('addNewProduct')}
          </Button>
        </Tooltip>
      </Box>

      {/* Products Table */}
      <Box sx={{ p: 2, flexGrow: 1, overflow: "auto" }}>
        <TableContainer component={Paper} sx={{ bgcolor: "background.paper" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "text.secondary" }}>{t('product')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('category')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('price')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('stock')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('status')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('rating')}</TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {t('actions')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        sx={{ width: 40, height: 40, borderRadius: 1 }}
                      />
                      <Box>
                        <Typography variant="body1">{product.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.brand}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    {product.discount > 0 ? (
                      <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
                          ${product.price.toFixed(2)}
                        </Typography>
                        <Typography variant="body1" color="primary">
                          ${calculateFinalPrice(product.price, product.discount)}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography variant="body1">${product.price.toFixed(2)}</Typography>
                    )}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Chip
                      label={getStatusLabel(product.status)}
                      size="small"
                      sx={{
                        bgcolor: getStatusColor(product.status).bgcolor,
                        color: getStatusColor(product.status).color,
                        borderRadius: "4px",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="body2">{product.rating}</Typography>
                      <Box
                        component="span"
                        sx={{ color: "warning.main", ml: 0.5, display: "flex", alignItems: "center" }}
                      >
                        ★
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={(e) => handleMenuOpen(e, product)}>
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              bgcolor: "background.paper",
              width: 200,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <Visibility fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('viewDetails')}</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose()
              onAddProduct() // Temporarily using Add Product form for edit
            }}
          >
            <ListItemIcon>
              <Edit fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('editProduct')}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('duplicate')}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>
            <ListItemIcon sx={{ color: "error.main" }}>
              <Delete fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t('deleteProduct')}</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default ProductList

