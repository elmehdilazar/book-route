<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto my-4"></div>
      <h3 class="border-bottom py-2">modify book</h3>
      <form @submit="submit" class="mt-3">
        <div class="mb-3">
          <label for="" class="form-label">Ref</label>
          <input
            type="text"
            name="ref"
            disabled
            v-model="state.book.ref"
            :class="
              state.book.ref.length ? state.successClass : state.errorClass
            "
            class="form-control"
            placeholder="ref"
            aria-describedby="helpId"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">title</label>
          <input
            type="text"
            name="title"
            v-model="state.book.title"
            :class="
              state.book.title.length ? state.successClass : state.errorClass
            "
            class="form-control"
            placeholder="title"
            aria-describedby="helpId"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">description</label>
          <textarea
            name="descripton"
            v-model="state.book.description"
            :class="
              state.book.description.length
                ? state.successClass
                : state.errorClass
            "
            rows="3"
          ></textarea>
        </div>
        <button
          :disabled="
            !state.book.description.length ||
            !state.book.ref.length ||
            !state.book.title.length
          "
          type="submit"
          class="btn btn-primary"
        >
          modify
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "addook",
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      book: {
        ref: "",
        title: "",
        description: "",
      },
      errorClass: "form-control is-invalid",
      successClass: "form-control is-valid",
    });
    function submit($event) {
      $event.preventDefault();
        let books = JSON.parse(localStorage.getItem("books"));
        let UpdateBook = books.filter((item) => item.ref !== state.book.ref);
        UpdateBook.push(state.book);
      localStorage.setItem("books", JSON.stringify(UpdateBook));
      state.book = {
        ref: "",
        title: "",
        description: "",
      };
      router.push("/");
    }
    onMounted(() => {
      const ref = route.params.id;
      const books = JSON.parse(localStorage.getItem("books"));
      const book = books.find((item) => item.ref == ref);
      state.book = book;
    });

    return {
      state,
      submit,
    };
  },
};
</script>
