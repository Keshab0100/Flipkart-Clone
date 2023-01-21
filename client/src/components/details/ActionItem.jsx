import {
  FlashOn as FlashOnIcon,
  ShoppingCart as Cart,
} from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import React from "react";

const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 0px 0px 80px',
    [theme.breakpoints.down('lg')]:{
        padding: '20px 40px'
    }

}))
const Image = styled("img")({
  padding : "15px",
});

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    borderRadius: '2px',
    height: '50px',
    color: '#fff',
    [theme.breakpoints.down('lg')]:{
        width: '46%'
    }
}))


export const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0", width: "90%", }}>
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb641b" }}>
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};
