interface Extra {
    id: number;
    name: string;
  }
  
  interface Product {
    id: number;
    name: string;
    extras: Extra[];
    price: number;
    quantity: number;
  }
  
  interface CartState {
    products: Product[];
    total: number;
  }
  