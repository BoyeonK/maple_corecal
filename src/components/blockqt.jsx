import styled from "styled-components";

const blockQt = () => {
  return (
    <Block>
      <ColorBlock/>
      아무노래나일단틀어
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin: 50px 10px 10px 10px;
  height: 50px;
  width: 100%;
`

const ColorBlock = styled.div`
  width: 10px;
  margin-right: 10px;
  background: #9d9d9d;
`

export default blockQt;