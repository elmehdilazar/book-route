import {
  createStore
} from 'vuex'
const books = {
  namespaced:true,
  state: {
    books:[]
  },
  mutations: {
    fetchBook(state) {
      const books = JSON.parse(localStorage.getItem("books"));
      state.books = books;
    },
      removeBook(state, book) {
        const books = state.books;
        const UpdateBook = books.filter((item) => item.ref !== book.ref);
        localStorage.setItem("books", JSON.stringify(UpdateBook));
        state.books = UpdateBook;

    },
    addBook(state, book) {
      let books = state.books;
      console.log(books);
           books.push(book);
           localStorage.setItem('books', JSON.stringify(books));
      }
  },
  actions: {
    getBooks(context) {
      context.commit('fetchBook');
    },
     

  },
}
export default createStore({

  modules: {books}
})