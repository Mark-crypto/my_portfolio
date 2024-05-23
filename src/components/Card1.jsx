import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import backroads from "../assets/backroads.png";

function ProfileCard1() {
  function mouseover() {
    document.getElementById("btn1").style.background = "#af40ff";
  }
  function mouseout() {
    document.getElementById("btn1").style.background = "#4b0082";
  }
  return (
    <Card style={{ width: "18rem", background: "#202020", color: "white" }}>
      <Card.Img variant="top" src={backroads} style={{ height: "200px" }} />
      <Card.Body>
        <a href="https://backroads-sec-app.netlify.app/" target="_blank">
          <Button
            style={{
              background: "#4b0082",
              color: "white",
              width: "100%",
              border: "none",
              fontWeight: "bold",
            }}
            id="btn1"
            onMouseOver={mouseover}
            onMouseOut={mouseout}
          >
            Backroads
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard1;
