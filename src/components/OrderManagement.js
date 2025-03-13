"use client"

import { ChevronLeft, ChevronRight, Close, FilterList, MoreVert, Search } from "@mui/icons-material"
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Typography,
} from "@mui/material"
import { useState } from "react"
import { useTranslation } from 'react-i18next'

// Sample order data based on the provided JSON
const sampleOrders = [
  {
    _id: { $oid: "67d26bb0ea8007f350bec210" },
    userId: { $oid: "67d26bb0ea8007f350bec20f" },
    orderDate: { $date: "2025-03-13T05:31:02.494Z" },
    status: "pending",
    total: { $numberDecimal: "1000" },
    products: [
      {
        productId: { $oid: "507f1f77bcf86cd799439011" },
        quantity: 2,
        price: { $numberDecimal: "500" },
      },
      {
        productId: { $oid: "5f7d8f9e7c6b5a0d8c7e6f5a" },
        quantity: 1,
        price: { $numberDecimal: "500" },
      },
    ],
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    paymentMethod: "credit_card",
    paymentStatus: "paid",
  },
  {
    _id: { $oid: "67d26bb0ea8007f350bec211" },
    userId: { $oid: "67d26bb0ea8007f350bec20f" },
    orderDate: { $date: "2025-03-12T08:45:12.494Z" },
    status: "shipped",
    total: { $numberDecimal: "750" },
    products: [
      {
        productId: { $oid: "507f1f77bcf86cd799439012" },
        quantity: 1,
        price: { $numberDecimal: "750" },
      },
    ],
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
  },
  {
    _id: { $oid: "67d26bb0ea8007f350bec212" },
    userId: { $oid: "67d26bb0ea8007f350bec20f" },
    orderDate: { $date: "2025-03-10T14:22:45.494Z" },
    status: "delivered",
    total: { $numberDecimal: "1250" },
    products: [
      {
        productId: { $oid: "507f1f77bcf86cd799439013" },
        quantity: 1,
        price: { $numberDecimal: "1000" },
      },
      {
        productId: { $oid: "507f1f77bcf86cd799439014" },
        quantity: 1,
        price: { $numberDecimal: "250" },
      },
    ],
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    paymentMethod: "credit_card",
    paymentStatus: "paid",
  },
]

// Sample product data for reference
const productNames = {
  "507f1f77bcf86cd799439011": "CyberPowerPC Xtreme VR",
  "5f7d8f9e7c6b5a0d8c7e6f5a": "Gaming Mouse Pro",
  "507f1f77bcf86cd799439012": "Mechanical Keyboard RGB",
  "507f1f77bcf86cd799439013": "4K Gaming Monitor",
  "507f1f77bcf86cd799439014": "Wireless Headset",
}

function OrderManagement() {
  const { t } = useTranslation()
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [tabValue, setTabValue] = useState(0)

  const filteredOrders = sampleOrders.filter((order) => {
    const matchesSearch = order._id.$oid.includes(searchTerm) || order.userId.$oid.includes(searchTerm)

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return { bgcolor: "rgba(255, 193, 7, 0.1)", color: "#ffc107" }
      case "shipped":
        return { bgcolor: "rgba(33, 150, 243, 0.1)", color: "#2196f3" }
      case "delivered":
        return { bgcolor: "rgba(76, 175, 80, 0.1)", color: "#4caf50" }
      case "cancelled":
        return { bgcolor: "rgba(244, 67, 54, 0.1)", color: "#f44336" }
      default:
        return { bgcolor: "rgba(158, 158, 158, 0.1)", color: "#9e9e9e" }
    }
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
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
            {t('orderManagement')}
          </Typography>
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder={t('searchAnything')}
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
            {t('orderManagement')}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
          <Typography variant="h6" fontWeight="medium">
            {t('orders')}
          </Typography>
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

      {/* Filters */}
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            placeholder={t('searchOrders')}
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
            <InputLabel>{t('filterByStatus')}</InputLabel>
            <Select
              value={statusFilter}
              label={t('filterByStatus')}
              onChange={(e) => setStatusFilter(e.target.value)}
              startAdornment={<FilterList fontSize="small" sx={{ mr: 1 }} />}
            >
              <MenuItem value="all">{t('allStatuses')}</MenuItem>
              <MenuItem value="pending">{t('pending')}</MenuItem>
              <MenuItem value="shipped">{t('shipped')}</MenuItem>
              <MenuItem value="delivered">{t('delivered')}</MenuItem>
              <MenuItem value="cancelled">{t('cancelled')}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary">
          {t('exportOrders')}
        </Button>
      </Box>

      {/* Orders Table */}
      <Box sx={{ p: 2, flexGrow: 1, overflow: "auto" }}>
        <TableContainer component={Paper} sx={{ bgcolor: "background.paper" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "text.secondary" }}>{t('orderId')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('date')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('customer')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('total')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('status')}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{t('payment')}</TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {t('actions')}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order._id.$oid} hover onClick={() => setSelectedOrder(order)} sx={{ cursor: "pointer" }}>
                  <TableCell component="th" scope="row">
                    #{order._id.$oid.slice(-6)}
                  </TableCell>
                  <TableCell>{formatDate(order.orderDate.$date)}</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>${order.total.$numberDecimal}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      size="small"
                      sx={{
                        bgcolor: getStatusColor(order.status).bgcolor,
                        color: getStatusColor(order.status).color,
                        borderRadius: "4px",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                      size="small"
                      sx={{
                        bgcolor: order.paymentStatus === "paid" ? "rgba(76, 175, 80, 0.1)" : "rgba(244, 67, 54, 0.1)",
                        color: order.paymentStatus === "paid" ? "#4caf50" : "#f44336",
                        borderRadius: "4px",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreVert fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog
          open={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: "background.paper",
              backgroundImage: "none",
            },
          }}
        >
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 1 }}>
            <Typography variant="h6">{t('orderDetails')}</Typography>
            <IconButton onClick={() => setSelectedOrder(null)} size="small">
              <Close fontSize="small" />
            </IconButton>
          </DialogTitle>
          <Typography variant="body2" color="text.secondary" sx={{ px: 3 }}>
            Placed on {formatDate(selectedOrder.orderDate.$date)}
          </Typography>

          <Box sx={{ px: 3, pt: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="order details tabs">
              <Tab label={t('orderDetails')} />
              <Tab label={t('customerInfo')} />
              <Tab label={t('shippingPayment')} />
            </Tabs>
          </Box>

          <DialogContent>
            {tabValue === 0 && (
              <>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Chip
                    label={selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    size="small"
                    sx={{
                      bgcolor: getStatusColor(selectedOrder.status).bgcolor,
                      color: getStatusColor(selectedOrder.status).color,
                      borderRadius: "4px",
                    }}
                  />
                  <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel>{t('updateStatus')}</InputLabel>
                    <Select value={selectedOrder.status} label={t('updateStatus')}>
                      <MenuItem value="pending">{t('pending')}</MenuItem>
                      <MenuItem value="processing">{t('processing')}</MenuItem>
                      <MenuItem value="shipped">{t('shipped')}</MenuItem>
                      <MenuItem value="delivered">{t('delivered')}</MenuItem>
                      <MenuItem value="cancelled">{t('cancelled')}</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Paper sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
                    Products
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ color: "text.secondary" }}>Product</TableCell>
                          <TableCell align="right" sx={{ color: "text.secondary" }}>
                            Quantity
                          </TableCell>
                          <TableCell align="right" sx={{ color: "text.secondary" }}>
                            Price
                          </TableCell>
                          <TableCell align="right" sx={{ color: "text.secondary" }}>
                            Total
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {selectedOrder.products.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell>{productNames[product.productId.$oid] || "Product " + (index + 1)}</TableCell>
                            <TableCell align="right">{product.quantity}</TableCell>
                            <TableCell align="right">${product.price.$numberDecimal}</TableCell>
                            <TableCell align="right">
                              ${Number(product.price.$numberDecimal) * product.quantity}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow sx={{ bgcolor: "rgba(0, 0, 0, 0.04)" }}>
                          <TableCell colSpan={3} align="right" sx={{ fontWeight: "bold" }}>
                            Total
                          </TableCell>
                          <TableCell align="right" sx={{ fontWeight: "bold" }}>
                            ${selectedOrder.total.$numberDecimal}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </>
            )}

            {tabValue === 1 && (
              <Paper sx={{ p: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Customer Information
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Name
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      John Doe
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      john.doe@example.com
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Phone Number
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      +1 1234567890
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Customer Since
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                      March 10, 2025
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            )}

            {tabValue === 2 && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 3, height: "100%" }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Shipping Address
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1">John Doe</Typography>
                      <Typography variant="body2">{selectedOrder.shippingAddress.street}</Typography>
                      <Typography variant="body2">
                        {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}{" "}
                        {selectedOrder.shippingAddress.zip}
                      </Typography>
                      <Typography variant="body2">United States</Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper sx={{ p: 3, height: "100%" }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Payment Information
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Payment Method
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 0.5, textTransform: "capitalize" }}>
                        {selectedOrder.paymentMethod.replace("_", " ")}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Payment Status
                      </Typography>
                      <Chip
                        label={
                          selectedOrder.paymentStatus.charAt(0).toUpperCase() + selectedOrder.paymentStatus.slice(1)
                        }
                        size="small"
                        sx={{
                          mt: 0.5,
                          bgcolor:
                            selectedOrder.paymentStatus === "paid"
                              ? "rgba(76, 175, 80, 0.1)"
                              : "rgba(244, 67, 54, 0.1)",
                          color: selectedOrder.paymentStatus === "paid" ? "#4caf50" : "#f44336",
                          borderRadius: "4px",
                        }}
                      />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            )}
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button variant="outlined">{t('printInvoice')}</Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="outlined" onClick={() => setSelectedOrder(null)}>
              {t('close')}
            </Button>
            <Button variant="contained" color="primary">
              {t('updateOrder')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  )
}

export default OrderManagement

