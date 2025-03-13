import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      adminPanel: 'ADMIN PANEL',
      dashboard: 'Dashboard',
      analytics: 'Analytics',
      users: 'Users',
      userProfile: 'User Profile',
      account: 'Account',
      products: 'Products',
      orders: 'Orders',

      // Product Management
      addProducts: 'Add products',
      productList: 'Product List',
      addNewProduct: 'Add New Product',
      basicInfo: 'Basic Info',
      specifications: 'Specifications',
      media: 'Media',
      reviews: 'Reviews',
      searchProducts: 'Search products...',
      allCategories: 'All Categories',
      allStatuses: 'All Statuses',
      active: 'Active',
      outOfStock: 'Out of Stock',
      discontinued: 'Discontinued',

      // Product List
      searchAnything: 'Search anything here...',
      exportOrders: 'Export Orders',
      totalProducts: 'Total Products',
      activeProducts: 'Active Products',
      product: 'Product',
      category: 'Category',
      price: 'Price',
      stock: 'Stock',
      status: 'Status',
      actions: 'Actions',
      filter: 'Filter',
      view: 'View',
      edit: 'Edit',
      delete: 'Delete',
      searchProducts: 'Search products...',
      active: 'Active',
      inactive: 'Inactive',

      // Order Management
      orderManagement: 'Order Management',
      orderDetails: 'Order Details',
      customerInfo: 'Customer Info',
      shippingPayment: 'Shipping & Payment',
      updateStatus: 'Update status',
      pending: 'Pending',
      shipped: 'Shipped',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
      orderId: 'Order ID',
      date: 'Date',
      customer: 'Customer',
      total: 'Total',
      payment: 'Payment',
      searchOrders: 'Search orders...',
      printInvoice: 'Print Invoice',
      updateOrder: 'Update Order',
      processing: 'Processing',

      // User Management
      userManagement: 'User Management',
      addNewUser: 'Add New User',
      searchUsers: 'Search users...',
      filterByRole: 'Filter by role',
      allRoles: 'All Roles',
      admin: 'Admin',
      customer: 'Customer',
      editUser: 'Edit User',
      viewDetails: 'View Details',
      userDetails: 'User Details',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      role: 'Role',
      usersTitle: 'Users',
      usersManagement: 'User Management',
      usersSearchPlaceholder: 'Search anything here...',
      usersSearchUsersPlaceholder: 'Search users...',
      usersFilterByRole: 'Filter by role',
      usersAllRoles: 'All Roles',
      usersAdmin: 'Admin',
      usersCustomer: 'Customer',
      usersAddNewUser: 'Add New User',
      usersUser: 'User',
      usersLocation: 'Location',
      usersActions: 'Actions',
      usersViewDetails: 'View Details',
      usersEditUser: 'Edit User',
      usersDeleteUser: 'Delete User',
      usersClose: 'Close',
      usersName: 'Name',
      usersPhoneNumber: 'Phone Number',
      usersStreetAddress: 'Street Address',
      usersCity: 'City',
      usersState: 'State',
      usersZipCode: 'ZIP Code',
      usersCancel: 'Cancel',
      usersSaveChanges: 'Save Changes',

      // Common
      save: 'Save',
      cancel: 'Cancel',
      close: 'Close',
      back: 'Back',
      duplicate: 'Duplicate',
      preview: 'Preview',

      // ProductList Component
      viewDetails: 'View Details',
      editProduct: 'Edit Product',
      deleteProduct: 'Delete Product',
      rating: 'Rating',
      ecommerce: 'E-commerce',

      // ProductForm Component
      backToProducts: 'Back to Products',
      productInfo: 'Product Information',
      name: 'Name',
      brand: 'Brand',
      description: 'Description',
      color: 'Color',
      warranty: 'Warranty',
      support: 'Support',
      markAsNew: 'Mark as New Product',
      specialFeatures: 'Special Features',
      addFeature: 'Add Feature',
      technicalSpecs: 'Technical Specifications',
      pricing: 'Pricing',

      // Dashboard
      totalRevenue: 'Total Revenue',
      totalOrders: 'Total Orders',
      totalCustomers: 'Total Customers',
      salesTrend: 'Sales Trend',
      orderStatus: 'Order Status',
      productCategories: 'Product Categories',
      weeklyRevenue: 'Weekly Revenue',
      
      // Navigation
      shipping: 'Shipping',
      profile: 'Profile',
      settings: 'Settings',
      notifications: 'Notifications',

      // Common Actions
      confirm: 'Confirm',
      next: 'Next',
      export: 'Export',
      import: 'Import',
      print: 'Print',
      download: 'Download',
      upload: 'Upload',
      
      // Metrics
      revenue: 'Revenue',
      sales: 'Sales',
      quantity: 'Quantity',
      time: 'Time',
      
      // Status
      completed: 'Completed',
      
      // Messages
      confirmDelete: 'Are you sure you want to delete this item?',
      successDelete: 'Item deleted successfully',
      successSave: 'Changes saved successfully',
      errorOccurred: 'An error occurred',
      
      // Placeholders
      searchPlaceholder: 'Search...',
      selectOption: 'Select an option',
      enterValue: 'Enter a value',
    },
  },
  vi: {
    translation: {
      adminPanel: 'QUẢN TRỊ VIÊN',
      dashboard: 'Trang chủ',
      analytics: 'Phân tích',
      users: 'Người dùng',
      userProfile: 'Hồ sơ người dùng',
      account: 'Tài khoản',
      products: 'Sản phẩm',
      orders: 'Đơn hàng',

      // Product Management
      addProducts: 'Thêm sản phẩm',
      productList: 'Danh sách sản phẩm',
      addNewProduct: 'Thêm sản phẩm mới',
      basicInfo: 'Thông tin cơ bản',
      specifications: 'Thông số kỹ thuật',
      media: 'Hình ảnh',
      reviews: 'Đánh giá',
      searchProducts: 'Tìm kiếm sản phẩm...',
      allCategories: 'Tất cả danh mục',
      allStatuses: 'Tất cả trạng thái',
      active: 'Đang bán',
      outOfStock: 'Hết hàng',
      discontinued: 'Ngừng bán',

      // Product List
      searchAnything: 'Tìm kiếm...',
      exportOrders: 'Xuất đơn hàng',
      totalProducts: 'Tổng số sản phẩm',
      activeProducts: 'Sản phẩm đang bán',
      product: 'Sản phẩm',
      category: 'Danh mục',
      price: 'Giá',
      stock: 'Tồn kho',
      status: 'Trạng thái',
      actions: 'Thao tác',
      filter: 'Lọc',
      view: 'Xem',
      edit: 'Sửa',
      delete: 'Xóa',
      searchProducts: 'Tìm kiếm sản phẩm...',
      active: 'Đang hoạt động',
      inactive: 'Không hoạt động',

      // Order Management
      orderManagement: 'Quản lý đơn hàng',
      orderDetails: 'Chi tiết đơn hàng',
      customerInfo: 'Thông tin khách hàng',
      shippingPayment: 'Vận chuyển & Thanh toán',
      updateStatus: 'Cập nhật trạng thái',
      pending: 'Đang xử lý',
      shipped: 'Đang giao',
      delivered: 'Đã giao',
      cancelled: 'Đã hủy',
      orderId: 'Mã đơn hàng',
      date: 'Ngày',
      customer: 'Khách hàng',
      total: 'Tổng tiền',
      payment: 'Thanh toán',
      searchOrders: 'Tìm kiếm đơn hàng...',
      printInvoice: 'In hóa đơn',
      updateOrder: 'Cập nhật đơn hàng',
      processing: 'Đang xử lý',

      // User Management
      userManagement: 'Quản lý người dùng',
      addNewUser: 'Thêm người dùng mới',
      searchUsers: 'Tìm kiếm người dùng...',
      filterByRole: 'Lọc theo vai trò',
      allRoles: 'Tất cả vai trò',
      admin: 'Quản trị viên',
      customer: 'Khách hàng',
      editUser: 'Sửa thông tin người dùng',
      viewDetails: 'Xem chi tiết',
      userDetails: 'Chi tiết người dùng',
      email: 'Email',
      phone: 'Số điện thoại',
      address: 'Địa chỉ',
      role: 'Vai trò',
      usersTitle: 'Người dùng',
      usersManagement: 'Quản lý người dùng',
      usersSearchPlaceholder: 'Tìm kiếm...',
      usersSearchUsersPlaceholder: 'Tìm kiếm người dùng...',
      usersFilterByRole: 'Lọc theo vai trò',
      usersAllRoles: 'Tất cả vai trò',
      usersAdmin: 'Quản trị viên',
      usersCustomer: 'Khách hàng',
      usersAddNewUser: 'Thêm người dùng mới',
      usersUser: 'Người dùng',
      usersLocation: 'Vị trí',
      usersActions: 'Thao tác',
      usersViewDetails: 'Xem chi tiết',
      usersEditUser: 'Sửa người dùng',
      usersDeleteUser: 'Xóa người dùng',
      usersClose: 'Đóng',
      usersName: 'Tên',
      usersPhoneNumber: 'Số điện thoại',
      usersStreetAddress: 'Địa chỉ',
      usersCity: 'Thành phố',
      usersState: 'Tỉnh/Thành',
      usersZipCode: 'Mã bưu điện',
      usersCancel: 'Hủy',
      usersSaveChanges: 'Lưu thay đổi',

      // Common
      save: 'Lưu',
      cancel: 'Hủy',
      close: 'Đóng',
      back: 'Quay lại',
      duplicate: 'Nhân bản',
      preview: 'Xem trước',

      // ProductList Component
      viewDetails: 'Xem chi tiết',
      editProduct: 'Sửa sản phẩm',
      deleteProduct: 'Xóa sản phẩm',
      rating: 'Đánh giá',
      ecommerce: 'Thương mại điện tử',

      // ProductForm Component
      backToProducts: 'Quay lại Sản phẩm',
      productInfo: 'Thông tin sản phẩm',
      name: 'Tên',
      brand: 'Thương hiệu',
      description: 'Mô tả',
      color: 'Màu sắc',
      warranty: 'Bảo hành',
      support: 'Hỗ trợ',
      markAsNew: 'Đánh dấu là sản phẩm mới',
      specialFeatures: 'Tính năng đặc biệt',
      addFeature: 'Thêm tính năng',
      technicalSpecs: 'Thông số kỹ thuật',
      pricing: 'Giá',

      // Dashboard
      totalRevenue: 'Tổng doanh thu',
      totalOrders: 'Tổng đơn hàng',
      totalCustomers: 'Tổng khách hàng',
      salesTrend: 'Xu hướng bán hàng',
      orderStatus: 'Trạng thái đơn hàng',
      productCategories: 'Danh mục sản phẩm',
      weeklyRevenue: 'Doanh thu theo tuần',
      
      // Navigation
      shipping: 'Vận chuyển',
      profile: 'Hồ sơ',
      settings: 'Cài đặt',
      notifications: 'Thông báo',

      // Common Actions
      confirm: 'Xác nhận',
      next: 'Tiếp theo',
      export: 'Xuất',
      import: 'Nhập',
      print: 'In',
      download: 'Tải xuống',
      upload: 'Tải lên',
      
      // Metrics
      revenue: 'Doanh thu',
      sales: 'Doanh số',
      quantity: 'Số lượng',
      time: 'Thời gian',
      
      // Status
      completed: 'Hoàn thành',
      
      // Messages
      confirmDelete: 'Bạn có chắc chắn muốn xóa mục này?',
      successDelete: 'Xóa thành công',
      successSave: 'Lưu thay đổi thành công',
      errorOccurred: 'Đã xảy ra lỗi',
      
      // Placeholders
      searchPlaceholder: 'Tìm kiếm...',
      selectOption: 'Chọn một tùy chọn',
      enterValue: 'Nhập giá trị',
    },
  },
};

const toggleLanguage = () => {
  const newLang = i18n.language === 'en' ? 'vi' : 'en';
  i18n.changeLanguage(newLang);
};

console.log('Current language:', i18n.language);

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // ngôn ngữ mặc định
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;