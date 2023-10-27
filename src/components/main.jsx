import styled from "styled-components";
import StepOne from "./stepone";

const Main = () => (
  <MainContent>
    <StepOne/>
  </MainContent>
);

const MainContent = styled.div`
  width: 600px;
  margin: 0 auto;
`
  
export default Main;