<template>
  <div class="app-container">
    <div class="statistics">
      <div class="statistics_top">
        <span class="el-icon-tickets"/>
        今日实时统计
      </div>
      <ul v-for="(item,index) in today" :key="index" class="statistics_item">
        <li>
          <h4>订单数</h4>
          <h5>{{ item.order }}</h5>
        </li>
        <li>
          <h4>论文篇数</h4>
          <h5>{{ item.article_num }}</h5>
        </li>
        <li>
          <h4>销售额</h4>
          <h5>￥{{ item.sale }}</h5>
        </li>
        <li>
          <h4>收入</h4>
          <h5>￥{{ item.inCome }}</h5>
        </li>
      </ul>
    </div>
    <div class="every_statistics">每日统计</div>
    <el-table
      :data="listItem"
      border
      style="width:100%">
      <el-table-column
        prop="date"
        label="日期"
        width=""/>
      <el-table-column
        prop="order"
        label="订单数"
        width=""/>
      <el-table-column
        prop="article_num"
        label="论文篇数"
        width=""/>
      <el-table-column
        prop="sale"
        label="销售额"
        width=""/>
      <el-table-column
        prop="inCome"
        label="收入"
        width=""/>
    </el-table>
    <el-pagination
      :total="num"
      :page-size="10"
      background
      layout="prev, pager, next"
      @current-change="changePage"
    />
  </div>
</template>

<script>
import { getList } from '@/api/table'
export default {
  /*filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },*/
  data() {
    return {
      listItem: null,
      listNum:null,
      today:[],
      listLoading: true,
      num: 0,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then((res)=>{
        this.listNum=res.items;
        this.today=res.today;
        this.num = res.items.length;
        this.changePage(1);
        this.listLoading = false
      })
    },
    changePage(page){
      this.listItem = this.listNum.slice((page-1)*10,page*10)
    }
  }
}
</script>
<style>
  .el-pagination {
    text-align: end;
    margin-top: 5vh;
  }
  .statistics{
    border:1px solid #ebeef5;
    margin-bottom:20px;
    color:#606266;
  }
  .statistics_top{
    background:#f5f7fa;
    border-bottom:1px solid #ebeef5;
    height:30px;
    line-height:30px;
    padding-left:20px;
  }
  .statistics_item{
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  .statistics_item li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right:1px solid #ebeef5;
    width:20vw;
  }
  .statistics_item li:nth-last-child(1){
    border-right:none;
  }

  /*每日统计*/
  .every_statistics{
    background-color:#f5f7fa; /*#f9f6f1 */
    height:50px;
    line-height:50px;
    padding-left:10px;
    color:#909399;
  }
  /*表格头部background*/

 /* .el-table th, .el-table tr{
    background: #f5f7fa;
  }
  .el-table__header-wrapper .el-table th, .el-table tr {
    background-color:#fff;
  }*/
</style>
