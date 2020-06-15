<template>
  <div class="form-input" :style="{width:type==='textarea'?'100%':''}">
    <div :class="showInputTip&&myValue===''?'form-item-neccessary':'form-item-not-neccessary'">
      <span><span v-if="showInputTip" style="color:red">*</span>{{desc}}</span>
    <el-input
        v-if="type=='input'"
        :maxlength="limit"
        :disabled="disabled"
        :placeholder="'请输入'+(desc?desc:'内容')"
        v-model="myValue">
    </el-input>
    <el-input-number
        v-if="type=='number'"
        :disabled="disabled"
        :precision="precision"
        :label="'请输入'+(desc?desc:'内容')"
        v-model="myValue">
    >

    </el-input-number>
    <el-input
        v-if="type=='textarea'"
        :maxlength="200"
        :disabled="disabled"
        :placeholder="'请输入'+(desc?desc:'内容')"
        v-model="myValue">
    </el-input>
        <!-- format="yyyyMMddHHmmss" -->
    <el-date-picker
        v-if="type=='date'"
        type="date"
        :disabled="disabled"
        :placeholder="'选择'+(desc?desc:'时间')"
        v-model="myValue">
    </el-date-picker>
    <!-- <el-option :value="男">男</el-option> -->
    <!-- <el-option :value="女">女</el-option> -->
    <el-select
        v-if="type=='select'"
        :disabled="disabled"
        clearable=""
        filterable 
        :placeholder="'选择'+(desc?desc:'内容')"
        v-model="myValue">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
    </el-select>
    <photo :headerImage.sync="myValue" :disabled="disabled" @takephoto="myValue=$event" v-if="type=='upload'">

    </photo>
    </div>
    <div style="color:red;text-align:left;padding-left:100px">{{'*必填：'+ desc}}</div>
  </div>
</template>

<script>
import photo from '@/components/base/images/photo.vue';
export default {
  components:{
    photo
  },
  data(){
    return{
      myValue:this.value,
    }
  },
      watch: {
        value(val) {
          // console.log('value change')
          this.myValue = val;//新增result的watch，监听变更并同步到myResult上
        },
        myValue(val){
            // console.log('myvalue change')
            //如果是时间，格式化
            var value = val
            if(this.type=='date'){
              console.log(value)
              var date = new Date(value)
              console.log(date)
              value = this.dateFormat("YYYY-mm-dd HH:MM:SS", date)
            }
            console.log(value)
            this.$emit("on-value-change",value);//③组件内对myResult变更后向外部发送事件通知
        }
    },
    props:{
        limit: {
            type: Number,
            default: 15
        },
        value: {
            // type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default:false
        },
        precision:{
            type: Number,
            default: 0
        },
        desc: {
            type: String,
            default: ''
        },                
        showInputTip:{
            type:Boolean,
            default:false
        },
        type:{
            type:String,
            default: 'input'
        },
        options:{
            type:Array,
            default: function () {
                return []
            }   
         }
    },
    mounted(){
        console.log(this.showInputTip)
        if(this.type==='number'&&this.myValue==undefined){
          this.myValue = 0
        }
        if(this.type==='date'){
          //todo 转日期可能
        }
        // console.log(this.type)
    },
    methods:{
      dateFormat(fmt, date) {
          let ret;
          const opt = {
              "Y+": date.getFullYear().toString(),        // 年
              "m+": (date.getMonth() + 1).toString(),     // 月
              "d+": date.getDate().toString(),            // 日
              "H+": date.getHours().toString(),           // 时
              "M+": date.getMinutes().toString(),         // 分
              "S+": date.getSeconds().toString()          // 秒
              // 有其他格式化字符需求可以继续添加，必须转化成字符串
          };
          for (let k in opt) {
              ret = new RegExp("(" + k + ")").exec(fmt);
              if (ret) {
                  fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
              };
          };
          return fmt;
      },
      handleAvatarSuccess(res, file) {
        this.value = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    }
}
</script>

<style lang="scss" scoped>
.form-item-not-neccessary+div{
    display: none;
}
.form-input>div:first-child{
  display: flex;
}
   /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 90px;
    height: 90px;
    line-height: 90px;
    text-align: center;
  }
  .avatar {
    width: 90px;
    height: 90px;
    display: block;
  }
  /deep/ .el-select--medium{
    /deep/ .el-input__inner{
      width: 185px;
    }
  }
  /deep/ .el-date-editor--date{
    width: 186px;
  }
  /deep/ .el-input-number__decrease{
    min-width: 0px !important;
    text-align: center !important;
  }
  /deep/ .el-input-number{
    width: 183px;
  }
</style>>

