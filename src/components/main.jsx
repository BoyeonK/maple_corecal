import styled from "styled-components";
import blockQt from "./blockqt";
import roleSelection from "./roleselection";

const Main = () => {
  return (
    <MainContent>
      <blockQt/>
      <roleSelection/>
    </MainContent>
  );
}

const MainContent = styled.div`
  width: 600px;
  margin: 0 auto;
`
  
export default Main;