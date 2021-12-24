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
      cars: [],
      pageNumber: 1,
      itemsPerPage: 10,
      numberOfItems: 350,
      page_prefix: "?page=",
      query: "http://127.0.0.1:8000/api/list_cars",
      searchTerm: 0,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event, value) {
    this.setState({
      pageNumber: value,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNumber != this.state.pageNumber) {
      fetch(
        this.state.query
          .concat(this.state.page_prefix)
          .concat(this.state.pageNumber)
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            cars: result["results"],
          });
        });
    }
  }

  componentDidMount() {
    fetch(
      this.state.query
        .concat(this.state.page_prefix)
        .concat(this.state.pageNumber)
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          cars: result["results"],
        });
      });
  }

  render() {
    console.log(this.state.searchTerm);
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) =>
            this.setState({ searchTerm: event.target.value })
          }
        />

        <div className="cars_wrapper">
          <div className="cardContainer">
            {this.state.cars
              .filter((car) => {
                if (this.state.searchTerm == "") {
                  return car;
                } else if (
                  car.car_brand
                    .toLowerCase()
                    .includes(this.state.searchTerm.toLowerCase())
                ) {
                  return car;
                }
              })
              .map((car, index) => (
                <Card sx={{ maxWidth: 400 }} style={{ margin: "10px" }}>
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
              ))}
          </div>
          <div className="pagination_wrapper">
            <Pagination
              count={Math.round(
                this.state.numberOfItems / parseInt(this.state.itemsPerPage)
              )}
              variant="outlined"
              shape="rounded"
              onChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
