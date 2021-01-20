import { css } from '@emotion/react';
import breakpoints from './foundations/breakpoints';

export const GlobalStyles = css`
  html {
    font-size: 1rem;
  }

  @media only screen and (max-width: ${breakpoints['xxl']}) {
    html {
      font-size: 12px;
    }
  }
`;
