"use client"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import BarChartIcon from "@mui/icons-material/BarChart"
import HomeIcon from "@mui/icons-material/Home"
import InventoryIcon from "@mui/icons-material/Inventory"
import PeopleIcon from "@mui/icons-material/People"
import PersonIcon from "@mui/icons-material/Person"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

function Sidebar({ activePage, onPageChange }) {
  const menuItems = [
    { id: "home", label: "Dashboard", icon: HomeIcon },
    { id: "analytics", label: "Analytics", icon: BarChartIcon },
    { id: "users", label: "Users", icon: PeopleIcon },
    { id: "profile", label: "User Profile", icon: PersonIcon },
    { id: "account", label: "Account", icon: AccountCircleIcon },
    {
      id: "products",
      label: "Products",
      icon: InventoryIcon,
      description: "Manage product catalog",
    },
    {
      id: "orders",
      label: "Orders",
      icon: ShoppingCartIcon,
      description: "Manage customer orders",
    },
  ]

  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid",
        borderColor: "divider",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            bgcolor: "rgba(236, 72, 153, 0.1)",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Box sx={{ width: 24, height: 24, color: "#ec4899" }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="18" r="3" />
            </svg>
          </Box>
        </Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, px: 1 }}>
          ADMIN PANEL
        </Typography>
      </Box>

      <List sx={{ width: "100%", p: 0 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            button
            selected={activePage === item.id}
            onClick={() => onPageChange(item.id)}
            sx={{
              mb: 0.5,
              borderRadius: 1,
              bgcolor: activePage === item.id ? "rgba(236, 72, 153, 0.1)" : "transparent",
              color: activePage === item.id ? "#ec4899" : "text.secondary",
              "&:hover": {
                bgcolor: activePage === item.id ? "rgba(236, 72, 153, 0.1)" : "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: activePage === item.id ? "#ec4899" : "text.disabled",
              }}
            >
              <item.icon />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              secondary={item.description}
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: activePage === item.id ? "medium" : "normal",
              }}
              secondaryTypographyProps={{
                fontSize: 12,
                sx: { display: { xs: "none", sm: "block" } },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Sidebar

