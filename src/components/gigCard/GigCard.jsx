import "./GigCard.css";
import trashIcon from "../../icons/trash.png";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { StoreCtxt } from "../../services/StoreService";

function GigCard(props) {
  const { user, gigs } = useContext(StoreCtxt).states;
  const { getMyGigs, addNewGig, passToPaidGigs, removeFromGigs } =
    useContext(StoreCtxt).actions;
  const date = props.date.slice(0, 10);
  const client = props.client;
  const details = props.details;
  const payment = props.payment;
  const gigId = props._id;
  const [popup, setPopup] = props.popup;

  const today = Date.now();
  const gigTime = Date.parse(date);
  const day = 86400000;

  const plus30 = (today - gigTime) / day;

  const passThisGig = () => {
    passToPaidGigs(gigId);
    getMyGigs();
  };
  const removeThisGig = () => {
    removeFromGigs(gigId);
    getMyGigs();
  };

  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="shira-gig-card"
        id={plus30 > 30 ? "gig-card-plus30" : null}
      >
        <Card.Body>
          <Card.Title>{client}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Text>{details}</Card.Text>
          <Card.Subtitle>{payment} ש"ח</Card.Subtitle>
          <div className="gig-card-buttons">
            <Button className="shira-button" id="paid" onClick={passThisGig}>
              שולם? העבר לרשימה
            </Button>
            <Button
              className="shira-button"
              id="remove"
              onClick={removeThisGig}
            >
              <img src={trashIcon} className="trashIcon" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GigCard;
