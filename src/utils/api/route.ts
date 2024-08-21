export const endPoints = {
  //AuthApi
  auth: {
    //login api
    login: "auth/login",
    logout: "auth/logout",
    // register api
    sendOtp: "auth/sendOtp",
    verifyOtp: "auth/verifyOtp",
    register: "auth/register",
    //forgot-password
    updatePassword: "auth/forgot-password",
    //refreshtokenvalidate
    validaterefreshtoken: "auth/refresh",
    //unknownApi
    verifypassword: "auth/verify-password",
    registerOrg: "auth/registerOrg",
  },
  //Organization Api
  organization: {
    getOrganizationByUserId: (id: string) => `organization/userId/${id}`,
    organizationCreate: "organization/create",
    updateOrgByOrgIdupdateOrgByOrgId: (id: string) =>
      `organization/update/${id}`,
    deleteOrgByOrgId: (id: string) => `organization/delete/${id}`,
  },
  //StoreApi
  store: {
    storeCreate: "store/create",
    getSoreByOrgId: (id: string | null | number) =>
      `store/organizationId/${id}`,
    getStoreByUserId: (id: string) => `store/${id}`,
    updateStoreByStoreId: (id: string) => `store/update/${id}`, //not done
    deleteStoreByStoreId: (id: string) => `store/delete/${id}`, //not done
    getStoreByUserName: (name: string) => `store/user-name/${name}`, //no need anymore
  },
  branch: {
    branchcreate: "branch/create",
    getAllBranchByStoreId: (id: string | number | null) =>
      `branch/storeId/${id}`,
    getBranchByBranchIdAndStoreId: (branchId: string, storeId: string) =>
      `branch/${branchId}/${storeId}`,
  },

  outlet: {
    createOutlet: "outlet/create",

    getOutletTypeOrgId: (
      type: string | null | number,
      orgId: string | null | number,
    ) => `outlet/type/${type}/org/${orgId}`,

    getOutletStoreIdOrgId: (
      storeId: string | null | number,
      orgId: string | null | number,
    ) => `outlet/store/${storeId}/org/${orgId}`,
    getOutletByType: (type: string | undefined, orgId: number) =>
      `outlet/type/${type}/org/${orgId}`,

    getSingleOutletByIdOrgID: (
      id: string | null,
      type: string,
      orgId: string | null | number,
    ) => `outlet/${id}/${type}/${orgId}`,

    updateOutletByOutletId: (id: string) => `outlet/update/${id}`,
  },
  product: {
    slugCheck: (slug: string, orgId: number) =>
      `products/slug/${slug}/${orgId}`,
    createPackSize: "pack-size/create",
    getAllPackSize: (orgId: number) => `pack-size/list/${orgId}`,
    createSKU: "sku/create",
    createUOM: "uom/create",
    getAllUOM: (orgId: number) => `uom/list/${orgId}`,
    createProductCategory: "product-category/create",
    getAllProductCategory: (orgId: number) => `product-category/list/${orgId}`,
    createProductSubCategory: "product-sub-category/create",
    getAllSubCategory: (orgId: number) => `product-sub-category/list/${orgId}`,
    getAllSubCategoryByCategoryId: (categoryId: number, orgId: number) =>
      `product-sub-category/category/${categoryId}/${orgId}`,

    createVariations: "variations/create",
    getAllVariations: (orgId: number) => `variations/list/${orgId}`,
    createMainTags: "main-tags/create",
    getAllMainTags: (orgId: number) => `main-tags/list/${orgId}`,
    createProduct: "products/create",
    getAllProducts: (orgId: number, outletId: number) =>
      `products/list/${orgId}/${outletId}`,
    deleteProducts: (id: string) => `products/delete/${id}`,
    getProductsById: (id: string, orgId: string) => `products/${id}/${orgId}`,
    updateProducts: (productId: number) => `products/update/${productId}`,
    getOutletByType: (type: string | undefined, orgId: number) =>
      `outlet/type/${type}/org/${orgId}`,
  },
  purchaseorder: {
    getPurchaseOrderByOrgId: (orgId: string) => `/purchase-order/list/${orgId}`,
    createPo: "/purchase-order/create",
    getPoById: (id: string, orgId: string) => `/purchase-order/${id}/${orgId}`,
    updatePo: (id: string) => `/purchase-order/update/${id}`,

    updatePOProductDetails: "/purchase-order-details/update",

    getPoByOutletId: (outletId: number, orgId: number) =>
      `purchase-order/outlet/${outletId}/${orgId}`,
  },

  supplier: {
    createSupplier: "supplier/create",
    getAllSupplierByOrgId: (orgId: number) => `supplier/list/${orgId}`,
    getSupplierByIdAndOrgId: (id: number, orgId: number) =>
      `supplier/${id}/${orgId}`,
    updateSupplier: (id: number) => `supplier/update/${id}`,
    deleteSupplier: (id: number) => `supplier/delete/${id}`,
  },

  indentmanagement: {
    CreateIndent: "indent/create",
    getAllIndentListByORGIdStoreId: (storeId: number, orgId: number) =>
      `indent/all-indent/${storeId}/${orgId}`,
    getApproveIndentListByORGIdStoreId: (storeId: number, orgId: number) =>
      `indent/store-branch/${storeId}/${orgId}`,
    getPendingListByOrgidoutletId: (storeId: number, orgId: number) =>
      `/indent/pending-list/${storeId}/${orgId}`,
    deleteIndentbyIndentId: (indentId: number) => `indent/delete/${indentId}`,
    updateIndentById: (id: number | undefined) => `indent/update/${id}`,
    updateIndentDetailsById: (intIndentId: number | undefined) =>
      `indent-details/update/${intIndentId}`,
    getIndentdetailsbyIndentid: (
      orgId: number,
      outletId: number | null,
      indentId: number | undefined | null,
    ) => `indent/indent-details/${orgId}/${outletId}/${indentId}`,
  },
  mrr: {
    getMRRListByORGId: (orgId: number) => `mrr/list/${orgId}`,
    updateMRRListById: (id: number | undefined) => `mrr/update/${id}`,
    createMRR: `mrr/create`,
    GetMrrByOutletId: (outletId: number, orgId: number) =>
      `mrr/outlet/${outletId}/${orgId}`,
    mrrdetailsbyMrrId: (mrrId: number | undefined, orgId: number) =>
      `mrr/${mrrId}/${orgId}`,
    findPOByOutlet: (outletId: number, orgId: number) =>
      `purchase-order/outlet/${outletId}/${orgId}`,
    getOutletByType: (type: string | undefined, orgId: number) =>
      `outlet/type/${type}/org/${orgId}`,
    getPodetailsByPoid: (poId: number, orgId: number) =>
      `purchase-order/${poId}/${orgId}`,
    MrrListUpdate: (id: number | undefined) => `mrr/update/${id}`,
    MRRListDelete: (intId: number | undefined) => `mrr/delete/${intId}`,
  },
  StoreInventory: {
    createInventory: "inventory/create",
    getStoreInventoryReport: (
      orgId: number,
      storeId: number,
      startdate: string,
      enddate: string,
    ) =>
      `inventory/inv-report-by-outlet/${orgId}/${storeId}/${startdate}/${enddate}`,
    getStoreSalesReport: (
      orgId: number,
      storeId: number | undefined | null,
      startdate: string,
      enddate: string,
    ) => `order/date-wise-report/${orgId}/${storeId}/${startdate}/${enddate}`,
    getInventoryTransferHistory: (
      orgId: number,
      fromOutletId: number,
      toOutletId: number,
      startdate: string,
      enddate: string,
    ) =>
      `inventory-transfer/list/${orgId}/${fromOutletId}/${toOutletId}/${startdate}/${enddate}`,
    inventoryTransferListAll: () => `/inventory-transfer/`,
    getPendingInventoryTransfer: (outletId: number, orgId: number) =>
      `inventory-transfer/pendinglist/${outletId}/${orgId}`,
    transferInventory: `/inventory-transfer/create`,
    findByTransferInventoryId: (id: number) => `/inventory-transfer/${id}`,
    getStockByOutletIdOrgId: (orgId: number, outletId: number) =>
      `/inventory/inv-stock-by-outlet/${orgId}/${outletId}`,
    getStockByProductIdOrgIDOutletId: (
      orgId: number,
      outletId: number,
      productId: number,
    ) => `/inventory/inv-stock-by-outlet/${orgId}/${outletId}/${productId}`,
  },
  BranchInventory: {
    getInventoryReport: (
      orgId: number,
      branchId: number,
      startdate: string,
      enddate: string,
    ) =>
      `inventory/inv-report-by-outlet/${orgId}/${branchId}/${startdate}/${enddate}`,
    getPendingInventoryTransfer: (outletId: number, orgId: number) =>
      `inventory-transfer/pendinglist/${outletId}/${orgId}`,
    updateInventoryTransfer: (orgId: number, id: number, outletId: number) =>
      `/inventory-transfer/receive-trnasfer/${orgId}/${id}/${outletId}`,
  },
  Account: {
    getUserByOrg: (orgId: number) => `user/list/${orgId}`,
    getUserByUserId: (userId: number) => `user/${userId}`,
    userAccountCreate: `auth/user/register`,
    getUrserRole: "role",
    deleteUser: (userId: number, orgId: number) =>
      `auth/user/delete/${userId}/org/${orgId}`,
    updateUser: (userId: number, orgId: number) =>
      `auth/user/update/${userId}/org/${orgId}`,
  },
  Offer: {
    getDiscountType: (orgId: number, outletId: number) =>
      `discount-types/${orgId}/${outletId}`,
    createOfferForProduct: "offers/create",
    getOfferProductList: (orgId: number, outletId: number, status: number) =>
      `offers/offer-status/${orgId}/${outletId}/${status}`,
    createPromotion: "promotion/create",
    getPromotionByOutletId: (orgId: number, outletId: number) =>
      `promotion/outlet/${orgId}/${outletId}`,
    getPromitionById: (promotionId: number, orgId: number) =>
      `promotion/${promotionId}/${orgId}`,
    updatePromotion: (promotionId: number) => `promotion/update/${promotionId}`,
    deletePromotion: (promotionId: number) => `promotion/delete/${promotionId}`,
    getOfferById: (offerId: number, orgId: number, outletId: number) =>
      `offers/${offerId}/${orgId}/${outletId}`,
    updateOfferProduct: (offerId: number) => `offers/update/${offerId}`,
  },
  barCode: {
    createBarcode: "barcode/create",
    getBarCodeListByOrgId: (orgId: number) => `barcode/list/${orgId}`,
    getBarcodeById: (id: number, orgId: number) => `barcode/${id}/${orgId}`,
    deleteBarCode: (id: number, orgId: number) =>
      `barcode/delete/${id}/${orgId}`,
  },
};
