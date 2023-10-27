import styled from "styled-components";

const BlockQt = () => (
  <Block>
    <ColorBlock/>
      <SubsBlock>
        가지고 계신 유효 3줄 코어를 모두 추가해 주세요.<br/>
        유효코어의 메인 스킬을 고르고 서브스킬 2개를 클릭하면 해당 코어가 추가됩니다.
      </SubsBlock>
  </Block>
);


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

const SubsBlock = styled.div`
  display: flex;
  align-items: center;
`

export default BlockQt;