const starforceWorkerCode = `
  self.onmessage = function(e) {
    const count = e.data.params.count
    const date = e.data.params.date
    const key = e.data.headers['x-nxopen-api-key']
    console.log("Count:", count)
    console.log("Date:", date)
    console.log("Key:", key)
    self.postMessage("Hello ");
  }
`

const blob = new Blob([starforceWorkerCode], { type: "application/javascript" })
export const makeSWorker = () => (new Worker(URL.createObjectURL(blob)))