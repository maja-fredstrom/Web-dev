<template>
  <div class="home">
    <Subscribe :subscriptions="subscriptions" :newspapers="newspapers"
               @subscribe="subscribe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Subscribe from "@/components/SubscribeComponent";
import NewspapersService from "@/NewspapersService";
import SubscriptionsService from "@/SubscriptionsService";

export default {
  name: 'Home',
  data: function () {
    return {
      subscriptions: [],
      newspapers: [],
    };
  },
  components: {
    Subscribe,
  },
  async created() {
    this.subscriptions = await SubscriptionsService.getSubscriptions();
    this.newspapers = await NewspapersService.getNewspapers();
  },
  methods: {
    subscribe: function (subscriptions) {
      this.subscriptions = subscriptions;
    },
  },
}
</script>
