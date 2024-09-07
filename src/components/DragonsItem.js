import React from 'react';
import PropTypes from 'prop-types';
import '../modules/Dragon.css'; // Ensure this path is correct

function DragonsItem({
  id, name, image, description, reserved, onReserve,
}) {
  return (
    <div className="dragon-item card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} alt={name} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button
              type="button"
              className={`btn ${reserved ? 'btn-danger' : 'btn-primary'}`}
              onClick={() => onReserve(id)}
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DragonsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  onReserve: PropTypes.func.isRequired,
};

export default DragonsItem;
