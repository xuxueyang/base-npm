import {
    Notification,
    Loading,
    MessageBox,
    Message
  } from "element-ui";
  import {
    forEach,
    //hasOneOf,
    //objEqual
  } from './tools'
  // import basic from './basic';
  // 公共功能
  export default {
    // 判断对象是否有空值
    objEqualNull(obj) {
      for (let str in obj) {
        if (typeof obj[str] == "string" && obj[str] == "") {
          return str;
        } else if (obj[str] instanceof Array && obj[str].length == 0) {
          return str;
        }
      }
    },
    // 警告提示框
    // text ： 显示内容
    // type: 提示框类型  success, warning, info, error
    // warning(text, type,time) {
    //   // this.$vux.toast.text(text, 'top')
    //   let t = time?time:'2000'
    //   Notification({
    //     message: text,
    //     type: type,
    //     duration:t,
    //     position: 'top-right'
    //   });
    // },
    warning(text, type, time) {
      let t = time ? time : "2000";
      Message({
        showClose: true,
        message: text,
        type: type,
        duration: t
      });
    },
    //弹出confirm框
    confirm(title, txt, btn1, btn2, success, err) {
      MessageBox.confirm(txt, title, {
        confirmButtonText: btn1,
        cancelButtonText: btn2,
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: success
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: err
          });
        });
    },
    // 获取今天日期，并且格式化
    getFormatDate(fmt, date) {
      if (date == null) {
        date = new Date();
      }
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
    // 获取星期信息
    getWeekday() {
      let weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      let d = new Date();
      let n = d.getDay();
      return weekday[n];
    },
    // 获取加载动画对象
    //let loadingInstance = $util.getLoading(); // 加载动画
    //loadingInstance.close(); // 关闭加载动画
    getLoading() {
      let options = [
        {
          fullscreen: true
        }
      ];
      return Loading.service(options);
    },
    // 数组去重
    unique(array) {
      var n = {},
        r = [],
        len = array.length,
        val,
        type;
      for (var i = 0; i < len; i++) {
        val = array[i];
        type = typeof val;
        if (!n[val]) {
          n[val] = [type];
          r.push(val);
        } else if (n[val].indexOf(type) < 0) {
          n[val].push(type);
          r.push(val);
        }
      }
      return r;
    },
    //json参数转换成网络请求所需的数组
    shiftParams(data) {
      let condition = [];
      if (data != null) {
        for (let key in data) {
          let obj = {
            column: key,
            value: data[key]
          };
          condition.push(obj);
        }
      }
      return condition;
    },
    // 深度拷贝
    copy(obj) {
      var newobj = {};
      for (var attr in obj) {
        if (
          obj[attr] != null &&
          obj[attr] != "" &&
          !isNaN(obj[attr]) &&
          obj[attr].length == null
        ) {
          newobj[attr] = `${obj[attr]}`;
        } else {
          newobj[attr] = obj[attr];
        }
      }
      return newobj;
    },
    /**
     * 拉平树结构
     * @param config 数据
     * @param array 空数组
     */
    getTreeToArray(config, array) {
      let element = this;
      config.forEach(configChild => {
        if (configChild.type == "GROUP") {
          let label = configChild.label;
          configChild.children.forEach(e => {
            e.label = label + " - " + e.label;
          });
        }
  
        if (configChild.children != null && configChild.children.length > 0) {
          this.TreeAddEmpty(configChild.children);
        }
        array.push(configChild);
        if (configChild.children != null && configChild.children.length > 0) {
          element.getTreeToArray(configChild.children, array);
        }
      });
    },
    TreeAddEmpty(config) {
      let element = this;
  
      config.forEach(configChild => {
        configChild.label = "     " + configChild.label;
        if (configChild.children != null && configChild.children.length > 0) {
          element.TreeAddEmpty(configChild.children);
        }
      });
    },
  
    // 将数组改为树结构
    getArrayToTreeByParentId(array) {
      let menu = [];
      array.forEach(obj => {
        obj.children = []; //??
        if (obj.parentId == null) {
          // 根级数据
          menu.push(obj);
        } else {
          let flag = false,
            childFlag = false;
          menu.forEach(child => {
            // menu中已有当前数据的根结构，遍历menu进行插入
            if (obj.parentId == child.id) {
              child.children.push(obj);
              flag = true;
            }
          });
          if (!flag) {
            array.forEach(child => {
              // menu中没有当前数据的根结构,遍历原数组，进行插入
              if (obj.parentId == child.id) {
                childFlag = true;
                child.children.push(obj);
              }
            });
          }
          if (!flag && !childFlag) {
            menu.push(obj); // menu和原数组中都没有当前数据的根结构，直接插入当前数据
          }
        }
      });
      return menu;
    },
    shiftCreateDate(data) {
      let createTime = this.getFormatDate("yyyy-MM-dd", data[0]);
      let endTime = this.getFormatDate("yyyy-MM-dd", data[1]);
      return { startPracticeTime: createTime, endPracticeTime: endTime };
    },
    shiftCreateDatesun(data) {
      let createTime = this.getFormatDate("yyyy-MM-dd", data.createTime[0]);
      let endTime = this.getFormatDate("yyyy-MM-dd", data.createTime[1]);
      return { startCreateTime: createTime, endCreateTime: endTime };
    },
    // 验证表单
    checkForm(unsanctioned) {
      for (let obj in unsanctioned) {
        if (unsanctioned[obj][0].message != null) {
          this.warning(unsanctioned[obj][0].message, "warning");
          return false;
        }
      }
    },
    // 处理字典表数据
    // getStatusCodeByType(type){
    //   let dictionary = basic.getDictionary();
    //   let map = dictionary[type];
    //   return map
    // }
  
    // 验证表单
    projectTableFormat(array) {
      array.forEach(e=>{
        if(e.detail!=null){
          for(let key in e.detail){
            e[key] = e.detail[key]
          }
        }
      })
    }
  };
  
  export const hasChild = (item) => {
    return item.children && item.children.length !== 0
  }
  
  
  /**
   * @param {Array} list 通过路由列表得到菜单列表
   * @param {Array} pages 当前用户可以访问的页面编码列表
   * @returns {Array}
   */
  export const getMenuByRouter = (list) => {
    let res = []
    forEach(list, item => {
      if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
        if ((hasChild(item) || (item.meta && item.meta.showAlways))) {
          forEach(item.children, child => {
            if (!child.meta.hideInMenu) {
              let obj = {
                icon: (child.meta && child.meta.icon) || '',
                name: child.name,
                meta: child.meta
              }
              res.push(obj);
            }
          })
        }
      }
    })
    return res
  }
  
  /**
   * @param {Number} times 回调函数需要执行的次数
   * @param {Function} callback 回调函数
   */
  export const doCustomTimes = (times, callback) => {
    let i = -1
    while (++i < times) {
      callback(i)
    }
  }
  
  /**
   * 身份证号码隐藏中间数字
   */
  export const hideMidNo = (str) => {
    if (!str) {
      return ''
    }
    return str.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2")
  }
  
  export function existy(params) {
    return params != null
  }
  
  export function hasValue(params) {
    return params !== '' && existy(params)
  }
  