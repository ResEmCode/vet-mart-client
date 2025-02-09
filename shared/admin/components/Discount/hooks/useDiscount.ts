"use client";

import { deleteDiscountProduct, getDiscountProducts, patchDiscountProduct, postDiscountProduct } from "@/shared/api/requests";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DiscountSchema } from "../constants/discountSchema";
import { useDiscountProducts } from "../store";

export const useDiscount = () => {
  // const [discounts, setDiscounts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const { addProduct, setProducts, products, updateProduct } = useDiscountProducts();

  const fetchDiscountProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getDiscountProducts({});
      setProducts(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDiscountProducts();
  }, [fetchDiscountProducts]);

  const onDelete = async (productId: string) => {
    try {
      const { data } = await deleteDiscountProduct({
        params: {
          id: productId,
        },
      });

      const newDiscounts = products.filter((item) => item.id !== Number(productId));
      setProducts(newDiscounts);

      toast.success(data.message);
    } catch (error) {}
  };

  const onAddDiscount = async (payload: DiscountSchema) => {
    try {
      const { data, status } = await postDiscountProduct({
        params: {
          article: payload.article,
          body: {
            discount: payload.discount,
          },
        },
      });

      addProduct(data.product);

      if (status === 200) {
        toast.success(data.message, {
          duration: 3000,
        });
      }
    } catch ({ response }: any) {
      toast.error(response.data.message, {
        duration: 3000,
      });
    }
  };

  const onUpdate = async (payload: { productId: string; discount: string }) => {
    try {
      const { data, status } = await patchDiscountProduct({
        params: {
          id: payload.productId,
          body: {
            discount: payload.discount,
          },
        },
      });

      updateProduct(payload);

      if (status === 200) {
        toast.success(data.message, {
          duration: 3000,
        });
      }
    } catch ({ response }: any) {
      toast.error(response.data.message, {
        duration: 3000,
      });
    }
  };

  return {
    products,
    isLoading,
    error,
    onDelete,
    onAddDiscount,
    onUpdate,
  };
};
