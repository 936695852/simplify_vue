import Watcher from './Watcher.js'
import { observe } from './Observer.js'

let object = {
  num1: 1,
  num2: 2,
  objectTest: {
    num3: 3,
  },
  num4: 4,
}

observe(object)

let watcher = new Watcher(
  object,
  function () {
    return this.num1 + this.num2
  },
  function (newValue, oldValue) {
    console.log(
      `监听函数，${object.num1} + ${object.num2} + ${object.objectTest.num3} = ${newValue}`
      // `监听函数，${object.num1} + ${object.num2} +  = ${newValue}`
    )
  }
)

object.num1 = 2
object.num2 = 3
