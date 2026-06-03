import { Row, Col } from "react-bootstrap";
import React from "react";

type GridListProps<T extends { id: any }> = {
  records: T[];
  renderItem: (item: T) => React.JSX.Element;
};

const GridList = <T extends { id: any }>({ records, renderItem }: GridListProps<T>) => {
    const categoriesList =
    records.length > 0
      ? records.map((item) => (
          <Col
            xs={3}
            key={item.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(item)}
          </Col>
        ))
      : "there are no categories";
  return (
   <Row>{categoriesList}</Row>
  );
};

export default GridList;