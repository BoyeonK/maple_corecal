import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { SCores, TCores, Inventory } from "../../recoil/Atoms";

const CoreCal = () => {
  const tc = useRecoilValue(TCores)
  const sc = useRecoilValue(SCores)
  const cores = useRecoilValue(Inventory)

  const clk = () => {
    const mDepth = tc.length
    let acc = []
    let accCores = []
    let isFound = false
    for (let i=0; i<mDepth; i++) {acc.push(0)}

    const BFS = (depth) => {
      if (depth>=mDepth) {
        isFound=true
        accCores.forEach((v, i) => {
          console.log(sc[v[0]]+'와 '+sc[v[1]]+'의 ' +tc[i])
        })
      }
      else if(!isFound) {
        cores[depth].forEach((e) => {
          acc[e[0]]+=1
          acc[e[1]]+=1
          if (acc[e[0]]<=2 && acc[e[1]]<=2) {
            accCores.push(e)
            BFS(depth+1)
            accCores.pop()
          }
          acc[e[0]]-=1
          acc[e[1]]-=1
        })
      }
    }
    BFS(0)
  }

  return (
    <CalBtnDiv>
      <CalBtn onClick={clk}>
        버튼인가보다
      </CalBtn>
    </CalBtnDiv>
  )
}

const CalBtnDiv = styled.div`
  width: 100px;
  height: 40px;
`

const CalBtn = styled.div`
  margin: 4px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  background: #ccc;
  border-radius: 3px;
  cursor: pointer;
`

export default CoreCal