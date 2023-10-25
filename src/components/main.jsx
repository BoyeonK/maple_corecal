import styled from "styled-components";
import Blockqt from "./blockqt";

const Main = () => {
  return (
    <MainContent>
      <Blockqt/>
    </MainContent>
  );
}

const MainContent = styled.div`
  width: 600px;
  margin: 0 auto;
`
  
export default Main;