<template>
  <div>
    <!-- <p>{{ number }}</p> -->
    <!-- <div @click="addEnd">add</div> -->
    <header>
      <p class="title">vue开发中常用到的优化方法</p>
    </header>
    <section class="content">
      <ul>
        <li>
          <!-- 1、合理利用局部变量 -->
          <p>1、合理利用局部变量</p>
          <div>for 循环的结果{{reslut}}</div>
        </li>
        <li>
          <!-- 2、路由使用懒加载 -->
          <p>2、路由使用懒加载</p>
          <button @click="toPath('about')">to abaout</button>
          <button @click="toPath('login')">to login</button>
        </li>
        <li>
          <!-- 3.耗时任务放在子组件 -->
          <p>3、耗时任务放在子组件</p>
          <length-time-lask></length-time-lask>
        </li>
        <li>
          <!-- 4.合理使用函数式组件 -->
          <p>4、合理使用函数式组件</p>
          <Functional :message="message"></Functional>
        </li>
        <li>
          <!-- 5.以函数形式创建全局弹窗组件，减少侵入式引用 -->
          <p>5、用函数创建组件，减少侵入式引用</p>
          <van-button type="info" @click="showNotice">notice</van-button>
        </li>
        <li>
          <!-- 6.自定义指令，方便使用 -->
          <p>6、自定义指令</p>
          <van-button type="primary" v-loading="isloading" @click="update"
            >loading directtive</van-button
          >
        </li>
        <li>
          <!-- 7.使用图片懒加载组件 -->
          <p>7、多使用svg图片</p>
          <svg-icon icon-name="setting" class-name="set" />
          <svg-icon icon-name="message" />
        </li>
        <li>
          <!-- 8.使用图片懒加载组件 -->
          <p>8、图片懒加载</p>
          <van-button type="warning" @click="toPath('lazy')"
            >图片懒加载</van-button
          >
        </li>
        <li>
          <!-- 9.虚拟长列表，保证无限列表不会导致内存泄露 -->
          <p>9、使用虚拟长列表</p>
          <van-button type="danger" @click="toPath('scroll')"
            >虚拟列表</van-button
          >
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Notice from "../components/notice";
import Functional from "./functionalComp";
import LengthTimeLask from "./lengthTimeLask";
export default {
  name: "Home",
  components: { Functional, LengthTimeLask },
  data() {
    return {
      name: "Home",
      isloading: false,
      reslut: 0,
      message: "简单显示内容，使用函数式组件，提高渲染效率",
      list: [
        {
          name: "1",
          id: 1
        }
      ]
    };
  },
  created() {
    this.heavy();
  },
  computed: {
    ...mapGetters({
      number: "number"
    }),
    base() {
      const length = 'wewrerewtret'.length
      return length;
    }
  },
  methods: {
    ...mapActions("app", {
      add: "Add"
    }),
    heavy() {
        // 1.合理利用局部变量保存数据
      const baseVariable = this.base;
      let reslut = this.reslut;
      for (let i = 0; i < 100000; i++) {
        // reslut += this.base;
        reslut += baseVariable;
      }
      this.reslut = reslut;
    },
    addEnd() {
      // let a = 1;
      this.add({ number: 1 });
    },
    toPath(path) {
      this.$router.push({ name: path });
    },
    // 使用自定义指令
    update() {
      this.isloading = true;
      setTimeout(() => {
        this.isloading = false;
      }, 2000);
    },
    // 5.使用动态组件
    showNotice() {
      const notice = this.$createNotice(Notice, {
        title: "标题",
        message: "消息内容",
        duration: 2000
      });
      notice.show();
    }
  }
};
</script>
<style scoped lang="scss">
$maimClore: #07c160;
$assistClore:#1989fa;
.title{
  font-size: 30px;
  color: $maimClore;
}
.content{
  color: #000;
  font-size: 20px;
  li{
    padding: 10px;
    border-bottom: solid 1px #cccccc;
    p{
      color: $assistClore;
    }
  }
}
.svg-icon.set {
  width: 750px;
  height: 1rem;
  color: $maimClore;
}
.btn {
  display: flex;
  flex-direction: column;
}
</style>
