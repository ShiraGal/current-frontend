import "./Gigs.css";
import "../../components/gigCard/GigCard.css";
import "../../components/popupAddGig/PopupAddGig.css";
import GigCard from "../../components/gigCard/GigCard";
import Header from "../../components/header/Header";
import PopupAddGig from "../../components/popupAddGig/PopupAddGig";
import { StoreCtxt } from "../../services/StoreService";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from "react-bootstrap";

function Gigs(props) {
  const navigate = useNavigate();
  const { user, gigs } = useContext(StoreCtxt).states;
  const { getMyGigs } = useContext(StoreCtxt).actions;

  const userId = user._id;
  const [popup, setPopup] = useState(false);

  const createGig = (e) => {
    setPopup(!popup);
  };

  useEffect(() => {
    getMyGigs();
  }, []);

  return (
    <div className="gigs-page">
      <Header bold={true} />
      <div className="shira-out-accordion">
        <Accordion className="shira-accordion">
          <Accordion.Item eventKey="0" className="shira-head-Accordion">
            <Accordion.Header>הוסף גיג חדש</Accordion.Header>
            <Accordion.Body>
              <PopupAddGig popup={[popup, setPopup]} userId={user._id} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="out-gigs-list">
        <div className="gigs-list">
          {gigs
            ? gigs
                .filter((gig) => gig.paidup === false)
                .map((gig) => {
                  return (
                    <GigCard
                      key={gig._id}
                      popup={[popup, setPopup]}
                      date={gig.date}
                      client={gig.client}
                      details={gig.details}
                      payment={gig.payment}
                      _id={gig._id}
                    />
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
