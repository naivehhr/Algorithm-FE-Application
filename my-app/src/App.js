import React, { Component } from "react"
import random from "random"
import randomColor from "random-color"
import logo from "./logo.svg"
import "./App.css"
import Item from "./Item"

// const item = <div className="item">我是一个区域</div>
class App extends Component {
  state = {
    columeData: [],
    dataView: [],
    columeHeight: {
      c1: 0,
      c2: 0,
      c3: 0,
      c4: 0
    }
  }

  componentDidMount = () => {
    // const item = new Item()
    // item.height = "100px"
    // console.log(item)
    this.makeData()
  }

  // componentWillUpdate = () => {
  //   const ele1 = document.getElementById("c1")
  //   console.log('ele1.scrollHeight', ele1.scrollHeight)
  // }

  componentDidUpdate = () => {}

  makeData = () => {
    const dataView = []
    for (let index = 0; index < 12; index++) {
      const height = random.int(50, 150)
      const bgColor = randomColor().hexString()
      const itemView = (
        <div className="item" style={{ height, backgroundColor: bgColor }}>
          我是一个区域 {height}
        </div>
      )
      dataView.push(itemView)
    }
    const columeData = {
      1: dataView.slice(0, 3),
      2: dataView.slice(3, 6),
      3: dataView.slice(6, 9),
      4: dataView.slice(9)
    }
    this.setState({ dataView, columeData }, () => {
     
      /**
       * 这里需要动态分配了
       * 计算四个列表中长度最短的，然后追加到后面？
       * 不对，不是一个一个的，怎么能获取七天高度？
       * 先渲染出来再重新排序？
       */
      const { dataView } = this.state
      // 能拿到每个的高度，可重新刷页面
      console.log("dataView", dataView[0].props.style.height)


      // 更新列高度
      const ele1 = document.getElementById("c1")
      const ele2 = document.getElementById("c2")
      const ele3 = document.getElementById("c3")
      const ele4 = document.getElementById("c4")
      const columeHeight = {
        c1: ele1.scrollHeight,
        c2: ele2.scrollHeight,
        c3: ele3.scrollHeight,
        c4: ele4.scrollHeight
      }
      // console.log("columeHeight", columeHeight)
      // 这里要更新每列的高度

      const columeData = {
        1: dataView.slice(0, 2),
        2: dataView.slice(2, 6),
        3: dataView.slice(6, 9),
        4: dataView.slice(9)
      }
      setTimeout(() => {
        // this.setState({ columeData })
      }, 2000)
    })
  }

  render() {
    const { columeData } = this.state

    return (
      <div className="App">
        <div className="main">
          <div className="column">
            <div id="c1">{columeData[1]}</div>
          </div>
          <div className="column">
            <div id="c2">{columeData[2]}</div>
          </div>
          <div className="column">
            <div id="c3">{columeData[3]}</div>
          </div>
          <div className="column">
            <div id="c4">{columeData[4]}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
