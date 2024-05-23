import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import unsplash from "../assets/unsplash.png";

function ProfileCard() {
  function mouseover() {
    document.getElementById("btn").style.background = "#af40ff";
  }
  function mouseout() {
    document.getElementById("btn").style.background = "#4b0082";
  }
  return (
    <Card style={{ width: "18rem", background: "#202020", color: "white" }}>
      <Card.Img variant="top" src={unsplash} style={{ height: "200px" }} />
      <Card.Body>
        <a href="https://image-search-on-unsplash.netlify.app/" target="_blank">
          <Button
            style={{
              background: "#4b0082",
              color: "white",
              width: "100%",
              border: "none",
              fontWeight: "bold",
            }}
            id="btn"
            onMouseOver={mouseover}
            onMouseOut={mouseout}
          >
            Unsplash
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
