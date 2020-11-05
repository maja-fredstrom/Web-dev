<template>
  <div class="home">
    <Subscription :subscriptions="subscriptions"
                  @unsubscribe="unsubscribe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Subscription from "@/components/SubscriptionComponent";
import SubscriptionsService from "@/SubscriptionsService";

export default {
  name: 'Home',
  data: function () {
    return {
      subscriptions: SubscriptionsService.getSubscriptions(),
    };
  },
  components: {
    Subscription
  },
  async created() {
    this.subscriptions = await SubscriptionsService.getSubscriptions();
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
