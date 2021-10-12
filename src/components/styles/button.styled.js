import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};

  &:hover {
    opacity: 0.85;
    transform: scale(0.98);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0.5em 0 1.5em 0;
  }
`;
