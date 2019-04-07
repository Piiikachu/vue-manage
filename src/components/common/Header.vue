<template>
  <div class="header">
    <!--collapse-btn-->
    <div class="collapse-btn" @click="collapseChange">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">manage system</div>
    <div class="header-right">
      <div class="header-user-con">
        <!--fullscreen-->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!--icon-->
        <div class="user-avator"><img src="../../assets/img/img.jpg"> </div>
        <!--user-dropdown-->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              {{username}} <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <a href="#" >
                    <el-dropdown-item>about</el-dropdown-item>
                </a>
                <a href="#">
                    <el-dropdown-item>github</el-dropdown-item>
                </a>
                <el-dropdown-item divided command="loginout">log out</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../common/bus'

export default {
  name: 'Header.vue',
  data () {
    return {
      collapse: false,
      fullscreen: false,
      name: 'adidas',
      message: 2
    }
  },
  computed: {
    username () {
      let username = localStorage.getItem('ms_username')
      return username || this.name
    }
  },
  methods: {
    // dropdown
    handleCommand (command) {
      if (command === 'login') {
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    },
    collapseChange () {
      this.collapse = !this.collapse
      bus.$emit('collapse', this.collapse)
    },
    handleFullScreen () {
    }
  },
  mounted () {
    if (document.body.clientWidth < 1500) {
      this.collapseChange()
    }
  }
}
</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }
  .collapse-btn{
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .header .logo{
    float: left;
    width:250px;
    line-height: 70px;
  }
  .header-right{
    float: right;
    padding-right: 50px;
  }
  .header-user-con{
    display: flex;
    height: 70px;
    align-items: center;
  }
  .btn-fullscreen{
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
  }
  .btn-bell, .btn-fullscreen{
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }
  .btn-bell-badge{
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
  }
  .btn-bell .el-icon-bell{
    color: #fff;
  }
  .user-name{
    margin-left: 10px;
  }
  .user-avator{
    margin-left: 20px;
  }
  .user-avator img{
    display: block;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  .el-dropdown-link{
    color: #fff;
    cursor: pointer;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
