"use client"

import {
  Add,
  ArrowBack,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  Delete,
  FileCopy,
  Search,
  Visibility,
} from "@mui/icons-material"
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { useTranslation } from 'react-i18next'

function ProductForm({ onCancel }) {
  const { t } = useTranslation()
  const [product, setProduct] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: 0,
    discount: 0,
    image: "",
    new: true,
    color: "",
    stock: 0,
    rating: 0,
    reviews: 0,
    specifications: {
      cpu: "",
      ram: "",
      storage: "",
      display: "",
      battery: "",
      camera: "",
      os: "",
      ports: [""],
      graphicsCard: "",
      weight: ""
    },
    specialFeatures: [""],
    warranty: "",
    support: "",
    detailedReviews: {
      "1star": 0,
      "2star": 0,
      "3star": 0,
      "4star": 0,
      "5star": 0,
    },
    additionalImages: [""],
    videoIntroduction: "",
  })

  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleNestedChange = (category, field, value) => {
    setProduct({
      ...product,
      [category]: {
        ...product[category],
        [field]: value,
      },
    })
  }

  const handleArrayChange = (field, index, value) => {
    if (field === "ports") {
      const newPorts = [...product.specifications.ports]
      newPorts[index] = value
      setProduct({
        ...product,
        specifications: {
          ...product.specifications,
          ports: newPorts,
        },
      })
    } else if (field === "specialFeatures") {
      const newFeatures = [...product.specialFeatures]
      newFeatures[index] = value
      setProduct({
        ...product,
        specialFeatures: newFeatures,
      })
    } else if (field === "additionalImages") {
      const newImages = [...product.additionalImages]
      newImages[index] = value
      setProduct({
        ...product,
        additionalImages: newImages,
      })
    }
  }

  const addArrayItem = (field) => {
    if (field === "ports") {
      setProduct({
        ...product,
        specifications: {
          ...product.specifications,
          ports: [...product.specifications.ports, ""],
        },
      })
    } else if (field === "specialFeatures") {
      setProduct({
        ...product,
        specialFeatures: [...product.specialFeatures, ""],
      })
    } else if (field === "additionalImages") {
      setProduct({
        ...product,
        additionalImages: [...product.additionalImages, ""],
      })
    }
  }

  const removeArrayItem = (field, index) => {
    if (field === "ports") {
      const newPorts = [...product.specifications.ports]
      newPorts.splice(index, 1)
      setProduct({
        ...product,
        specifications: {
          ...product.specifications,
          ports: newPorts,
        },
      })
    } else if (field === "specialFeatures") {
      const newFeatures = [...product.specialFeatures]
      newFeatures.splice(index, 1)
      setProduct({
        ...product,
        specialFeatures: newFeatures,
      })
    } else if (field === "additionalImages") {
      const newImages = [...product.additionalImages]
      newImages.splice(index, 1)
      setProduct({
        ...product,
        additionalImages: newImages,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(product)
    alert("Product submitted successfully!")
    onCancel()
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
            {t('addProducts')}
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
            {t('products')}
          </Typography>
          <Typography variant="body2" sx={{ mx: 1 }}>
            /
          </Typography>
          <Typography variant="body2" color="primary">
            {t('addProducts')}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button startIcon={<ArrowBack />} variant="outlined" onClick={onCancel}>
              {t('backToProducts')}
            </Button>
            <Typography variant="h6" fontWeight="medium">
              {t('addNewProduct')}
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

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            startIcon={<FileCopy />}
            variant="text"
            color="inherit"
            sx={{ color: "text.disabled", textTransform: "none" }}
          >
            {t('duplicate')}
          </Button>
          <Button
            startIcon={<Visibility />}
            variant="text"
            color="inherit"
            sx={{ color: "text.disabled", textTransform: "none" }}
          >
            {t('preview')}
          </Button>
        </Box>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, flexGrow: 1, overflow: "auto" }}>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="product tabs">
                <Tab label={t('basicInfo')} />
                <Tab label={t('specifications')} />
                <Tab label={t('media')} />
                <Tab label={t('reviews')} />
              </Tabs>
            </Box>

            {/* Basic Info Tab */}
            {tabValue === 0 && (
              <Box>
                <Paper sx={{ p: 3, mb: 3, bgcolor: "background.paper" }}>
                  <Typography variant="h6" gutterBottom>
                    {t('productInfo')}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('name')}
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('brand')}
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label={t('description')}
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('color')}
                        name="color"
                        value={product.color}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('stock')}
                        name="stock"
                        type="number"
                        value={product.stock}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('warranty')}
                        name="warranty"
                        value={product.warranty}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label={t('support')}
                        name="support"
                        value={product.support}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={product.new}
                            onChange={(e) => setProduct({ ...product, new: e.target.checked })}
                            name="new"
                            color="primary"
                          />
                        }
                        label={t('markAsNew')}
                      />
                    </Grid>
                  </Grid>
                </Paper>

                <Paper sx={{ p: 3, bgcolor: "background.paper" }}>
                  <Typography variant="h6" gutterBottom>
                    {t('specialFeatures')}
                  </Typography>
                  <Divider sx={{ mb: 3 }} />

                  <Box sx={{ mb: 2 }}>
                    {product.specialFeatures.map((feature, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <TextField
                          fullWidth
                          label={`Feature ${index + 1}`}
                          value={feature}
                          onChange={(e) => handleArrayChange("specialFeatures", index, e.target.value)}
                          variant="outlined"
                          margin="dense"
                        />
                        <IconButton
                          color="error"
                          onClick={() => removeArrayItem("specialFeatures", index)}
                          disabled={product.specialFeatures.length <= 1}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    ))}
                    <Button
                      startIcon={<Add />}
                      variant="outlined"
                      onClick={() => addArrayItem("specialFeatures")}
                      sx={{ mt: 1 }}
                    >
                      {t('addFeature')}
                    </Button>
                  </Box>
                </Paper>
              </Box>
            )}

            {/* Specifications Tab */}
            {tabValue === 1 && (
              <Paper sx={{ p: 3, bgcolor: "background.paper" }}>
                <Typography variant="h6" gutterBottom>
                  {t('technicalSpecs')}
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CPU"
                      value={product.specifications.cpu}
                      onChange={(e) => handleNestedChange("specifications", "cpu", e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="RAM"
                      value={product.specifications.ram}
                      onChange={(e) => handleNestedChange("specifications", "ram", e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Storage"
                      value={product.specifications.storage}
                      onChange={(e) => handleNestedChange("specifications", "storage", e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Graphics Card"
                      value={product.specifications.graphicsCard}
                      onChange={(e) => handleNestedChange("specifications", "graphicsCard", e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Operating System"
                      value={product.specifications.os}
                      onChange={(e) => handleNestedChange("specifications", "os", e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Weight"
                      value={product.specifications.weight}
                      onChange={(e) => handleNestedChange("specifications", "weight", e.target.value)}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                </Grid>

                <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
                  Ports
                </Typography>
                <Box>
                  {product.specifications.ports?.map((port, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <TextField
                        fullWidth
                        label={`Port ${index + 1}`}
                        value={port}
                        onChange={(e) => handleArrayChange("ports", index, e.target.value)}
                        variant="outlined"
                        margin="dense"
                      />
                      <IconButton
                        color="error"
                        onClick={() => removeArrayItem("ports", index)}
                        disabled={product.specifications.ports.length <= 1}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    startIcon={<Add />}
                    variant="outlined"
                    onClick={() => addArrayItem("ports")}
                    sx={{ mt: 1 }}
                  >
                    Add Port
                  </Button>
                </Box>
              </Paper>
            )}

            {/* Media Tab */}
            {tabValue === 2 && (
              <Paper sx={{ p: 3, bgcolor: "background.paper" }}>
                <Typography variant="h6" gutterBottom>
                  Media
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <TextField
                  fullWidth
                  label="Main Image URL"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                />

                <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
                  Additional Images
                </Typography>
                <Box>
                  {product.additionalImages.map((image, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <TextField
                        fullWidth
                        label={`Image URL ${index + 1}`}
                        value={image}
                        onChange={(e) => handleArrayChange("additionalImages", index, e.target.value)}
                        variant="outlined"
                        margin="dense"
                      />
                      <IconButton
                        color="error"
                        onClick={() => removeArrayItem("additionalImages", index)}
                        disabled={product.additionalImages.length <= 1}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    startIcon={<Add />}
                    variant="outlined"
                    onClick={() => addArrayItem("additionalImages")}
                    sx={{ mt: 1 }}
                  >
                    Add Image
                  </Button>
                </Box>

                <TextField
                  fullWidth
                  label="Video Introduction URL"
                  name="videoIntroduction"
                  value={product.videoIntroduction}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  sx={{ mt: 3 }}
                />

                <Box
                  sx={{
                    border: "2px dashed",
                    borderColor: "divider",
                    borderRadius: 1,
                    p: 6,
                    textAlign: "center",
                    mt: 3,
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CloudUpload sx={{ fontSize: 40, color: "text.disabled", mb: 2 }} />
                    <Typography color="text.secondary" gutterBottom>
                      Drag and drop your file here
                    </Typography>
                    <Button variant="outlined" component="label">
                      Browse File
                      <input type="file" hidden />
                    </Button>
                  </Box>
                </Box>
              </Paper>
            )}

            {/* Reviews Tab */}
            {tabValue === 3 && (
              <Paper sx={{ p: 3, bgcolor: "background.paper" }}>
                <Typography variant="h6" gutterBottom>
                  Reviews Summary
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Overall Rating"
                      name="rating"
                      type="number"
                      inputProps={{ min: 0, max: 5, step: 0.1 }}
                      value={product.rating}
                      onChange={handleChange}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Total Reviews"
                      name="reviews"
                      type="number"
                      value={product.reviews}
                      onChange={handleChange}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                </Grid>

                <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
                  Detailed Reviews Breakdown
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={2.4}>
                    <TextField
                      fullWidth
                      label="1 Star"
                      type="number"
                      value={product.detailedReviews["1star"]}
                      onChange={(e) => handleNestedChange("detailedReviews", "1star", Number.parseInt(e.target.value))}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2.4}>
                    <TextField
                      fullWidth
                      label="2 Star"
                      type="number"
                      value={product.detailedReviews["2star"]}
                      onChange={(e) => handleNestedChange("detailedReviews", "2star", Number.parseInt(e.target.value))}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2.4}>
                    <TextField
                      fullWidth
                      label="3 Star"
                      type="number"
                      value={product.detailedReviews["3star"]}
                      onChange={(e) => handleNestedChange("detailedReviews", "3star", Number.parseInt(e.target.value))}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2.4}>
                    <TextField
                      fullWidth
                      label="4 Star"
                      type="number"
                      value={product.detailedReviews["4star"]}
                      onChange={(e) => handleNestedChange("detailedReviews", "4star", Number.parseInt(e.target.value))}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6} sm={2.4}>
                    <TextField
                      fullWidth
                      label="5 Star"
                      type="number"
                      value={product.detailedReviews["5star"]}
                      onChange={(e) => handleNestedChange("detailedReviews", "5star", Number.parseInt(e.target.value))}
                      variant="outlined"
                      margin="dense"
                    />
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, mb: 3, bgcolor: "background.paper" }}>
              <Typography variant="h6" gutterBottom>
                {t('pricing')}
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <TextField
                fullWidth
                label={t('price')}
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />

              <TextField
                fullWidth
                label="Discount (%)"
                name="discount"
                type="number"
                value={product.discount}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "warning.main", mt: 2 }}>
                <CloudUpload fontSize="small" />
                <Typography variant="body2">Set "Compare to" Price</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "warning.main", mt: 1 }}>
                <CloudUpload fontSize="small" />
                <Typography variant="body2">Bulk discount pricing</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Availability:
                </Typography>
                <Typography variant="body2">Yes</Typography>
              </Box>
            </Paper>

            <Paper sx={{ p: 3, mb: 3, bgcolor: "background.paper" }}>
              <Typography variant="h6" gutterBottom>
                Organization
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <TextField
                fullWidth
                label="Vendor"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  value={product.category}
                  label="Category"
                  onChange={(e) => setProduct({ ...product, category: e.target.value })}
                >
                  <MenuItem value="Custom Builds">Custom Builds</MenuItem>
                  <MenuItem value="Laptops">Laptops</MenuItem>
                  <MenuItem value="Desktops">Desktops</MenuItem>
                  <MenuItem value="Components">Components</MenuItem>
                  <MenuItem value="Accessories">Accessories</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Collection</InputLabel>
                <Select defaultValue="">
                  <MenuItem value="gaming">Gaming</MenuItem>
                  <MenuItem value="office">Office</MenuItem>
                  <MenuItem value="premium">Premium</MenuItem>
                  <MenuItem value="budget">Budget</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                Add this product to a collection so it easy to find in your store
              </Typography>

              <TextField fullWidth label="Tags" placeholder="Enter tags here" variant="outlined" margin="normal" />
            </Paper>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Button variant="outlined" onClick={onCancel}>
                {t('cancel')}
              </Button>
              <Button type="submit" variant="contained" color="primary" size="large">
                {t('save')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ProductForm

