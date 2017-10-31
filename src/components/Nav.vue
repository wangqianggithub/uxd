<template>
    <div class="nav">
        <ul>
            <li><router-link to="./home">首页</router-link></li>
            <li><router-link to="./system">系统框架</router-link></li>
            <li><router-link to="./standard">规范样式</router-link></li>
            <li><router-link to="./subgroup">组件功能</router-link></li>
            <li><router-link to="./work">工作安排</router-link></li>
            <li><router-link to="./team">团队建设</router-link></li>
            <li><router-link to="./message">留言</router-link></li>
            <li><router-link to="./other">其他</router-link></li>
        </ul>
    </div>
</template>

<script>

</script>

<style>
    .nav{width: 90px;height: 500px;position: absolute;left:0px;top:50%;margin-top:-250px;}
    .nav *{transition: all .6s ease;}
    .nav li{display: block;height: 30px;line-height: 30px;color:#fff;
        background:linear-gradient(to right,#39aa48, #3337aa);margin-top:10px;
        cursor:pointer;font-size: 14px;text-align: center;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .nav li a{color:#fff;display: block;width: 100%;height: 100%;border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;}
    .nav li:hover a{
        background:linear-gradient(to right, #aa2115, #39aa48);
    }
    .nav li a.router-link-active{background:linear-gradient(to right, #aa2115, #39aa48);}

</style>