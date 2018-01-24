<template>
  <div>
    <div class="addPeo">
      <p>输入名字：<input v-model="newPeo.name" type="text" placeholder="输入名字"></p>
      <p>选择性别：<label><input v-model="newPeo.sex" type="radio" value="男" name="sex" checked />男</label><label><input type="radio" value="女" name="sex" v-model="newPeo.sex" />女</label></p>
      <p>输入年龄：<input v-model="newPeo.age" type="text" placeholder="输入年龄"></p>
      <p>输入职业：<input v-model="newPeo.job" type="text" placeholder="输入职业"></p>
    </div>
    <button @click="addArr">增加新成员</button>
    <table border="15">
      <tr>
        <th>名字</th>
        <th>性别</th>
        <th>年龄</th>
        <th>职业</th>
        <th>删除</th>
      </tr>
      <tr v-for="(item, index) in arr">
        <td>{{item.name}}</td>
        <td>{{item.sex}}</td>
        <td>{{item.age}}</td>
        <td>{{item.job}}</td>
        <td @click="delPeo(index)">x</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'dynamic-component',
    data () {
      return {
        arr: [
          {name: 'Luffy', sex: '男', age: 18, job: '船长'},
          {name: 'Sanji', sex: '男', age: 25, job: '厨师'}
        ],
        newPeo: {name: '', sex: '男', age: '', job: ''}
      }
    },
    methods: {
      addArr () {
        if (!this.newPeo.name) {
          alert('请输入名字')
          return
        }
        if (!this.newPeo.age) {
          alert('请输入年龄')
          return
        }
        if (!this.newPeo.job) {
          alert('请输入职业')
          return
        }
        this.arr.unshift(Object.assign({}, this.newPeo))
        this.newPeo = {name: '', sex: '男', age: '', job: ''}
      },
      delPeo (index) {
        this.arr.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  .addPeo {
    text-align: left;
    font-size: 16px;
  }
  input {
    font-size: 16px;
  }
  p {
    margin: 5px 0;
  }
  table {
    color: #000;
  }
  th {
    color: #2ecc71;
  }
  td,th {
    width: 100px;
  }
</style>
