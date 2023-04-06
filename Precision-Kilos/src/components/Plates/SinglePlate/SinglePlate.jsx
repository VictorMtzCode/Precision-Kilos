import "./SinglePlate.css";

const SinglePlate = ({ BGColor, kiloNumber, addPlate, removePlate }) => {
  return (
    <div
      className="singleplate"
      style={{ backgroundColor: BGColor, outlineColor: BGColor }}
    >
      <p className="singleplate__shadow">{kiloNumber}</p>
      <div className="singleplate__interactive">
        <button
          className="singleplate__btn singleplate__shadow"
          onClick={removePlate}
        >
          -
        </button>
        <p className="singleplate__interactive__number">0</p>
        <button
          className="singleplate__btn singleplate__shadow"
          onClick={addPlate}
        >
          +
        </button>
      </div>
      <p className="singleplate__shadow">KG</p>
    </div>
  );
};

export default SinglePlate;
