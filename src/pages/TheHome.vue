<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="_container">
        <div v-if="error" class="error">
          <p>{{ error }}</p>
        </div>

        <TheSearch
          @search="search = $event"
          :value="search"
          placeholder="Type username..."
        />
        <button v-if="!repos" @click="getRepos" class="btn btnPrimary">
          Search!
        </button>
        <button v-else @click="getRepos" class="btn btnPrimary">
          Search AGAIN!
        </button>
        <div class="user__wrapper" v-if="user">
          <div class="user-info">
            <div class="ava">
              <img :src="user.avatar_url" :alt="user.login" />
            </div>
            <div class="username">
              <p class="name">{{ user.login }}</p>
              <p class="posts">{{ user.public_repos }} public repos</p>
            </div>
          </div>
        </div>
        <div class="repos__wrapper" v-if="repos">
          <div v-for="repo in repos" :key="repo.id" class="repos-item">
            <div class="repos-info">
              <a class="link" :href="repo.html_url">{{ repo.name }}</a>
              <span>{{ repo.stargazers_count }} Stars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import axios from "axios";
export default {
  data() {
    return {
      user: null,
      search: "",
      repos: null,
      error: null,
    };
  },
  methods: {
    getRepos() {
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then((res) => {
          this.error = null;
          this.repos = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.repos = null;
          this.error = "Can`t find this user";
        });
      axios
        .get(`https://api.github.com/users/${this.search}`)
        .then((res) => {
          console.log(res.data);
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { TheSearch },
};
</script>

<style scoped>
._container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos__wrapper {
  width: 400px;
  margin: 30px 0;
}
.repos-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
.error {
  margin-bottom: 20px;
}
.user-info {
  display: flex;
  margin-top: 40px;
}
.ava img {
  width: 60px;
  height: auto;
  border-radius: 50%;
}
.username {
  margin-left: 10px;
}
.name {
  font-weight: bold;
}
</style>
