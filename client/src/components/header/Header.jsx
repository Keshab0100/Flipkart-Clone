import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButtons from "./CustomButtons";
import Search from "./Search";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const LinkTag = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  color: #fff;
`;
const PlusLogo = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
const header = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
          <LinkTag to={`/`}>
              <img src={logoURL} style={{ width: 75 }}></img>
              <Box style={{ display: "flex" }}>
                <SubHeading>
                  Explore&nbsp;
                  <Box component="span" style={{ color: "#FFE500" }}>
                    Plus
                  </Box>
                </SubHeading>
                <PlusLogo src={subURL} />
              </Box>
          </LinkTag>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};
export default header;
