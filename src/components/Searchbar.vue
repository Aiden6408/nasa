<template>
  <form class="col-6" @submit.prevent="search">
    <div class="input-group m-3">
      <input
        type="date"
        class="form-control"
        placeholder="date..."
        aria-label="date.."
        v-model="query"
      />
      <button class="btn btn-success" type="submit">
        <i class="mdi mdi-magnify"></i>
      </button>
    </div>
  </form>
</template>
<script>
import { ref } from "@vue/reactivity";
import { dailyImageService } from "../services/DailyImageService";
export default {
  setup() {
    const date = ref("");
    return {
      date,
      search() {
        dailyImageService.search(data.value);
      },
    };
  },
};
</script>