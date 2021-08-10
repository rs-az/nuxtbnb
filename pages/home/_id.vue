<template>
  <div class="app-container">
    <property-gallery :images="home.images" />
    <property-details :home="home" />
    <property-description :home="home" />
    <property-map :home="home" />
    <property-reviews :reviews="reviews" />
    <property-host :user="user" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PropertyDescription from "~/components/PropertyDescription.vue";
import PropertyDetails from "~/components/PropertyDetails.vue";
import PropertyGallery from "~/components/PropertyGallery.vue";
import PropertyHost from "~/components/PropertyHost.vue";
import PropertyMap from "~/components/PropertyMap.vue";
import PropertyReviews from "~/components/PropertyReviews.vue";
import Home from "~/types/Home";
import Reviews from "~/types/Reviews";
import Users from "~/types/Users";
export default Vue.extend({
  components: {
    PropertyGallery,
    PropertyDetails,
    PropertyDescription,
    PropertyMap,
    PropertyReviews,
    PropertyHost
  },

  asyncData({ params }) {
    const homes: Home[] = require("~/data/homes");
    let reviews: Reviews[] = require("~/data/reviews");
    const users: Users[] = require("~/data/users");

    const getHome = (id: String) => homes.filter(el => el.objectID == id)[0];

    const getReviewsByHomeId = (id: String) =>
      reviews.filter(el => el.homeId == id);

    const getUserByHomeId = (id: String) =>
      users.filter(el => el.homeId.includes(id))[0];

    const home = getHome(params.id);
    reviews = getReviewsByHomeId(params.id);
    const user = getUserByHomeId(params.id);

    return { home, reviews, user };
  }
});
</script>
