class Products{
    constructor(){
        this.products = [];
        this.id = 0;
    }

get productsAll(){
    try {   
        return this.products
        
    } catch (error) {
        throw new Error(`se produjo un error: ${error.message}`);
        
    }
}
    saveProduct(product){
        try {
            this.id++;
            const newProduct ={
                title: product.title,
                price: product.price,
                thumbnail:'',
                id: this.id
            }
        this.products.push(newProduct);
        return newProduct;
        }catch (error) {
            throw new Error(`se produjo un error al guardar el nuevo producto: ${error.message}`);
        }
    }

    getProductById(idProduct){
        try {

            return this.products.find(product => product.id == idProduct)
        }catch (error) {
            throw new Error(`se produjo un error al buscar`)
        }
    }

    updateProductById(idProduct, body){
        const product = {
            title: body.title,
            price: body.price,
            thumbnail:'',
            id: idProduct
        }
        const updateIndex = this.products.findIndex((product)=>product.id === idProduct)
        this.products[updateIndex] = product
        return product;
    }

    deleteProductById(idProduct){
        try {
            const deleteIndex = this.products.findIndex((product) => product.id === idProduct)
            console.log(deleteIndex)
            if (deleteIndex === -1) {
                console.log("id no encontrado")
                
            } else {
                const deleteProduct = this.products.splice(deleteIndex,1)
                console.log("id eliminado\n")
                console.log(deleteProduct)
            }

        } catch (error) {
            console.log("error" + error.message)
            
        }

    }
}

module.exports = Products