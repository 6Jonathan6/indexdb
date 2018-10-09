// Singlenton to intantiate an indexdb with dexie
// We wil create a indx db for  products
/*
  sync 1 :{table:"tabe_name",isDownLoadComplate:true or false, lastSync: UTC STRING DATE}
 */
const Singlenton = (function() {
  let instance;
  function createInstance() {
    const db = new Dexie("ProductosDB");
    db.version(1).stores({
      products: "++id,product_id,product_type,branch_id,product",
      sync: "++id table "
    });

    return db;
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    reloadInstance() {
      instance = createInstance();
    },
    deleteDataBase() {
      return db.delete();
    },
    saveProduct(productObject) {
      return db.products.add(productObject);
    },
    //return a collection
    getStockbles() {
      return db.products.where({ product_type: "stockable" });
    },
    //return a collection
    getKits() {
      return db.products.where({ product_type: "kit" });
    },
    //returns a collection
    getVariants() {
      return db.products.where({ product_type: "variant" });
    },
    //returns a collection
    getByProductType(type) {
      return db.products.where({ product_type: type });
    }
  };
})();
