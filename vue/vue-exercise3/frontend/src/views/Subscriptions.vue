<template>
  <div class="home">
    <Subscription :subscriptions="subscriptions"
                  @unsubscribe="unsubscribe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Subscription from "@/components/SubscriptionComponent";

export default {
  name: 'Home',
  components: {
    Subscription
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
  },
  methods: {
    unsubscribe: function (selected) {
      const index = this.subscriptions.indexOf(selected);
      if (index > -1) {
        this.subscriptions.splice(index, 1);
      }
    }
  }
}
</script>
