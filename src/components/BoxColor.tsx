import { IProps } from "../interfaces";

const BoxColor = (props: IProps): JSX.Element => {
  const { background, isDefault, handleDelete } = props;
  return (
    <div className="box">
      <div style={{ backgroundColor: background }} className="box-color"></div>
      <div className="box-info-container">
        <p>{background}</p>

        {!isDefault && (
          <div onClick={() => handleDelete()} className="box-info-button">
            <p>x</p>
          </div>
        )}

        {isDefault && (
          <div onClick={() => {}} className="box-info-button button-disable">
            <p>""</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxColor;
