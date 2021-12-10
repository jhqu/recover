<template>
<div class="hone_centre">
 <div class="ada"></div>

  <div class="down">
   
    <div>
      <h3>评审页面管理</h3>
    </div>
    <div class="newcr_btn">
      <el-button type="primary">新建评价页面</el-button>
    </div>
    <div class="table_list">
      <tablist
        :list="list"
        @sizeChange="getSizeChange"
        @currentPage="getCurrentPage"
        :size="page.pageSize"
        :options="options"
        :columns="columns"
        :operates="operates"
        :pageShow="page.pageShow"
        :total="page.total"
       
      ></tablist>
      
    </div>
  </div>
  </div>
</template>

<script> 
import Tablist from "../components/tablist.vue";

export default {
  name: "home",
  components: {
    Tablist: Tablist,
  },
  data() {
    return {
      // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽,isShow:是否显示
      page: {
        //关于页码的相关参数
        pageShow: true, //是否显示
        total: 100, //总条数
        pageSize: 5, //每页条数
        pageNo: 1, //第几页
      },
      handleSelection: [], //checkbox选中行
      list: [
        {
          id: "1",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "2",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "3",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "4",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "5",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "6",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "7",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "8",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
        {
          id: "10",
          name: "系统安全计划",
          sort: "1",
          date: "刘扬  2021-10-10",
          update: "刘扬  2021-10-10",
        },
      ], // table数据
      options: {
        // table样式参数
        stripe: false, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: false, // 是否支持列表项选中功能
      }, // table 的参数结束
      columns: [
        {
          // 需要展示的列开始
          prop: "id",
          label: "序号",
          align: "center",
          isShow: true,
          formatter: (row, column, cellValue) => {
            //formatter重构
            return `返回参数`;
          },
        },
        {
          prop: "name",
          label: "评价名称",
          align: "center",
          isShow: true,
        },

        {
          prop: "sort",
          label: "从左至右排序",
          align: "center",
          isShow: true,
        },
        {
          prop: "date",
          label: "创建人和日期",
          align: "center",
          isShow: true,
        },
        {
          prop: "update",
          label: "最后更新人和日期",
          align: "center",
          isShow: true,
        },
      ], // 需要展示的列结束
      operates: {
        //操作栏
        width: 400,
        fixed: "right",
        list: [
          {
            id: "1",
            label: "编辑评价页面",
            show: true, //是否显示按钮
            className: "", //样式类名
            disabled: false, //是否禁用按钮 默认是danger的禁用样式
            method: (index, row) => {
              this.handleEdit(index, row);
            },
          },
          {
            id: "2",
            label: "编辑评价项",
            show: true,
            className: "primary",
            disabled: false,
            method: (index, row) => {
              this.handledelpatity(index, row);
            },
          },
          {
            id: "3",
            label: "删除评价页面",
            show: true,
            className: "danger",
            disabled: false,
            method: (index, row) => {
              this.handledel(index, row);
            },
          },
        ],
      }, // 列操作按钮
    }; //return ending
  },
  methods: {
    handleSelectionChange(val) {
      //checkbox选中的数据val 是选中行的所有数组
      alert(val)
      this.handleSelection = val;
    },
 
    getSizeChange(val) {
     
      //table组件发射的方法 用于改变每页数据量
     
      this.page.pageSize = val;
      //这下面需要重新调用 获取列表页的函数
    },
    getCurrentPage(val) {
      //table组件发射的方法  用于改变当前所在页码
      
      this.page.pageNo = val;
      //这下面需要重新调用 获取列表页的函数
    },
    handleEdit(index, row) {
      //操作栏编辑按钮
      console.log(" index:", index);
      console.log(" row:", row);
    },
    handledelpatity(index, row) {
      //操作栏编辑评价项
      console.log(" index:", index);
      this.$router.push({path:`/editparity/${row.id}`}) //获取路由参数用params
      //this.$router.push({path:'/login',query:{id:row.id}})
      console.log(" row:", row);
    },

    setBackPlack() {
      this.sumArr.pop(); //末尾删除
      // this.sumArr.shift() //开头删除
      // this.sumArr.push({name:'詹姆斯',sex:'男',id:4}) //向下添加
      // this.sumArr.unshift({name:'詹姆斯',sex:'男',id:4}) //向上添加
    },
  },
};
</script>

<style  scoped>
.hone_centre{
 
  width: 100%;
  display: flex;
  flex-direction: column;
   align-self: center;
 
}
 .ada{
   height: 80px;
  background-color: red;
   margin: 0;padding: 0;
 }
.down {

  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 15px;

  height: 750px;
  width: 80%;
  align-self: center;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 12px #cac6c6;
  padding: 10px 20px;
}
.newcr_btn {
  align-self: flex-end;
}
.table_list {
  margin-top: 10px;
}
</style>>
