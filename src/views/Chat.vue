<template>
  <div>
    <main>
      <div class="main-containor">
        <NavBar />
        <SideBar />
        <Message />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/chat/navbar/index";
import SideBar from "@/components/chat/sidebar/index";
import Message from "@/components/chat/main/index";
export default {
  components: {
    NavBar,
    SideBar,
    Message
  }
};
</script>

<style>
.main-containor {
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.dark {
  background-color: var(--main-dark-bg-color);
  color: var(--main-txt-color);
}

.light {
  background-color: var(--main-light-bg-color);
}
</style>
