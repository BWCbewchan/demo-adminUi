import {
    Delete,
    Edit,
    FilterList,
    MoreVert,
    Search,
    Visibility,
} from "@mui/icons-material"
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"

// Sample data - replace with actual data from your backend
const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/50",
    category: "Electronics",
    price: 999.99,
    stock: 50,
    status: "active",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/50",
    category: "Clothing",
    price: 59.99,
    stock: 100,
    status: "inactive",
  },
  // Add more sample products as needed
]

function ProductList() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleMenuOpen = (event, product) => {
    setAnchorEl(event.currentTarget)
    setSelectedProduct(product)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedProduct(null)
  }

  const handleView = () => {
    // Implement view functionality
    handleMenuClose()
  }

  const handleEdit = () => {
    // Implement edit functionality
    handleMenuClose()
  }

  const handleDelete = () => {
    // Implement delete functionality
    handleMenuClose()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "success"
      case "inactive":
        return "error"
      default:
        return "default"
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {t("productList")}
        </Typography>
        <Button
          variant="contained"
          startIcon={<FilterList />}
          onClick={() => {
            // Implement filter functionality
          }}
        >
          {t("filter")}
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder={t("searchProducts")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("product")}</TableCell>
              <TableCell>{t("category")}</TableCell>
              <TableCell align="right">{t("price")}</TableCell>
              <TableCell align="right">{t("stock")}</TableCell>
              <TableCell>{t("status")}</TableCell>
              <TableCell align="right">{t("actions")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                    <Typography>{product.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell align="right">
                  {formatCurrency(product.price)}
                </TableCell>
                <TableCell align="right">{product.stock}</TableCell>
                <TableCell>
                  <Chip
                    label={t(product.status)}
                    color={getStatusColor(product.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    size="small"
                    onClick={(e) => handleMenuOpen(e, product)}
                  >
                    <MoreVert />
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
      >
        <MenuItem onClick={handleView}>
          <Visibility sx={{ mr: 1 }} fontSize="small" />
          {t("view")}
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <Edit sx={{ mr: 1 }} fontSize="small" />
          {t("edit")}
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <Delete sx={{ mr: 1 }} fontSize="small" />
          {t("delete")}
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ProductList 