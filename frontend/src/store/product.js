
import {create} from "zustand";


export const useProductStore = create((set)=>({
    // state
    products:[],
    // actions
    setProducts: (products)=> set({products}),

    // ***********************************************8
    // for product creation 
    createProduct: async(newProduct) =>{
        // validation
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false, message: "all fields are required "}
        }
        // api call 
        const res = await fetch("/api/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newProduct)
        })
        // process response 
        const data = await res.json();

        // update state
        set((state)=>({products:[...state.products,data.data]}));

        // return result
        return {success:true, message: "Product created successfully"}
    },

    // ***************************************
    // fetch products
    fetchProducts : async () =>{
        // api call 
        const res = await fetch("/api/products");
        // process response
        const data = await res.json();

        // update state
        set({products:data.data});
    },

    // delete products 
    deleteProducts: async (pid)=>{
        // api request 
        const res= await fetch(`/api/products/${pid}`,{
            method:"DELETE",
        });
        // parse response 
        const data = await res.json();
        // check for errors
        if(!data.success) return{success: false, message:data.message};
        // update local storage and also update the ui immeadiately, with out refreash the whole page 
        set(state=>({products:state.products.filter(product => product._id !==pid)}));
        // return success 
        return{success:true, message: data.message};
    },

    // update products 
    updateProduct: async(pid,updatedProduct) =>{
        const res = await fetch(`/api/products/${pid}`,{
            method: "PUT",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await res.json();
        if(!data.success) return{success:false, message:data.message};
        set(state =>({
            products: state.products.map((product) => (product._id === pid ? data.data : product)),
        }))
        return{success:true, message:data.message}
    }
}));

