import React, { Component, useEffect, useState } from "react";
import SearchBox from "./SearchBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default class Cars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    };
  }


componentDidMount(){
  fetch("http://127.0.0.1:8000/api/list_cars")
  .then((res)=>res.json())
  .then((result)=>{this.setState({cars: result,});
}
);
}

  render() {
    return (
      <div>
        <div className="cardContainer">
          {this.state.cars.map((car,index)=>
          
              <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }}>
                    <CardMedia
                      component="img"
                      alt="carImage"
                      height="140"
                      image={car.car_image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {car.car_brand} {car.car_model}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {car.car_price} <span>&#8364;</span>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Show More</Button>
                    </CardActions>
                  </Card>
          )}
          </div>
      </div>
    )
      
  }
  }
