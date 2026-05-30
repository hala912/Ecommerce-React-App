import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Container, Row, Col } from "react-bootstrap";
import { getproducts } from "@redux/productslice/actions/getproducts";
import {useParams} from "react-router-dom";
import Product from "@components/ecommerce/product/product";
const product = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { products, loading, error } =
   useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getproducts(params.prefix as string));
  }, [dispatch, params  ]);

  const productsList =
    products.length > 0
      ? products.map((product) => (
          <Col
            xs={3}
            key={product.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product name={product.name} price={product.price} img={product.img} />
          </Col>
        ))
      : null;

  return (
    <div>
      <h1>Product Page</h1>
      <Container>
        <Row>
          {productsList}
        </Row>
      </Container>
    </div>
  );
}

export default product;