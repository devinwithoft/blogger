<template>
  <div class="container-fluid">
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create Post
      </button>
    </div>
    <section class="row justify-content-center">
      <div v-for="p in posts" class="col-10 p-3 card elevation-5 m-2">
        <PostCards :post="p" />
      </div>
    </section>
  </div>

  <PostForm />
</template>

<script>
import { onMounted, computed } from "vue";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js"
import { AppState } from '../AppState';
import PostCards from '../components/PostCards.vue'
import PostForm from "../components/PostForm.vue";

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => { getPosts(); });
    return {
      posts: computed(() => AppState.posts)
    }
  },
  components: { PostCards, PostForm }
}
</script>

<style scoped lang="scss">

</style>
