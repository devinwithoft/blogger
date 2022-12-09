<template>
  <section class="row">
    <div class="col-md-8">
      <router-link :to="{
        name: 'Profile', params: { profileId: post.creator.id }
      }">
        <div class="d-flex p-3 align-items-center">
          <img :src="post.creator.picture" alt="" class="img-fluid creator-img rounded-circle elevation-5">
          <h5 class="ps-3">{{ post.creator.name }}</h5>
        </div>
      </router-link>
      <h4 class="ps-2">{{ post.title }}</h4>
      <p class="ps-2">{{ post.body }}</p>
      <p class="ps-2">{{ post.createdAt.toLocaleString('en-us') }}</p>
    </div>
    <img :src="post.imgUrl" alt="" class="col-md-4 img-fluid">
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Post } from "../models/Post.js";
import { useRoute } from "vue-router";
export default {
  props: {
    post: {
      type: Post, required: true,
    }
  },
  setup(props) {
    const route = useRoute()
    return {
      route,
    }
  }
};
</script>


<style lang="scss" scoped>
.creator-img {
  height: 5vh;
  width: 5vh;
}
</style>