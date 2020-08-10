<template>
  <nav class="nav-bar dark">
    <ul class="nav">
      <div class="logo">
        <li>
          <img class="pic" src="@/assets/logo.svg" alt />
        </li>
      </div>
      <div class="nav-links">
        <li class="nav-link">
          <i class="fas fa-user-alt fa-lg"></i>
        </li>
        <li class="nav-link">
          <i class="far fa-comment-alt fa-lg"></i>
        </li>
        <li class="nav-link">
          <i class="fas fa-users fa-lg"></i>
        </li>
        <li class="nav-link">
          <i class="fas fa-address-book fa-lg"></i>
        </li>
        <li class="nav-link">
          <i class="fas fa-cog fa-lg"></i>
        </li>
      </div>
      <div class="mode" @click="setTheme()">
        <li>
          <i v-if="dark" class="fas fa-moon fa-lg"></i>
          <i v-else class="fas fa-sun fa-lg"></i>
        </li>
      </div>
      <div class="profile">
        <li>
          <div class="profile-pic">
            <img src="@/assets/user/user3.jpg" class="pic" alt="profile-pic" />
          </div>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      dark: true
    };
  },
  methods: {
    setTheme() {
      this.dark = !this.dark;
    }
  }
};
</script>

<style>
.logo {
  padding-top: 20px;
  padding-bottom: 10px;
}

.nav-bar {
  width: 5rem;
}
.nav-links {
  padding-top: 100px;
  padding-bottom: 100px;
}

.nav-link {
  padding-top: 20px;
  padding-bottom: 20px;
}

.mode {
  padding-top: 10px;
}
.profile-pic {
  padding-top: 80px;
}

.pic {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
