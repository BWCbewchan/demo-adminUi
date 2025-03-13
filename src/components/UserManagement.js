"use client"

import {
    Add,
    ChevronLeft,
    ChevronRight,
    Close,
    Delete,
    Edit,
    FilterList,
    MoreVert,
    Search,
    Visibility,
} from "@mui/icons-material"
import {
    Avatar,
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuItem as MenuItemMUI,
    Paper,
    Select,
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

// Sample user data based on the provided JSON
const sampleUsers = [
  {
    _id: { $oid: "67d26bb0ea8007f350bec20f" },
    name: "John Doe",
    email: "john.doe@example.com",
    password: "hashed_password",
    phoneNumber: "+1 1234567890",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    role: "customer",
    orders: [],
  },
  {
    _id: { $oid: "67d26bb0ea8007f350bec20e" },
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "hashed_password",
    phoneNumber: "+1 9876543210",
    address: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    role: "customer",
    orders: [],
  },
  {
    _id: { $oid: "67d26bb0ea8007f350bec20d" },
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    password: "hashed_password",
    phoneNumber: "+1 5554443333",
    address: {
      street: "789 Pine Blvd",
      city: "Chicago",
      state: "IL",
      zip: "60007",
    },
    role: "admin",
    orders: [],
  },
  {
    _id: { $oid: "67d26bb0ea8007f350bec20c" },
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "hashed_password",
    phoneNumber: "+1 3332221111",
    address: {
      street: "321 Maple Dr",
      city: "Houston",
      state: "TX",
      zip: "77001",
    },
    role: "customer",
    orders: [],
  },
]

function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuUser, setMenuUser] = useState(null)

  const filteredUsers = sampleUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role === roleFilter

    return matchesSearch && matchesRole
  })

  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  })

  const handleEditUser = (user) => {
    setEditForm({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      street: user.address.street,
      city: user.address.city,
      state: user.address.state,
      zip: user.address.zip,
    })
    setSelectedUser(user)
    setIsEditDialogOpen(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditForm({
      ...editForm,
      [name]: value,
    })
  }

  const handleSaveUser = () => {
    console.log("Saving user:", editForm)
    setIsEditDialogOpen(false)
    // Here you would typically update the user in your database
  }

  const handleMenuOpen = (event, user) => {
    setAnchorEl(event.currentTarget)
    setMenuUser(user)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setMenuUser(null)
  }

  const handleViewDetails = () => {
    setSelectedUser(menuUser)
    handleMenuClose()
  }

  const handleEditFromMenu = () => {
    handleEditUser(menuUser)
    handleMenuClose()
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return { bgcolor: "rgba(156, 39, 176, 0.1)", color: "#9c27b0" }
      case "customer":
        return { bgcolor: "rgba(33, 150, 243, 0.1)", color: "#2196f3" }
      default:
        return { bgcolor: "rgba(158, 158, 158, 0.1)", color: "#9e9e9e" }
    }
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
          Users /{" "}
          <Typography component="span" color="primary">
            User Management
          </Typography>
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder="Search anything here..."
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
            Users
          </Typography>
          <Typography variant="body2" sx={{ mx: 1 }}>
            /
          </Typography>
          <Typography variant="body2" color="primary">
            User Management
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
          <Typography variant="h6" fontWeight="medium">
            Users
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
            placeholder="Search users..."
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
            <InputLabel>Filter by role</InputLabel>
            <Select
              value={roleFilter}
              label="Filter by role"
              onChange={(e) => setRoleFilter(e.target.value)}
              startAdornment={<FilterList fontSize="small" sx={{ mr: 1 }} />}
            >
              <MenuItem value="all">All Roles</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="customer">Customer</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" startIcon={<Add />}>
          Add New User
        </Button>
      </Box>

      {/* Users Table */}
      <Box sx={{ p: 2, flexGrow: 1, overflow: "auto" }}>
        <TableContainer component={Paper} sx={{ bgcolor: "background.paper" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "text.secondary" }}>User</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>Email</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>Phone</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>Location</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>Role</TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user._id.$oid} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar sx={{ bgcolor: "rgba(236, 72, 153, 0.1)", color: "#ec4899" }}>
                        {getInitials(user.name)}
                      </Avatar>
                      <Typography>{user.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>
                    {user.address.city}, {user.address.state}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      size="small"
                      sx={{
                        bgcolor: getRoleColor(user.role).bgcolor,
                        color: getRoleColor(user.role).color,
                        borderRadius: "4px",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={(e) => handleMenuOpen(e, user)}>
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
          <MenuItemMUI onClick={handleViewDetails}>
            <ListItemIcon>
              <Visibility fontSize="small" />
            </ListItemIcon>
            <ListItemText>View Details</ListItemText>
          </MenuItemMUI>
          <MenuItemMUI onClick={handleEditFromMenu}>
            <ListItemIcon>
              <Edit fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit User</ListItemText>
          </MenuItemMUI>
          <Divider />
          <MenuItemMUI sx={{ color: "error.main" }}>
            <ListItemIcon sx={{ color: "error.main" }}>
              <Delete fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete User</ListItemText>
          </MenuItemMUI>
        </Menu>
      </Box>

      {/* User Details Dialog */}
      {selectedUser && !isEditDialogOpen && (
        <Dialog
          open={!!selectedUser && !isEditDialogOpen}
          onClose={() => setSelectedUser(null)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              bgcolor: "background.paper",
              backgroundImage: "none",
            },
          }}
        >
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">User Details</Typography>
            <IconButton onClick={() => setSelectedUser(null)} size="small">
              <Close fontSize="small" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 2 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "rgba(236, 72, 153, 0.1)",
                  color: "#ec4899",
                  fontSize: 32,
                  mb: 2,
                }}
              >
                {getInitials(selectedUser.name)}
              </Avatar>
              <Typography variant="h6">{selectedUser.name}</Typography>
              <Chip
                label={selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.slice(1)}
                size="small"
                sx={{
                  mt: 1,
                  bgcolor: getRoleColor(selectedUser.role).bgcolor,
                  color: getRoleColor(selectedUser.role).color,
                  borderRadius: "4px",
                }}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="body1" sx={{ mt: 0.5 }}>
                  {selectedUser.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Phone Number
                </Typography>
                <Typography variant="body1" sx={{ mt: 0.5 }}>
                  {selectedUser.phoneNumber}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  Address
                </Typography>
                <Typography variant="body1" sx={{ mt: 0.5 }}>
                  {selectedUser.address.street}
                  <br />
                  {selectedUser.address.city}, {selectedUser.address.state} {selectedUser.address.zip}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button variant="outlined" onClick={() => setSelectedUser(null)}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setSelectedUser(null)
                handleEditUser(selectedUser)
              }}
            >
              Edit User
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Edit User Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">Edit User</Typography>
          <IconButton onClick={() => setIsEditDialogOpen(false)} size="small">
            <Close fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 0 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={editForm.name}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Role</InputLabel>
                <Select value={editForm.role} label="Role" name="role" onChange={handleInputChange}>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={editForm.email}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={editForm.phoneNumber}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Street Address"
                name="street"
                value={editForm.street}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={editForm.city}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={editForm.state}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="ZIP Code"
                name="zip"
                value={editForm.zip}
                onChange={handleInputChange}
                margin="normal"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button variant="outlined" onClick={() => setIsEditDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default UserManagement

