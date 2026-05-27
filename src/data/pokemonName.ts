import zhNames from './zh-hant.json'
import enNames from './en.json'

const nameZhToEn:Record<string,string> = {}
zhNames.forEach((value,index)=>{
  nameZhToEn[value] = enNames[index]
})

export default nameZhToEn