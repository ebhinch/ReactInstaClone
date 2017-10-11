import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const NavBar = FlexRow.extend`

  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 5px;
  background-color: white;
  border-bottom: .5px solid grey;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px grey;
  `
const SearchBar = styled.div`
  display: flex;

`

const IconBar = styled.div`
  display: flex;
`


class Navbar extends Component {
  render() {
    return (
      <NavBar>

        <p><FaInstagram /> | Instaclone</p>

        <SearchBar>
          <p><FaSearch /><input type="text" /></p>
        </SearchBar>

        <IconBar>
          <p>
            <FaCompass />
            <FaHeartO />
            <FaUser />
          </p>

        </IconBar>

      </NavBar>

    );
  }
}

export default Navbar

