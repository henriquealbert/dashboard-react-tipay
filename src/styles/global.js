import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    html {
      font-size: 12px;
    }
  }
`;
