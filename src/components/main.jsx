import styled from "styled-components";
import Blockqt from "./blockqt";
import RoleSelection from "./roleselection";

const Main = () => {
  return (
    <MainContent>
      <Blockqt/>
      <RoleSelection/>
    </MainContent>
  );
}

const MainContent = styled.div`
  width: 600px;
  margin: 0 auto;
`
  
export default Main;