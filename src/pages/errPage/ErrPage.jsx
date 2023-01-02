import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { StoreCtxt } from "../../services/StoreService";
import "../../App.css";

function ErrPage() {
  const { user, gigs } = useContext(StoreCtxt).states;
  const { addNewUser } = useContext(StoreCtxt).actions;
  const navigate = useNavigate();
  const goBack = (e) => {
    navigate("/gigs");
  };

  return (
    <div className="err-page">
      <h2>הדף לא נמצא</h2>
      <Button onClick={goBack} className="shira-button">
        חזרה לאתר
      </Button>
    </div>
  );
}

export default ErrPage;
