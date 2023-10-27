import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { SelectedCores } from "../../recoil/Atoms";

import { useSetRecoilState } from "recoil";

const CoreCompleteBtn = () => {
  const cores = useRecoilValue(SelectedCores);
  const testtt = useSetRecoilState(SelectedCores)
  const test = false;
  const cClick = () => {
    let i = 0;
    cores.forEach((e) => { if(e) i += 1; })
    if (i>2) {
      testtt([true, true, true, true, true, true, true, true, true, true]);
    }
    else {
      testtt([false,false,false,false,false,false,false,false,false,false,]);
    }
  }

  return (
    <CoreBtnDiv>
      <CoreToggle test={test} onClick={cClick}>
        선택 완료
      </CoreToggle>
    </CoreBtnDiv>
  )
};

const CoreBtnDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: ${(props) => (props.test) ? '9px 12px 8px' : 'auto'};
  background: #ccc;
  border-radius: 5px;
  cursor: pointer;
`

export default CoreCompleteBtn;