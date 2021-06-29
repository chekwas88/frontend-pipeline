function Card({ shapeProps }) {
  const Element = shapeProps.shape;
  return (
    <div className="card">
      <svg
        data-testid="svgshape"
        width={150}
        height={shapeProps.props.height ? shapeProps.props.height : 100}
      >
        <Element {...shapeProps.props} />
      </svg>
    </div>
  );
}

export default Card;
