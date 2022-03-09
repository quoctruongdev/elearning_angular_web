import * as React from "react";
import { Pagination } from "antd";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListJob } from "../../Admin/JobManagement/_module/actions";
import { actFetchListUser } from "../../Admin/UserManagement/_modules/actions";
import Loader from "../../../components/Loader/Loader";
import JobItem from "../SearchJobPage/JobItem/JobItem";
import "./style.css";
import CardSevices from "../_components/CardSevices";

export default function TotalJobPage(props) {
  let pageSize = 50;
  const data = useSelector((state) => state.listJobReducer.data);
  const loading = useSelector((state) => state.listJobReducer.loading);

  const dataAllUser = useSelector((state) => state.listUserReducer.data);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    current: 1,
    totalPage: data?.length / pageSize,
    minIndex: 0,
    maxIndex: pageSize,
  });

  const handleChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  const handleChangeSize = (state, size) => {
    pageSize = size;
  };

  useEffect(() => {
    dispatch(actFetchListJob());
    dispatch(actFetchListUser());
  }, []);

  const renderListJob = () => {
    return data?.map((item, index) => {
      let UserCreated = dataAllUser?.filter(
        (user) => user._id === item.userCreated
      );
      return (
        index >= state.minIndex &&
        index < state.maxIndex && (
          <CardSevices
            key={index}
            item={item}
            UserCreated={UserCreated}
            loading={loading}
          />
        )
      );
    });
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div
        style={loading ? { height: "900px" } : null}
        className="List__Job mx-5"
      >
        <div className="layout-row header-wrapper">
          <div className="search-header">
            <h1 className="title">List Service </h1>
          </div>
        </div>
        <Grid sx={{ py: 4 }} container spacing={4}>
          {renderListJob()}
        </Grid>
      </div>
      <div className="pagination">
        <Pagination
          defaultPageSize={pageSize}
          current={state.current}
          total={data?.length}
          onChange={handleChange}
          onShowSizeChange={handleChangeSize}
        />
      </div>
    </>
  );
}
