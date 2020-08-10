<template>
  <div class="side-bar dark-sidebar">div1</div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style>
.side-bar {
  width: 25%;
}

.dark-sidebar {
  background-color: var(--sideBar-dark-bg-color);
  color: var(--main-txt-color);
}

.light-sideBar {
  background-color: var(sideBar-light-bg-color);
}
</style>
