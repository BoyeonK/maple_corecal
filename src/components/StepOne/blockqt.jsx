import styled from "styled-components";
import { SelectedRole } from "../../recoil/Atoms";
import { useRecoilValue } from "recoil";

const BlockQt = () => {
  const Role = useRecoilValue(SelectedRole);

  return (
    <Block>
      <ColorBlock/>
      {
        Role ? 
        <SubsBlock>2. 강화할 코어를 모두 골라 주세요.</SubsBlock>
        :
        <SubsBlock>1. 캐릭터의 직업을 골라 주세요.</SubsBlock>
      }
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

const SubsBlock = styled.div`
  display: flex;
  align-items: center;
`

export default BlockQt;