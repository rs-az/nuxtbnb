<template>
  <div class="app-section">
    <div class="app-wrapper">
      <div class="app-masonry">
        <img v-for="image in images" :key="image" :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
});
</script>
