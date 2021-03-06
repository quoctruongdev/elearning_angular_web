import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import "./style.css";

export default function MarketPlace() {
  const data = useSelector((state) => state.categoriesMainReducer.data);
  const loading = useSelector((state) => state.categoriesMainReducer.loading);
  const newData = data?.filter((item) => item?.__v >= 10);

  const renderData = () => {
    return newData?.map((item) => {
      return (
        <>
          <Grid md={3} lg={2.4} item xs={6} sm={4}>
            <li key={item?.name}>
              <NavLink to={`/list-type-service/${item?._id}`}>
                <img
                  src={`/asset/img/marketplace/${item?.name}.svg`}
                  alt={item?.name}
                  loading="lazy"
                />
                {item?.name}
              </NavLink>
            </li>
          </Grid>
        </>
      );
    });
  };

  return (
    <div className="main-categories lohp-row max-width-container px-5">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { md: 36, xs: 28 },
          color: " #404145",
          mb: 5,
        }}
      >
        Explore the marketplace
      </Typography>
      <ul className="categories-list">{renderData()}</ul>
    </div>
  );
}
