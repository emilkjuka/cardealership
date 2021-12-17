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
      error: null,
      isLoaded: false,
      cars: [],
      minValue: 0,
      maxValue: 10,
      itemsPerPage: 10,
    };
  }
  handleSelectChange = (event) => {
    this.setState({
      maxValue: event.target.value,
      itemsPerPage: event.target.value
    });
  };

  handleIndexChange = (event, value) => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 10,
      });
    } else {
      this.setState({
        minValue: value * this.state.itemsPerPage,
        maxValue: (value + 1) * this.state.itemsPerPage,
      });
    }
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/list_cars")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cars: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, cars } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <SearchBox />
          <div className="cards_wrapper">
            {cars.length > 0 &&
              cars
                .slice(this.state.minValue, this.state.maxValue)
                .map((car) => (
                  <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Audi_A5_Sportback_F5_IMG_2835.jpg/1200px-Audi_A5_Sportback_F5_IMG_2835.jpg"
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
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                ))}
          </div>
          <Pagination
            count={Math.round(cars.length / this.state.itemsPerPage)}
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            total={cars.length}
            onChange={this.handleIndexChange}
          />
          <Select label="itemsPerPage" onChange={this.handleSelectChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </div>
      );
    }
  }
}
