import * as React from "react";
import { NavLink } from "react-router-dom";
import ButtonStyle from "../../components/Material UI/ButtonStyle";
import { Select } from "antd";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";

const Option = Select;
export default function PageNotFound() {
  return (
    <>
      <section className=" Page__notFound flex items-center h-full p-16  ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-coolGray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <NavLink
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-coolGray-50 "
            >
              <ButtonStyle> Back to homepage</ButtonStyle>
            </NavLink>
          </div>
        </div>
      </section>
      <FormControl
        variant="outlined"
        margin={"1"}
        style={{ width: 400, marginBottom: 32 }}
      >
        {/* <InputLabel id="test-select-label">{formik.values.gender}</InputLabel> */}
        <Select
          style={{ width: 400 }}
          variant="outlined"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          // onChange={formik.handleChange}
          // value={formik.values.gender}
          // value={data?.gender}
          labelId="test-select-label"
          label={"Label1233333"}
          open
        >
          {/* <MenuItem key={1} value="true">
                    Male
                  </MenuItem>
                  <MenuItem key={2} value="false">
                    Female
                  </MenuItem> */}
          <Option value={true} key={1}>
            Male
          </Option>
          <Option value={false} key={2}>
            Female
          </Option>
        </Select>
      </FormControl>
    </>
  );
}

// import React from "react";

// import { Formik, Field, Form } from "formik";
// import { actFetchEditUser } from "../Admin/UserManagement/UpdateUser/Edit/_modules/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { useFormik } from "formik";

// export default function PageNotFound() {
//   const data = useSelector((state) => state.editUserReducer.data);
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     enableReinitialize: true,

//     initialValues: {
//       gender: data?.gender,
//     },
//     onSubmit: (values) => {
//       let formData = new FormData();
//       dispatch(actFetchEditUser(formData));
//     },
//   });

//   // const [items, setItems] = useState(["jack", "lucy"]);
//   // const [name, setName] = useState("");

//   useEffect(() => {
//     dispatch(actFetchEditUser("619311e5aef344001cec20e5"));
//   }, []);

//   return (

//   );
// }