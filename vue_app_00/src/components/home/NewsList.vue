<template>
  <div class="app-news">
     <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id"> 
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                <span>
                {{item.ctime | datetimeFilter}} </span>
                <span>点击: {{item.point}}次</span>
              </p>
						</div>
					</a>
				</li>
        </ul>
  </div>  
</template>
<script>
   export default {
     data(){
       return {
         list:[],     //返回数据
         pageIndex:0, //当前页码
         pageSize:7,  //页大小
         pageCount:1  //总页数
       }
     },
     created() {
       this.getMore();
     },
     methods:{
       getMore(){
         //加载下一页
         //1:pageIndex自增
         this.pageIndex++;
         var pno = this.pageIndex;
         var ps = this.pageSize;
         //2:发送ajax请求
         var url = "http://127.0.0.1:3000";
         url +="/getNews";
         url +="?pno="+pno+"&pageSize="+ps;
         //3:返回数据保存 list
         this.axios.get(url).then(result=>{
             //console.log(result);
             this.list = result.data.data;
             this.pageCount = result.data.pageCount;
         });
         ///404 url  nan 参数
         //4:保存总页数
         //5:在模板中创建循环显示list中数据

       }
     }
   }
</script>
<style>
  .app-news .mui-ellipsis{
    display:flex;    /*弹性布局*/
    font-size:12px;  /*字体*/
    color:#226aff;   /*颜色*/
    justify-content:space-between;/*两端对齐*/
  }
</style>