import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Product = {
  id: number;
  name: string;
  old_price: number;
  new_price: number;
  image: string;
};

type Cart = {
  [key: number]: number;
};

interface ShopContextValue {
  all_products: Product[];
  cartItems: Cart;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextValue | undefined>(
  undefined
);

const getDefaultCart = (): Cart => {
  const cart: Cart = {};
  for (let i = 0; i <= 300; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());
  const [all_products, setAll_products] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch product data
    fetch("http://localhost:5000/allProducts")
      .then((response) => response.json())
      .then((data: Product[]) => setAll_products(data))
      .catch((err) => console.error("Fetch products error:", err));

    // Fetch cart if authenticated
    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:5000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
        .then((res) => res.json())
        .then((data: Cart) => setCartItems(data))
        .catch((err) => console.error("Fetch cart error:", err));
    }
  }, []);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:5000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Add to cart:", data))
        .catch((err) => console.error("Add to cart error:", err));
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));

    const token = localStorage.getItem("auth-token");
    if (token) {
      fetch("http://localhost:5000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Remove from cart:", data))
        .catch((err) => console.error("Remove from cart error:", err));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const id in cartItems) {
      const quantity = cartItems[+id];
      if (quantity > 0) {
        const product = all_products.find((p) => p.id === +id);
        if (product) {
          totalAmount += product.new_price * quantity;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const contextValue: ShopContextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
