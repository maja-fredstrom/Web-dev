<template>
  <div class="home">
    <Subscribe :subscriptions="this.subscriptions" :newspapers="this.newspapers"
               @subscribe="subscribe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Subscribe from "@/components/SubscribeComponent";

export default {
  name: 'Home',
  subscriptions: [],
  newspapers: [],
  components: {
    Subscribe,
  },
  async created() {
    this.subscriptions = [{
      newspaper: {
        name: "Vasabladet",
        monthlyPrice: 55,
      },
      duration: 2,
      totalPrice: 110,
      name: "Kalle Anka",
      email: "kalle.anka@hotmail.com",
    }];
    this.newspapers = [{
      name: "Vasabladet",
      monthlyPrice: 55,
    },
      {
        name: "Huvudstadsbladet",
        monthlyPrice: 60,
      }];
  },
  methods: {
    subscribe: function (subscriptions) {
      this.subscriptions = subscriptions;
    },
  },
}
</script>
