import React, { Component } from "react"
import uuid4 from "uuid4"

// 这个类的定位是数据结构，还是组件
export default class {
  constructor(ele) {
    this.id = uuid4()
    this.title = "title"
    this.content = "content"
  }

  // render() {
  //   return (
  //     <div>
  //       <div>{this.title}</div>
  //       <div>{this.content}</div>
  //     </div>
  //   )
  // }
}
