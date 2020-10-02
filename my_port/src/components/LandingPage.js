import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
const LandingPage = (props) => {
  return (
    <div className="landing-grid">
      <Card
        shadow={0}
        style={{
          width: "900px",
          height: "600px",
          margin: "auto",
          background:
            "url(https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-374.jpg?size=626&ext=jpg) center / cover",
        }}
      >
        <CardTitle
          className="card-title"
          style={{
            color: "dark red",
            height: "176px",
          }}
        >
          Welcome
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis pellentesque lacus eleifend lacinia...
        </CardText>
        <CardActions border>
          <Button colored>
            {" "}
            <a
              href={`https://gitconnected.com/HarrisonMS/resume`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View Résumé</span>
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LandingPage;
