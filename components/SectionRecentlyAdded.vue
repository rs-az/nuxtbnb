<template>
  <div class="app-padded-vertical">
    <div class="app-wrapper">
      <div class="app-carousel">
        <div class="app-carousel-header">
          <h2>
            Recently Added
          </h2>
        </div>

        <div class="app-carousel-items">
          <n-link
            v-for="home in homes"
            :key="home.objectID"
            :to="`/home/${home.objectID}`"
            class="app-house"
          >
            <div class="app-house-header">
              <nuxt-img :src="home.images[0]" width="360" height="175" />
            </div>
            <div class="app-house-body">
              <div class="app-rating">
                {{ home.reviewValue }}
                <span>{{ home.reviewCount }}</span>
              </div>
              <h2>{{ home.title }}</h2>
              <div class="app-address">{{ home.address }}</div>
              <div class="app-price">
                ${{ home.pricePerNight }} <span>/ night</span>
              </div>
              <div class="app-house-footer">
                <img src="/images/icons/house-blue.svg" width="16px" />
                <div class="app-house-guests">{{ home.guests }} guests</div>
              </div>
            </div>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import Home from "~/types/Home";

export default Vue.extend({
  props: {
    homes: <PropOptions<Home[]>>{
      type: Array,
      default: () => []
    }
  }
});
</script>
