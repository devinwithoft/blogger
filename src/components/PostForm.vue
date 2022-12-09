<template>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createPost()" class="row justify-content-around mt-4">
            <div class="mb-3 col-5">
              <label for="" class="form-label">Title</label>
              <input type="text" class="form-control" v-model="editable.title" name="" id="" aria-describedby="helpId"
                placeholder="">
              <small id="helpId" class="form-text text-muted">Post Title</small>
            </div>
            <div class="mb-3 col-5">
              <label for="" class="form-label">Body</label>
              <input type="text" class="form-control" v-model="editable.body" name="" id="" aria-describedby="helpId"
                placeholder="">
              <small id="helpId" class="form-text text-muted">Post Content</small>
            </div>
            <div class="mb-3 col-11">
              <label for="" class="form-label">Image</label>
              <input type="url" class="form-control" v-model="editable.imgUrl" name="" id="" aria-describedby="helpId"
                placeholder="">
              <img :src="editable.imgUrl" class="img-fluid" alt="">
            </div>
            <div class="mb-3 col-4">
              <button class="btn  w-100 rounded-pill selectable text-danger darken-20" type="button"
                @click="editable = {}">Cancel</button>
            </div>
            <div class="mb-3 col-4">
              <button type="submit" class="btn btn-primary w-100 rounded-pill">Create</button>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- <button type="submit" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>






</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    const editable = ref({
      title: '',
      body: '',
      imgUrl: ''
    })
    return {
      editable,


      async createPost() {
        try {
          await postsService.createPost(editable.value)
        } catch (error) {
          Pop.error(error)
        }

      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>