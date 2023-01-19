import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = styled(Box)`
  background: #fff;
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 6px;
  margin-top: 12px
  margin-right: 7px;
  display: flex;
`;
const search = () => {
  return (
    <SearchComponent>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchComponent>
  );
};

export default search;
