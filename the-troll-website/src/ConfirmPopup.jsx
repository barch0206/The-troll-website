function ConfirmPopup({ message, onYes, onNo }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "15px",
          textAlign: "center",
          maxWidth: "400px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>{message}</h2>
        <div style={{ marginTop: "1.5rem" }}>
          <button
            onClick={onYes}
            style={{
              padding: "0.8rem 1.5rem",
              margin: "0 1rem",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Yes
          </button>
          <button
            onClick={onNo}
            style={{
              padding: "0.8rem 1.5rem",
              margin: "0 1rem",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
