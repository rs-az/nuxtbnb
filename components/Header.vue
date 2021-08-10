<template>
  <header class="app-header">
    <n-link class="app-logo" to="/">
      <nuxt-img src="/images/logo.svg" />
    </n-link>
    <div class="app-search">
      <input ref="citysearch" placeholder="Enter a City" />
      <client-only>
        <template #placeholder>
          <input type="text" class="datepicker" />
          <span class="-ml-6 mr-2">to</span>
          <input type="text" class="datepicker" />
        </template>

        <date-picker
          v-model="range"
          is-range
          timezone="UTC"
          :modelConfig="{ timeAdjust: '00:00:00' }"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              :value="inputValue.start"
              v-on="inputEvents.start"
              class="datepicker"
            />
            <span class="-ml-6 mr-2">to</span>
            <input
              :value="inputValue.end"
              v-on="inputEvents.end"
              class="datepicker"
            />
          </template>
        </date-picker>
      </client-only>

      <button>
        <nuxt-img src="/images/icons/search.svg" />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      range: {
        start: null,
        end: null
      }
    };
  }
});
</script>
