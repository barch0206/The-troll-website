import { useNavigate } from "react-router-dom";

function SpecialOffer() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        fontFamily: "Comic Sans MS, cursive, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}>⏳ LOADING...</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "4rem" }}>
        Please wait while we prepare your <b>FREE invisible prize</b> 😏
      </p>
      <button
        onClick={() => navigate("/home2")}
        style={{
          fontSize: "2rem",
          padding: "1rem 3rem",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "15px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 0 20px rgba(255,0,0,0.7)",
        }}
      >
        ⬅️ BACK
      </button>
    </div>
  );
}

export default SpecialOffer;
