<template>
  <div v-if="profile" class="container-fluid">
    <section class="row  justify-content-start align-items-center">
      <div class="col-4 d-flex justify-content-end">
        <img :src="profile.picture" class="img-fluid rounded-circle profile-img my-3 elevation-5">
      </div>
      <div class="col-4">
        <h3>{{ profile.name }}</h3>
        <h5>{{ profile.bio }}</h5>
      </div>
      <!-- <div v-if="(account.id == profile.id)" class="col-12"> -->
      <!-- <PostForm /> -->
      <!-- </div> -->
    </section>


    <section class="row justify-content-center">
      <div v-for="p in posts" class="col-10 p-3 card elevation-5 m-2">
        <PostCards :post="p" />
      </div>
    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { profilesService } from "../services/ProfilesService.js"
import { postsService } from "../services/PostsService.js"
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";
// import PostForm from "../components/PostForm.vue";

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId);
      }
      catch (error) {
        Pop.error;
      }
    }
    async function getPostsByProfileId() {
      try {
        await postsService.getPostsByProfileId(route.params.profileId);
      }
      catch (error) {
        Pop.error;
      }
    }
    onMounted(() => {
      getProfileById();
      getPostsByProfileId();
    });
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account)
    };
  },
  components: { PostForm }
};
</script>


<style lang="scss" scoped>
.profile-img {
  height: 25vh;
  width: 25vh
}
</style>