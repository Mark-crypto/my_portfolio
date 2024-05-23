import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import property from "../assets/property.png";

function ProfileCard2() {
  function mouseover() {
    document.getElementById("btn2").style.background = "#af40ff";
  }
  function mouseout() {
    document.getElementById("btn2").style.background = "#4b0082";
  }
  return (
    <Card style={{ width: "18rem", background: "#202020", color: "white" }}>
      <Card.Img variant="top" src={property} style={{ height: "200px" }} />
      <Card.Body>
        <a
          href="https://github.com/Mark-crypto/property_management_system"
          target="_blank"
        >
          <Button
            style={{
              background: "#4b0082",
              color: "white",
              width: "100%",
              border: "none",
              fontWeight: "bold",
            }}
            id="btn2"
            onMouseOver={mouseover}
            onMouseOut={mouseout}
          >
            Property Management
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard2;
