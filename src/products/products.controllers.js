// importaciones
console.log("hello")
const uuid =require("uuid")
const Products =require("../models/products.models")

const getAllProduts=async () =>{
    const data =await Products.findAll()
    return data
}

// getAllProduts()
// .then(res => console.log(res))
// .catch(err=>console.log(err))



const createProduct =async (data)=>{
    const newProduct =await Products.create({
        id:uuid.v4(),
        name:data.name,
        category:data.category,
        price:data.price,
        isAvailable:data.isAvailable
    })
    return newProduct
}


// createProduct({
//     name:"pantalon",
//   category:"caballeros",
//   price:200,
//   isAvailable:true
// })
// .then(res => console.log(res))
// .catch(err=>console.log(err))

const getProductById= async (id)=>{
    const data =await Products.findOne({
        where:{
            id
        }
    })
    return data
}

const editProduct =async (id,data)=>{
    const response=await Products.update(data,{
        where:{
            id
        }
    })
    return response;
}

const deleteProduct =async (id)=>{
    const data=await Products.destroy({
        where:{
            id}

    })
    return data
}

// deleteProduct("5738f63f-f957-45a7-8914-f87c5afeadef")
// .then(res => console.log(res))
// .catch(err=>console.log(err))



module.exports={
    getAllProduts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}