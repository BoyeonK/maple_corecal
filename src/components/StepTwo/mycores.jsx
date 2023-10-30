import styled from "styled-components"
import MyCore from "./mycore"
import CoreCal from "./corecal"
import { useRecoilValue } from "recoil"
import { TCores, SCores, Inventory } from "../../recoil/Atoms"

const MyCores = () => {
  const sname = useRecoilValue(TCores)
  const smodi = useRecoilValue(SCores)
  const inventory = useRecoilValue(Inventory)

  return (
    <MyCoresDiv>
      <MyCoresTitle>
        내 코어
        <CoreCal></CoreCal>
      </MyCoresTitle>
      <MyCoresContent>
        {inventory.map((main, i) => (
          <div key={i}>
            {main.map((subs, j) => (
              <MyCore key={j} i={i} j={j} first={smodi[subs[0]]} second={smodi[subs[1]]} main={sname[i]}/>
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
  justify-content: space-between;
  width: 560px;
  height: 40px;
  margin: 5px auto;
  border-bottom: 1px solid #ccc;
`

const MyCoresContent = styled.div`
  margin: 0 0 15px;
`

export default MyCores