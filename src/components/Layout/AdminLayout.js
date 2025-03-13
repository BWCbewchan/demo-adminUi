import {
    AccountCircle,
    Add,
    Dashboard,
    ExpandLess,
    ExpandMore,
    Inventory,
    Language,
    List as ListIcon,
    LocalShipping,
    Menu as MenuIcon,
    Notifications,
    People,
    Settings,
    ShoppingCart,
} from "@mui/icons-material"
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Collapse,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"

const DRAWER_WIDTH = 280

function AdminLayout({ children }) {
  const theme = useTheme()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openProducts, setOpenProducts] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en"
    i18n.changeLanguage(newLang)
  }

  const handleNavigate = (path) => {
    navigate(path)
    setMobileOpen(false)
  }

  const handleProductsClick = () => {
    setOpenProducts(!openProducts)
  }

  const menuItems = [
    { text: t("dashboard"), icon: <Dashboard />, path: "/dashboard" },
    {
      text: t("products"),
      icon: <Inventory />,
      hasSubmenu: true,
      submenu: [
        { text: t("productList"), icon: <ListIcon />, path: "/products/list" },
        { text: t("addProducts"), icon: <Add />, path: "/products/add" },
      ],
    },
    { text: t("orders"), icon: <ShoppingCart />, path: "/orders" },
    { text: t("users"), icon: <People />, path: "/users" },
    { text: t("shipping"), icon: <LocalShipping />, path: "/shipping" },
  ]

  const drawer = (
    <Box>
      <Box 
        sx={{ 
          p: 2, 
          borderBottom: `1px solid ${theme.palette.divider}`,
          cursor: 'pointer'
        }}
        onClick={() => handleNavigate('/dashboard')}
      >
        <Typography variant="h6" color="primary" fontWeight="bold">
          {t("adminPanel")}
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          item.hasSubmenu ? (
            <Box key={item.text}>
              <ListItem
                button
                onClick={handleProductsClick}
                sx={{
                  bgcolor: location.pathname.includes('/products') ? "rgba(236, 72, 153, 0.08)" : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(236, 72, 153, 0.08)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname.includes('/products') ? "primary.main" : "inherit"
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: location.pathname.includes('/products') ? "primary.main" : "inherit"
                  }}
                />
                {openProducts ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openProducts} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.text}
                      onClick={() => handleNavigate(subItem.path)}
                      sx={{
                        pl: 4,
                        bgcolor: location.pathname === subItem.path ? "rgba(236, 72, 153, 0.08)" : "transparent",
                        "&:hover": {
                          bgcolor: "rgba(236, 72, 153, 0.08)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: location.pathname === subItem.path ? "primary.main" : "inherit"
                        }}
                      >
                        {subItem.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={subItem.text}
                        sx={{
                          color: location.pathname === subItem.path ? "primary.main" : "inherit"
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigate(item.path)}
              sx={{
                bgcolor: location.pathname === item.path ? "rgba(236, 72, 153, 0.08)" : "transparent",
                "&:hover": {
                  bgcolor: "rgba(236, 72, 153, 0.08)",
                },
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: location.pathname === item.path ? "primary.main" : "inherit" 
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{
                  color: location.pathname === item.path ? "primary.main" : "inherit"
                }}
              />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  )

  const handleProfile = () => {
    handleMenuClose()
    navigate('/profile')
  }

  const handleSettings = () => {
    handleMenuClose()
    navigate('/settings')
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: "background.paper",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit" onClick={toggleLanguage}>
              <Language />
            </IconButton>
            
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={handleSettings}>
              <Settings />
            </IconButton>

            <IconButton onClick={handleProfileMenuOpen} color="inherit">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "primary.main",
                }}
              >
                A
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              bgcolor: "background.paper",
              borderRight: `1px solid ${theme.palette.divider}`,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
              bgcolor: "background.paper",
              borderRight: `1px solid ${theme.palette.divider}`,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Toolbar />
        {children}
      </Box>

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
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("profile")} />
        </MenuItem>
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={t("settings")} />
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default AdminLayout