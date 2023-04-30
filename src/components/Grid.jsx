import CardGrid from "./CardGrid";
import foodData from "../data/recipes.json"
import { Row, Col } from 'react-bootstrap';

export default function Grid() {
  return (
    <main>
      <Row xs={1} md={3}>
        {foodData.map((food) => (
          <Col key={food.id}>
            {food ? <CardGrid food={food} /> : <p>Loading</p>}
          </Col>
        ))}
      </Row>
    </main>
  )
}