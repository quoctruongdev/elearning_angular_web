import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Skeleton } from "@mui/material";

export default function BadgeStyle({ loading, data, styles }) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      {loading ? (
        <Skeleton variant="circular" width={32} height={32} />
      ) : (
        <Avatar
          sx={{
            bgcolor: deepOrange[500],
            width: styles,
            height: styles,
            cursor: "pointer",
            textTransform: "uppercase",
          }}
          alt={data?.name?.toUpperCase()}
          src={data?.avatar ? data?.avatar : "/broken-image.jpg"}
        />
      )}
    </StyledBadge>
  );
}
