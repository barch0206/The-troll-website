import './ConfirmPopup.css';

function ConfirmPopup({ message, onYes, onNo }) {
  return (
    <div className="confirm-popup-overlay">
      <div className="confirm-popup">
        <h2>{message}</h2>
        <div className="popup-buttons">
          <button onClick={onYes} className="popup-button yes-button">
            Yes
          </button>
          <button onClick={onNo} className="popup-button no-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;