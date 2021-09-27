export const getDB = () =>{
    let cart = localStorage.getItem('cart');
    if(cart)return JSON.parse(cart);
    return {};
}

export const setDB = (k,c) =>{
    const cart = getDB();
    cart[k] = c;
    localStorage.setItem('cart',JSON.stringify(cart));
}

export const clearDB = () =>{
    localStorage.removeItem('cart');
}