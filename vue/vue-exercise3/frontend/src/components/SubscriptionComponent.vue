<template>
  <table class="table table-info mt-4">
    <thead class="thead bg-info text-light font-weight-bold">
    <tr>
      <th>Tidning</th>
      <th>Prenumerationstid</th>
      <th>Pris</th>
      <th>Kundens namn</th>
      <th>Kundens epost</th>
      <th>
      </th>
    </tr>
    </thead>
    <tbody class="bg-light" v-for="(s,index) in subscriptions" v-bind:key="index">
    <tr>
      <td>{{ s.newspaper.name }}</td>
      <td>{{ s.duration }}</td>
      <td>{{ s.totalPrice }}</td>
      <td>{{ s.name }}</td>
      <td>{{ s.email }}</td>
      <td>
        <input type="button" class="btn btn-info text-white px-2" value="Radera"
               @click="unsubscribe(s)">
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SubscriptionComponent",
  methods: {
    unsubscribe: function (selected) {
      this.$emit('unsubscribe', selected);
    },
  },
  props: {
    "subscriptions": Array
  }
}
</script>

<style scoped>

</style>
