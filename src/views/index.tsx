import ShapeFilter from "../components/ShapeFilter";
import ColorFilter from "../components/ColorFilter";
import Card from "../components/Card";
import { useShapeContext } from "../context";

export default function Home() {
  const { shapes, title } = useShapeContext();

  return (
    <div className="container">
      <h2>Filters</h2>
      <ShapeFilter />
      <ColorFilter />
      <h2>{title}</h2>
      <div className="container__filter">
        {shapes &&
          shapes.map((item, idx) => {
            return <Card key={`${item.name}-${idx}`} shapeProps={item} />;
          })}
      </div>
    </div>
  );
}
