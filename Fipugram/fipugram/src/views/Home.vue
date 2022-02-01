<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <!-- nova forma za post -->
      <img
        v-if="loading"
        class="loading"
        :src="require('@/assets/loading.gif')"
      />
      <form v-if="!loading" @submit.prevent="postNewImage" class="mb-5">
        <div class="form-group">
          <croppa
            :width="400"
            :height="400"
            placeholder="Učitaj sliku..."
            v-model="imageReference"
          ></croppa>
        </div>
        <div class="form-group">
          <label for="imageDescription">Description</label>
          <input
            v-model="newImageDescription"
            type="text"
            class="form-control ml-2"
            placeholder="Enter the image description"
            id="imageDescription"
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
      </form>
      <instagram-card
        v-for="card in filteredCards"
        :key="card.id"
        :info="card"
      />
    </div>
    <div class="col-3">Sidebar</div>
  </div>
</template>

<script>
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store";
import { db, storage } from "@/firebase";

/*cards = [
  {
    url: "https://picsum.photos/id/1/400/400",
    description: "laptop",
    time: "few minutes ago...",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
    description: "laptop #2",
    time: "an hour ago...",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    description: "laptop #3",
    time: "few hours ago...",
  },
  {
    url: "https://picsum.photos/id/4/400/400",
    description: "laptop #4",
    time: "few days ago...",
  },
];
*/

export default {
  name: "home",
  data: function () {
    return {
      loading: false,
      cards: [],
      store,
      newImageUrl: "",
      newImageDescription: "",
      imageReference: null,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("Firebase dohvat");

      db.collection("posts")
        .orderBy("posted_at", "desc")
        .limit(10)
        .get()
        .then((query) => {
          this.cards = [];
          query.forEach((doc) => {
            const data = doc.data();

            this.cards.push({
              id: doc.id,
              time: data.posted_at,
              description: data.description,
              url: data.url,
            });
          });
        });
    },
    getImage() {
      //Promise based

      return new Promise((resolveFn, errorFn) => {
        this.imageReference.generateBlob((data) => {
          resolveFn(data);
        });
      });
    },
    async postNewImage() {
      try {
        this.loading = true;
        let blobData = await this.getImage();
        let imageName =
          "posts/" + store.currentUser + "/" + Date.now() + ".png";
        let result = await storage.ref(imageName).put(blobData);
        let url = await result.ref.getDownloadURL();

        console.log("Javni link", url);

        const imageDescription = this.newImageDescription;

        let doc = await db.collection("posts").add({
          url: url,
          description: imageDescription,
          email: store.currentUser,
          posted_at: Date.now(),
        });

        console.log("Spremljeno", doc);
        alert("Slika je uspješno objavljena");

        this.getPosts();
      } catch (e) {
        console.error(e);
      }
      this.loading = false;
    },
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;

      return this.cards.filter((card) => card.description.includes(termin));
    },
  },
  components: {
    InstagramCard,
  },
};
</script>

<style scoped>
.loading {
  width: 400px;
}
</style>
