import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function SimpleBackdrop() {
  const [open, setOpen] = React.useState(true);

  setTimeout(() => {
    setOpen(false);
  }, 300);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
export { SimpleBackdrop };
