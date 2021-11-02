import React, {Component} from "react"
import Taro from "@tarojs/taro"
import {View, Text, Image, Input} from "@tarojs/components"
import "./index.less"
import ic_0 from "../image/ic_0.jpg"
import ic_1 from "../image/ic_1.jpg"
import ic_2 from "../image/ic_2.jpg"
import ic_3 from "../image/ic_3.jpg"
import ic_4 from "../image/ic_4.jpg"
import ic_5 from "../image/ic_5.jpg"
import ic_6 from "../image/ic_6.jpg"
import ic_right_tel from "../image/ic_right_tel.png"
import ic_bottom_right from "../image/ic_bottom_right.png"
import ic_bottom_left from "../image/ic_bottom_left.png"


export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    }
  }

  onBtnClick(name, phone) {

    if (name.length < 1) {
      Taro.showToast({
        title: "设备名称不允许为空",
        icon: "none"
      })
      return;
    }

    if (phone.length < 1 || phone.length != 11) {
      Taro.showToast({
        title: "请输入正确的手机号",
        icon: "none"
      })

      return;
    }
    Taro.request({
      url: "http://www.ceosta.org/shebei_/form/",
      method: "POST",
      data: {
        "name": name,
        "tel": phone,
        "title": "这个参数是表单提交来源页的标题",
        "url": "这个参数是表单提交来源页的链接地址",
        "action": "post",
        "diyid": "1",
        "enews": "MAddInfo",
        "do": "2",
        "classid": "2",
        "id": "0",
        "filepass": "1559224317",
        "mid": "8",
        "fields": "name,multitext;tel,text;title,multitext;url,multitext;time,text;ip,text",
        "keys": "7dd018526bd602824bac5bf4ded03edb",

      },
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      success: function (res) {
        if (res.data.toString().indexOf("成功") != -1) {
          Taro.showToast({
            title: "成功"
          })
        } else {
          Taro.showToast({
            title: "您输入的手机号长度有误，请核对后输入",
            icon: "none"
          })

        }

      }
    })

    this.setState({
      showDialog: false
    })
  }


  onTelClick() {
    Taro.makePhoneCall({
      phoneNumber: '10086' //仅为示例，并非真实的电话号码
    })

  }


  onShowDialog() {
    this.setState({
      showDialog: true
    })

  }

  setInputFocus(id) {
    document.getElementById(id).setAttribute("style", "border: 1px solid #ff5503;");
  }

  setInputBlur(id) {
    document.getElementById(id).setAttribute("style", "border: 1px solid #aaaaaa;");
  }

  render() {
    let {showDialog} = this.state
    return (
      <View className="page-index">
        <Image mode="widthFix" className="page-image" src={ic_0}/>

        <View className="form-view">
          <Text className="info-text">测测您的二手设备<Text className="red-text">值</Text>多少钱</Text>

          <Text className="input-title" >设备名称<Text className="red-text"> *</Text></Text>
          <Input className="page-input" onFocus={(event => {
            this.setInputFocus("name-1")
          })} onBlur={event => {
            this.setInputBlur(("name-1"))
          }} id="name-1" placeholder="您需要回收什么设备"/>
          <Text className="input-title">联系电话<Text className="red-text"> *</Text></Text>
          <Input className="page-input" id="phone-1" placeholder="请输入手机号" onFocus={(event => {
            this.setInputFocus("phone-1")
          })} onBlur={event => {
            this.setInputBlur(("phone-1"))
          }}/>

          <View className="page-btn"
                onClick={() => this.onBtnClick(document.getElementById("name-1").value, document.getElementById("phone-1").value)}>立刻获取回收报价</View>
        </View>
        <Image mode="widthFix" className="page-image" src={ic_2}/>
        <Image mode="widthFix" className="page-image" src={ic_1}/>
        <Image mode="widthFix" className="page-image" src={ic_3}/>

        <View className="form-view">
          <Text className="info-text">测测您的二手设备<Text className="red-text">值</Text>多少钱</Text>

          <Text className="input-title">设备名称<Text className="red-text"> *</Text></Text>
          <Input className="page-input" id="name-2" placeholder="您需要回收什么设备" onFocus={(event => {
            this.setInputFocus("name-2")
          })} onBlur={event => {
            this.setInputBlur(("name-2"))
          }}/>
          <Text className="input-title">联系电话<Text className="red-text"> *</Text></Text>
          <Input className="page-input" id="phone-2" placeholder="请输入手机号"
                 onFocus={(event => {
                   this.setInputFocus("phone-2")
                 })} onBlur={event => {
            this.setInputBlur(("phone-2"))
          }}/>

          <View className="page-btn"
                onClick={() => this.onBtnClick(document.getElementById("name-2").value, document.getElementById("phone-2").value)}>立刻获取回收报价</View>
        </View>
        <Image mode="widthFix" className="page-image" src={ic_4}/>
        <Image mode="widthFix" className="page-image" src={ic_5}/>

        <View className="form-view">
          <Text className="info-text">测测您的二手设备<Text className="red-text">值</Text>多少钱</Text>

          <Text className="input-title">设备名称<Text className="red-text"> *</Text></Text>
          <Input className="page-input" id="name-3" placeholder="您需要回收什么设备" onFocus={(event => {
            this.setInputFocus("name-3")
          })} onBlur={event => {
            this.setInputBlur(("name-3"))
          }}/>
          <Text className="input-title">联系电话<Text className="red-text"> *</Text></Text>
          <Input className="page-input" id="phone-3" placeholder="请输入手机号" onFocus={(event => {
            this.setInputFocus("phone-3")
          })} onBlur={event => {
            this.setInputBlur(("phone-3"))
          }}/>

          <View className="page-btn"
                onClick={() => this.onBtnClick(document.getElementById("name-3").value, document.getElementById("phone-3").value)}>立刻获取回收报价</View>
        </View>
        <Image mode="widthFix" className="page-image" src={ic_6}/>

        <View className='bottom-view'>

          <Image src={ic_bottom_left} onClick={() => {
            this.onShowDialog()
          }}/>

          <Image src={ic_bottom_right} onClick={() => {
            this.onTelClick()
          }}/>
        </View>

        <Image className="right-tel" src={ic_right_tel} onClick={() => {
          this.onTelClick()
        }}/>

        {
          showDialog ?
            <View className='dialog-view'>

              <View className='empty-view' onClick={() => {
                this.setState({
                  showDialog: false
                })
              }
              }></View>
              <View className="form-view">
                <Text className="info-text">测测您的二手设备值多少钱</Text>

                <Input className="page-input" id="name-4"  placeholder="您需要回收什么设备(必填)" onFocus={(event => {
                  this.setInputFocus("name-4")
                })} onBlur={event => {
                  this.setInputBlur(("name-4"))
                }}/>
                <Input className="page-input" id="phone-4" placeholder="请输入手机号(必填)" onFocus={(event => {
                  this.setInputFocus("phone-4")
                })} onBlur={event => {
                  this.setInputBlur(("phone-4"))
                }}/>

                <View className="page-btn"
                      onClick={() => this.onBtnClick(document.getElementById("name-4").value, document.getElementById("phone-4").value)}>立刻获取回收报价</View>
              </View>

            </View>
            :
            ""
        }


      </View>
    )
  }
}
