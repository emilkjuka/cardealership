import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
    fetch(`http://127.0.0.1:8000/api/car/${location.pathname.substring(6)}`)
      .then((response) => response.json())
      .then((list) => {
        this.setState({ cars: list });
      });
  }

  render() {
    console.log(this.state.cars);
    return (
      <div>
        <div>
          <img src={this.state.cars.car_image}></img>
        </div>
        <div>
          <div>
            <h1>{this.state.cars.car_brand}</h1>
          </div>
          <div>
            <h2>Model: {this.state.cars.car_model}</h2>
          </div>
          <div>
            <h3>Production Year: {this.state.cars.car_production_year}</h3>
          </div>
          <div>
            <h3>Car Type: {this.state.cars.car_type}</h3>
          </div>
          <div>
            <h3>Color: {this.state.cars.car_color}</h3>
          </div>
          <div>
            <h3>Car State: {this.state.cars.car_state}</h3>
          </div>
          <div>
            <h3>Price: {this.state.cars.car_price}</h3>
          </div>
        </div>
        {/* <Card
          sx={{ maxWidth: 400 }}
          style={{ margin: "10px" }}
          key={this.state.cars.id}
        >
          <CardMedia
            component="img"
            alt="carImage"
            height="140"
            image={this.state.cars.car_image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.cars.car_brand} {this.state.cars.car_model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.cars.car_price} <span>&#8364;</span>
            </Typography>
          </CardContent>
        </Card> */}
      </div>
    );
  }
}
