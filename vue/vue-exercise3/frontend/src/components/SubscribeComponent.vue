<template>
  <form class="form" action="#">
    <div class="row ">
      <div class="col border border-info rounded p-1 m-2">
        <p class="bg-info text-center text-light rounded">Tidningsdata</p>
        <div class="mb-1">
          <label for="Tidning">Tidning:</label>
          <select id="Tidning" class="form-control" v-model="newSubscription.newspaper">
            <option class="dropdown-item" v-for="(n,index) in newspapers" v-bind:value="n" v-bind:key="index">{{ n.name }}</option>
          </select>
        </div>
        <p class="bg-info text-center text-light rounded">Monthly price :
          {{ newSubscription.newspaper.monthlyPrice }}</p>
        <div class="mb-1">
          <label for="subscription-time">Prenumerationstid:</label>
          <input type="number" id="subscription-time" class="form-control text-right" placeholder="3"
                 min="1"
                 max="12" v-model="newSubscription.duration">
        </div>
        <p class="bg-info text-center text-light rounded">Total price : {{ totalPrice }}</p>
      </div>
      <div class="col m-2">
        <div class="border border-info rounded p-1">
          <p class="bg-info text-center text-light rounded">Kunddata</p>
          <div>
            <label for="Name">Namn:</label>
            <input type="text" id="Name" class="form-control" placeholder="Nalle Puh"
                   v-model="newSubscription.name">
          </div>
          <div>
            <label for="Email">Email:</label>
            <input type="text" id="Email" class="form-control" placeholder="nalle@sjumila.com"
                   v-model="newSubscription.email">
          </div>
        </div>
      </div>
    </div>
    <div class="row-md-12">
      <div class="text-right m-2">
        <input type="button" class="btn form-submit bg-info text-light rounded" value="Spara"
               @click="subscribe()">
      </div>
      <div class="text-center font-weight-bold">
        <p class="text-danger">{{ warning }}</p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SubscribeComponent",
  data: function () {
    return {
      newSubscription: {
        newspaper: {
          name: "",
          monthlyPrice: 0,
        },
        duration: 0,
        totalPrice: 0,
        name: "",
        email: "",
      },
      warning: "",
    }
  },
  methods: {
    subscribe: function () {
      if (this.newSubscription.newspaper && this.newSubscription.duration && this.newSubscription.email && this.newSubscription.name) {
        this.warning = '';
        this.subscriptions.push(this.newSubscription);
        this.$emit('subscribe', this.subscriptions);
      } else {
        this.warning = "Enter all the data first!";
      }
    },
    setTotalPrice: function (total) {
      this.newSubscription.totalPrice = total;
    }
  },
  computed: {
    totalPrice: function () {
      this.setTotalPrice(this.newSubscription.duration * this.newSubscription.newspaper.monthlyPrice);
      return this.newSubscription.duration * this.newSubscription.newspaper.monthlyPrice;
    },
  },
  props: {
    "subscriptions": Array,
    "newspapers": Array
  }
}
</script>

<style scoped>

</style>
