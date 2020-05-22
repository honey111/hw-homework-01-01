function foo (val) {
  const aa = new Promise((res, rej) => {
      setTimeout(res, 10) 
  }).then(res => {
      return val
  }).then(res => {
      return `${res} lagou`
  }).then(res => {
      return console.log(`${res} I ❥(^_-) U`)
  })
  return aa
}
foo('hello')