<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="table-responsive">
          <table
            class="table table-striped table-hover table-borderless table-striped align-middle"
          >
            <thead class="table-light">
              <caption>
                books
              </caption>
              <tr class="table-dark">
                <th>ref</th>
                <th>title</th>
                <th>description</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
      
              <tr v-for="(book, index) in state.books" :key="index">
                <td>{{ book.ref }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.description }}</td>
                <td class="d-flex justify-content-center">
                  <router-link
                    :to="{ name: 'UpdateBook', params: { id: book.ref } }"
                    class="btn btn-warning"
                  >
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </router-link>
                  <span class=" mx-2 btn btn-danger" @click="removeBook(book)">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
            </tbody>

            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from 'vuex';
export default {
  name: "home",
  setup() {
    const store = useStore();
    const state = reactive({
      books: computed(()=>store.state.books.books),
    });
    function getBooks() {
    store.dispatch("books/getBooks")
    }
    function removeBook(book) {
      store.commit("books/removeBook", book);
    }
    onMounted(() => {
      getBooks();
    });
    return { state, removeBook };
  },
};
</script>
