<template>
  <div>
    <div class="addPeo">
      <p>输入名字：<input v-model="newPeo.name" type="text" placeholder="输入名字"></p>
      <p>选择性别：<label><input v-model="newPeo.sex" type="radio" value="男" name="sex" checked />男</label><label><input type="radio" value="女" name="sex" v-model="newPeo.sex" />女</label></p>
      <p>输入年龄：<input v-model="newPeo.age" type="text" placeholder="输入年龄"></p>
      <p>输入职业：<input v-model="newPeo.job" type="text" placeholder="输入职业"></p>
    </div>
    <button @click="addArr">增加新成员</button>
    <transition name="slide-fade" mode="out-in">
      <transition-group name="slide-fade" tag="table" border="15" mode="out-in" v-if="arr.length > 0">
        <tr key='trr'>
          <th>名字</th>
          <th>性别</th>
          <th>年龄</th>
          <th>职业</th>
          <th>删除</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.age}}</td>
          <td>{{item.job}}</td>
          <td @click="delPeo(index)">x</td>
        </tr>
      </transition-group>
      <p v-else>没有成员</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'add-person-item',
    data () {
      return {
        arr: [
          {id: +new Date() - 1000, name: 'Luffy', sex: '男', age: 18, job: '船长'},
          {id: +new Date(), name: 'Sanji', sex: '男', age: 25, job: '厨师'}
        ],
        newPeo: {id: +new Date() + 1000, name: '', sex: '男', age: '', job: ''}
      }
    },
    methods: {
      addArr () {
        if (!this.newPeo.name) {
          this.$Message({
            content: '请输入名字',
            type: 'error'
          })
          return
        }
        if (!this.newPeo.age) {
          this.$Message({
            content: '请输入年龄',
            type: 'error'
          })
          return
        }
        if (!this.newPeo.job) {
          this.$Message({
            content: '请输入职业',
            type: 'error'
          })
          return
        }
        this.arr.unshift(Object.assign({}, this.newPeo))
        this.newPeo = {id: +new Date(), name: '', sex: '男', age: '', job: ''}
        this.$Message({
          type: 'success',
          content: '添加新成员成功'
        })
      },
      delPeo (index) {
        this.$Modal({
          type: 1,
          content: '是否确定删除？',
          sure: () => {
            this.arr.splice(index, 1)
            this.$Message({
              type: 'success',
              content: '删除成功'
            })
          }
        })
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
