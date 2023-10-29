import styled from "styled-components"
import Header from './components/header'
import Main from './components/main'
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header/>
      <Main/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 620px;
  font-family: "NexonGothic";
`

export default App;
