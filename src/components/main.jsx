import styled from "styled-components";
import BlockQt from "./blockqt";
import RoleSelection from "./roleselection";
import CoreSelection from "./coreselection";

const Main = () => {
  return (
    <MainContent>
      <BlockQt/>
      <RoleSelection/>
      <CoreSelection/>
    </MainContent>
  );
}

const MainContent = styled.div`
  width: 600px;
  margin: 0 auto;
`
  
export default Main;