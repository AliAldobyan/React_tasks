import styled from "styled-components";

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const MovieWrapper = styled.div`
  margin-top: 70px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
  p {
    text-align: center;
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const HeaderWrapper = styled.div`
  margin-top: 10px;
  h2 {
    text-align: center;
    color: ${(props) => props.theme.secondaryColor};
  }
`;
