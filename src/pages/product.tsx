import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getproducts } from "@redux/productslice/actions/getproducts";
import {useParams} from "react-router-dom";
import Product from "@components/ecommerce/product/product";
import GridList from "@components/common/gridlist";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { products} =
   useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getproducts(params.prefix as string));
  }, [dispatch, params  ]); 



  return (
    <div>
      <h1>Product Page</h1>
      <GridList records={products} renderItem={(product) => <Product {...product} />} />

    </div>
  );
}

export default ProductPage;