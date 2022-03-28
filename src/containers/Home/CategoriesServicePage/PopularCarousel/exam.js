import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "antd";
import {
  CardMedia,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { actFetchSubTypeJob } from "../../ListTypeJobPage/modules/_modulesSubtypeJob/actions";

const MyCarousel = ({ id, name }) => {
  const dispatch = useDispatch();
  const slider = useRef(null);
  const dataList = useSelector((state) => state.listSubTypeReducer.data);
  const [slideNumber, setSlideNumber] = useState(0);
  useEffect(() => {
    dispatch(actFetchSubTypeJob(id));
  }, [id]);
  console.log(slideNumber);

  const settings = {
    className: "slider variable-width",
    dots: false,
    speed: 500,
    slidesToShow: 5,
    // slidesToScroll: 5,
    swipeToSlide: true,
  };

  const styleArrow = {
    bgcolor: "#fff",
    width: 32,
    height: 32,
    border: "1px solid #e4e5e7",
  };
  const styleItem = {
    bgcolor: "#fff",
    border: "1px solid #efeff0",
    minWidth: "fit-content",
    borderRadius: "12px",
    cursor: "pointer",
    padding: "16px",
    fontWeight: 600,
    ":hover": { color: "#1dbf73" },
    boxShadow:
      "0 0.14px 2.29266px rgb(0 0 0 / 3%), 0 0.37px 4.42626px rgb(0 0 0 / 5%), 0 3px 7px rgb(0 0 0 / 9%)",
  };

  function renderListItem() {
    return dataList?.subTypeJobs?.slice(0, 10).map((item, index) => {
      return (
        <List
          key={index}
          sx={{
            padding: " 8px",
          }}
        >
          <ListItem sx={styleItem}>
            <ListItemAvatar>
              <CardMedia
                sx={{ width: 48 }}
                component={"img"}
                image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png"
                srcSet="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png"
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                whiteSpace: "nowrap",
                ":hover": { color: "#1dbf73" },
              }}
              primaryTypographyProps={{
                sx: { fontWeight: 600, fontSize: 16 },
              }}
              primary={item?.name}
            />
            <ArrowForwardIcon sx={{ pl: 0.5, ml: 0.5 }} fontSize="small" />
          </ListItem>
        </List>
      );
    });
  }

  return (
    <>
      <Stack mb={2} justifyContent="space-between" direction="row">
        <Typography variant="h5">Most Popular in {name}</Typography>
        <ListItem sx={{ width: "100px", gap: "12px" }}>
          <IconButton
            sx={styleArrow}
            disabled={slider?.current?.goTo(0)}
            onClick={(event) => {
              // slider.current.prev();
              slider.current.goTo(0);
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            disabled={slider?.current?.goTo(10)}
            sx={styleArrow}
            onClick={() => {
              // slider.current.next();
              slider.current.goTo(10);
              console.log(slider.current);
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </ListItem>
      </Stack>

      <Carousel
        style={{
          maxWidth: "1400px",
          padding: "0 32px ",
          margin: "0 18px",
        }}
        ref={slider}
        {...settings}
      >
        {renderListItem()}
      </Carousel>
    </>
  );
};
export default MyCarousel;
