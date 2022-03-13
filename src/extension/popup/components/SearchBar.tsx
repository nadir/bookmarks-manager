import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;

  width: 100%;
  height: 40px;
  color: #bababa;
  background: #121010;
  box-shadow: 0px 0.5px 0px #3a3a3a;
  border-bottom-left-radius: 5px;
  font-size: 16px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <IoSearch></IoSearch>
      Search for items...
    </SearchBarContainer>
  );
};

export default SearchBar;
