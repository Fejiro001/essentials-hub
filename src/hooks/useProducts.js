import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const fakestoreURL = "https://fakestoreapi.com/products";

export function useProducts(value, delay = 300) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(fakestoreURL);
        setProducts(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
}
