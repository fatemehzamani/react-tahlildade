import styled from "styled-components";

export const Box = styled.div`
  padding: 1rem 0;
  background: #151515;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 1rem;
  text-decoration: none;
  line-height: 24px;
  border-bottom: #151515 2px solid;
  text-align: center;
  &:hover {
    border-bottom: rgb(236, 233, 178) 2px solid;
  }
`;

export const Heading = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
`;
