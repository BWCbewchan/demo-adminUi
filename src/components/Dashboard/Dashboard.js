import {
    AttachMoney,
    Inventory,
    People,
    ShoppingCart
} from "@mui/icons-material"
import {
    Box,
    Card,
    CardContent,
    Grid,
    Paper,
    Typography,
    useTheme,
} from "@mui/material"
import { useTranslation } from "react-i18next"
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

// Sample data for charts
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
]

const orderStatusData = [
  { name: "Pending", value: 400 },
  { name: "Processing", value: 300 },
  { name: "Shipped", value: 300 },
  { name: "Delivered", value: 200 },
]

const productCategoryData = [
  { name: "Electronics", count: 120 },
  { name: "Clothing", count: 80 },
  { name: "Books", count: 40 },
  { name: "Home", count: 60 },
]

const revenueData = [
  { name: "Mon", revenue: 2400 },
  { name: "Tue", revenue: 1398 },
  { name: "Wed", revenue: 9800 },
  { name: "Thu", revenue: 3908 },
  { name: "Fri", revenue: 4800 },
  { name: "Sat", revenue: 3800 },
  { name: "Sun", revenue: 4300 },
]

function Dashboard() {
  const theme = useTheme()
  const { t } = useTranslation()

  const statsCards = [
    {
      title: t("totalRevenue"),
      value: "$23,456",
      icon: <AttachMoney />,
      color: "#ec4899",
    },
    {
      title: t("totalOrders"),
      value: "1,234",
      icon: <ShoppingCart />,
      color: "#3b82f6",
    },
    {
      title: t("totalProducts"),
      value: "456",
      icon: <Inventory />,
      color: "#10b981",
    },
    {
      title: t("totalCustomers"),
      value: "789",
      icon: <People />,
      color: "#f59e0b",
    },
  ]

  return (
    <Box>
      {/* Stats Cards */}
      <Grid container spacing={3} mb={3}>
        {statsCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Card
              sx={{
                bgcolor: "background.paper",
                height: "100%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="h4" fontWeight="medium">
                      {card.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: `${card.color}20`,
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Sales Trend */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("salesTrend")}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={theme.palette.primary.main}
                      stopOpacity={0.1}
                    />
                    <stop
                      offset="95%"
                      stopColor={theme.palette.primary.main}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke={theme.palette.primary.main}
                  fillOpacity={1}
                  fill="url(#colorSales)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Order Status */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("orderStatus")}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill={theme.palette.primary.main}
                  paddingAngle={5}
                  dataKey="value"
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Product Categories */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("productCategories")}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productCategoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill={theme.palette.primary.main}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Revenue */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: "100%",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t("weeklyRevenue")}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard 