import dateFunc from '../tools/dateFunc'

const formatTime = (value) => {
  if (value.length === 13){
    value = +value
  }
  return dateFunc.format(value,'yyyy-MM-dd hh:mm:ss')
};


export default({
  formatTime
})