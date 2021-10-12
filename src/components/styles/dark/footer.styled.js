import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding-bottom: 60px;

  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
  img {
    padding-top: 30px;
  }
`;
