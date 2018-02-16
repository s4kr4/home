const hot = () => {
  fetch('/api/aircon/hot')
    .then(res => {
      return res.text()
    })
    .then(body => {
      console.log(body);
    })
}

const cool = () => {
  fetch('/api/aircon/cool')
    .then(res => {
      return res.text()
    })
    .then(body => {
      console.log(body);
    })
}

const off = () => {
  fetch('/api/aircon/off')
    .then(res => {
      return res.text()
    })
    .then(body => {
      console.log(body);
    })
}
