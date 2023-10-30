import styled from "styled-components"
import { useRecoilValue, useRecoilState } from "recoil"
import { TIndex, SelectedCores, TC0 } from "../../recoil/Atoms"

const SubCoreBtn = (props) => {
  const Ti = useRecoilValue(TIndex)
  const [cores, setCores] = useRecoilState(SelectedCores)
  const [tc0, setTc0] = useRecoilState(TC0)
  const tClick = () => {
    const ci = props.index
    const nList = [...cores]
    nList[ci] = (nList[ci]) ? false : true
    let t=0
    let subcores = []
    for (let i=0; i<nList.length; i++) {
      if (nList[i]) {
        t+=1
        subcores.push(i)
      }
    }
    if (t>=2) {
      let jax = [...tc0]
      let vex = [...tc0[Ti]]
      vex.push(subcores)
      jax[Ti] = vex
      setTc0(jax)
      // 중복검사 로직 필요
      setCores([false, false, false, false, false, false, false, false, false, false,])
    } else {
      setCores(nList)
    }
  }

  return (
    (Ti===props.index) ?
    <></>
    :
    <CoreBtnDiv>
      <CoreToggle ts={cores[props.index]} onClick={tClick}>
        {props.value}
      </CoreToggle>
    </CoreBtnDiv>
  )
}

const CoreBtnDiv = styled.div`
  width: 200px;
  height: 40px;
`

const CoreToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 32px;
  background: ${(props) => (props.ts) ? '#909090' : '#ccc'};
  border-radius: 5px;
  cursor: pointer;
  margin: 4px auto;
  font-size: 12px;
`

export default SubCoreBtn