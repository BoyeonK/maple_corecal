import styled from "styled-components"
import MyCore from "./mycore"
import { useRecoilValue } from "recoil"
import { TCores, SCores, TC0 } from "../../recoil/Atoms"

const MyCores = () => {
  const sname = useRecoilValue(TCores)
  const smodi = useRecoilValue(SCores)
  const tc0 = useRecoilValue(TC0)

  return (
    <MyCoresDiv>
      <MyCoresTitle>
        내 코어
      </MyCoresTitle>
      <MyCoresContent>
        {tc0.map((main, i) => (
          <div key={i}>
            {main.map((subs, j) => (
              <MyCore key={j} first={smodi[subs[0]]} second={smodi[subs[1]]} main={sname[i]}/>
            ))}
          </div>
        ))}
      </MyCoresContent>
    </MyCoresDiv>
  )
}

const MyCoresDiv = styled.div`
  width: 600px;
  margin: 35px 10px 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
`

const MyCoresTitle = styled.div`
  display: flex;
  align-items: center;
  width: 560px;
  height: 40px;
  margin: 5px auto;
  border-bottom: 1px solid #ccc;
`

const MyCoresContent = styled.div`
  margin: 0 0 15px;
`

export default MyCores