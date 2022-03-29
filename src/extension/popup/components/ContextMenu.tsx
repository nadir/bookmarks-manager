import styled, { keyframes } from 'styled-components';
import { ControlledMenu as MenuInner } from '@szhsin/react-menu';
import {
  menuSelector,
  menuItemSelector,
  menuDividerSelector,
} from '@szhsin/react-menu/style-utils';
import '@szhsin/react-menu/dist/core.css';

const menuShow = keyframes`
  from {
    opacity: 0;
  }
`;
const menuHide = keyframes`
  to {
    opacity: 0;
  }
`;

const Menu = styled(MenuInner)`
  ${menuSelector.name} {
    font-size: 13px;
    color: white;
    user-select: none;
    box-shadow: 0px 0px 20px 1px rgb(0 0 0 / 58%);
    background-color: #121010;
    border-radius: 6px;
    border: 0.1px solid #222222;
    padding: 6px;
    min-width: 10rem;
  }

  ${menuSelector.stateOpening} {
    animation: ${menuShow} 0.15s ease-out;
  }

  // NOTE: animation-fill-mode: forwards is required to
  // prevent flickering with React 18 createRoot()
  ${menuSelector.stateClosing} {
    animation: ${menuHide} 0.2s ease-out forwards;
  }

  ${menuItemSelector.name} {
    border-radius: 6px;
    padding: 0.375rem 0.625rem;
  }

  ${menuItemSelector.hover} {
    color: #fff;
    background-color: #2c2c2c;
  }

  ${menuDividerSelector.name} {
    margin: 0.5rem 0.625rem;
    background-color: #242424;
  }
`;

export default Menu;
