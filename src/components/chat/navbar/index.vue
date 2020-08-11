<template>
  <nav class="nav-bar light">
    <div class="logo"><img class="pic" src="@/assets/logo.svg" alt /></div>
    <ul class="nav">
      <li class="nav-link nav-btn ">
        <i class="fas fa-user-alt fa-lg"></i>
      </li>
      <li class="nav-link nav-btn">
        <i class="far fa-comment-alt fa-lg"></i>
      </li>
      <li class="nav-link nav-btn">
        <i class="fas fa-users fa-lg"></i>
      </li>
      <li class="nav-link nav-btn">
        <i class="fas fa-address-book fa-lg"></i>
      </li>
      <li class="nav-link nav-btn">
        <i class="fas fa-cog fa-lg"></i>
      </li>
    </ul>
    <div class="mode nav-btn" @click="setTheme()">
      <i v-if="dark" class="fas fa-moon fa-lg"></i>
      <i v-else class="fas fa-sun fa-lg"></i>
    </div>
    <div class="profile">
      <div class="profile-pic">
        <img src="@/assets/user/user3.jpg" class="pic" alt="profile-pic" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      dark: true,
    };
  },
  methods: {
    setTheme() {
      this.dark = !this.dark;
    },
  },
};
</script>

<style lang="scss">
.nav-bar {
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  .nav-btn {
    &:hover {
      border: 1px solid red;
      color: #fff;
    }
  }
  .logo {
  }

  .nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nav-link {
      padding: 20px;
    }
  }
}

.pic {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>
