import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Container} from "react-bootstrap";
import { getCategories } from "@redux/categoryslice/actions/getcategories";
import Category from "@components/ecommerce/category/category";
import GridList from "@components/common/gridlist";

const Categories = () => {
  const dispatch = useAppDispatch();
  const {categories } =
   useAppSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

    

  return (
    <Container>
      <GridList records={categories} renderItem={(category) => <Category {...category} />} />
    </Container>
  );
};

export default Categories;
