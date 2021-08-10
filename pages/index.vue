<template>
  <div class="">
    <Hero />
    <SectionPremiumListing />
    <SectionRecentlyAdded class="app-background-gray" :homes="homes" />
    <SectionMore />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Hero from "~/components/Hero.vue";
import SectionPremiumListing from "~/components/SectionPremiumListing.vue";
import SectionRecentlyAdded from "~/components/SectionRecentlyAdded.vue";
import SectionMore from "~/components/SectionMore.vue";
import Home from "~/types/Home";

export default defineComponent({
  components: {
    Hero,
    SectionPremiumListing,
    SectionRecentlyAdded,
    SectionMore
  },
  setup() {
    const homes: Home[] = require("~/data/homes").slice(0, 3);
    return {
      homes
    };
  }
});
</script>
