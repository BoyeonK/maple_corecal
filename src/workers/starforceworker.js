const starforceWorkerCode = `
  self.onmessage = (e) => {
    let data
    const url = "https://open.api.nexon.com/maplestory/v1/history/starforce"
    const qString = new URLSearchParams(e.data.params).toString()
    const fullUrl = url + "?" + qString
    const headers = e.data.headers
    fetch(fullUrl, {headers}).then((res) => res.json()).then((res) => {
      data = res
      self.postMessage(data)
    }).catch((err) => {
      console.log(err)
    })
  }
`

const blob = new Blob([starforceWorkerCode], { type: "application/javascript" })
export const makeSWorker = () => (new Worker(URL.createObjectURL(blob)))