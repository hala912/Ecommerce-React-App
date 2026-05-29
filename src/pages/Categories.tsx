import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Container, Row, Col } from "react-bootstrap";
import { getCategories } from "@redux/categoryslice/actions/getcategories";
import Category from "@components/ecommerce/category/category";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, categories } =
   useAppSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

    const categoriesList =
    categories.length > 0
      ? categories.map((category) => (
          <Col
            xs={3}
            key={category.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...category} />
          </Col>
        ))
      : "there are no categories";

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
