<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="_container">
          <div class="navbar-content">
            <div class="logo">VUE 2 CLI</div>
            <ul class="navbar-list">
              <li v-for="link in links" :key="link.title" class="navbar-item">
                <router-link :to="link.url" class="navbar-link">{{
                  link.title
                }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "home",
          url: "/",
        },
        {
          title: "example",
          url: "example",
        },
      ],
    };
  },
};
</script>

<style>
.router-link-exact-active {
  color: #5247e7;
}
</style>
