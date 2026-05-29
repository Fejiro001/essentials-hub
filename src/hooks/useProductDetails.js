import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const fakestoreURL = "https://fakestoreapi.com/products";

export function useProductDetails(productId) {
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${fakestoreURL}/${productId}`);

        if (!response.data) {
          toast.error("Product not found");
          navigate("/");
          return;
        }

        setProductDetail(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProducts();
    } else {
      navigate("/");
    }
  }, [navigate, productId]);

  return { loading, productDetail };
}
