class ProductManager {
  static #contadorId = 0
  constructor() {
    (this.products = [])
  }

  addProduct(code, title, description, price, thumbnail, stock) {
    
    if (!code || !title || !description || !price || !thumbnail || !stock) {
        console.error("Todos los campos son obligatorios");
        process.exit();
    }
    
    const codeValidation = this.products.some(
      (product) => code === product.code
    );
    if (codeValidation) {
      console.error("El codigo corresponde a otro producto");
      process.exit();
    }

    ProductManager.#contadorId++

    const newProduct = {
      id: ProductManager.#contadorId,
      code: code,
      title: title,
      description: description,
      price: parseFloat(price),
      thumbnail: thumbnail,
      stock: parseInt(stock)
    }
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const productFound = this.products.find((product) => product.id === id);
    let output = productFound ?? `El id ${id} no corresponde a ningun producto en existencia`;
    return output;
  }
}

const productManager = new ProductManager();

productManager.getProducts()
