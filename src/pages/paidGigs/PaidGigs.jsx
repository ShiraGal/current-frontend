import "./PaidGigs.css";
import Header from "../../components/header/Header";
import trashIcon from "../../icons/trash.png";
import { StoreCtxt } from "../../services/StoreService";
import { useContext } from "react";
import { Button, Table } from "react-bootstrap";

function PaidGigs() {
  const { user, gigs } = useContext(StoreCtxt).states;
  const { getMyGigs, removeFromGigs } = useContext(StoreCtxt).actions;
  const removeThisGig = (e) => {
    removeFromGigs(e.target.id);
    getMyGigs();
  };

  return (
    <div className="paid-page">
      <Header bold={false} />
      <div className="out-shira-table">
        <Table className="shira-table">
          <thead>
            <tr>
              <th>לקוח</th>
              <th>פרטים</th>
              <th>תאריך</th>
              <th>תשלום</th>
              <th>הסרה</th>
            </tr>
          </thead>
          <tbody>
            {gigs
              ? gigs
                  .filter((gig) => gig.paidup == true)
                  .map((gig) => {
                    return (
                      <tr key={gig._id}>
                        <td>{gig.client}</td>
                        <td>{gig.details}</td>
                        <td>{gig.date.slice(0, 10)}</td>
                        <td>{gig.payment}</td>
                        <td>
                          <Button
                            onClick={removeThisGig}
                            id={gig._id}
                            className="shira-button"
                          >
                            <img
                              id={gig._id}
                              src={trashIcon}
                              className="trashIcon"
                            />
                          </Button>
                        </td>
                      </tr>
                    );
                  })
              : null}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PaidGigs;
