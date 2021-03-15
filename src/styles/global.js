import { css } from '@emotion/react';

export const GlobalStyles = css`
  html {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }

  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #c1c1c1;
    opacity: 0.3;
  }
`;
