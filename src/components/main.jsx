import styled from "styled-components";
import BlockQt from "./blockqt";
import RoleSelection from "./roleselection";

const Main = () => {
  return (
    <MainContent>
      <BlockQt/>
      <RoleSelection/>
    </MainContent>
  );
}

const MainContent = styled.div`
  width: 600px;
  margin: 0 auto;
`
  
export default Main;