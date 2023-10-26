import styled from "styled-components";
import { useRecoilState } from "recoil";
import { SelectedCores } from "../../recoil/Atoms";

const CoreBtn = (props) => {
  const [cores, setCores] = useRecoilState(SelectedCores);
  const tClick = () => {
    const ci = props.index;
    const nList = [...cores];
    nList[ci] = (nList[ci]) ? false : true;
    setCores(nList);
  }

  return (
    <CoreBtnDiv>
      <CoreToggle toggle={cores[props.index]} onClick={tClick}>
        {props.value}
      </CoreToggle>
    </CoreBtnDiv>
  );
}

const CoreBtnDiv = styled.div`
  width: 300px;
  height: 60px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 46px;
  margin: ${(props) => (props.toggle) ? '9px 12px 8px' : '7px auto'};
  background: ${(props) => (props.toggle) ? '#909090' : '#ccc'};
  border-radius: 5px;
  cursor: pointer;
`

export default CoreBtn;