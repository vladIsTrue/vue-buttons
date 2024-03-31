<template>
  <header class="header">

    <div class="logo-container">
      <img class="logo-img" src="./resource/logo.jpg" alt="Pulse Logo">
      <div class="logo-text">Pulse</div>
    </div>

    <div class="menu">

      <MenuButton> Article </MenuButton>
      <MenuButton> Product </MenuButton>
      <MenuButton> Solutions </MenuButton>
      <MenuButton> Resources </MenuButton>
      <MenuButton> Enterprise </MenuButton>

      <AddButton/>
      <SearchButton/>

    </div>
  </header>
</template>

<script>
import MenuButton from "./ui/buttons/MenuButton.vue";
import SearchButton from "./ui/buttons/SearchButton.vue";
import AddButton from "./ui/buttons/AddButton.vue";

export default {
  name: 'PulseHeader',
  components: {
    MenuButton,
    SearchButton,
    AddButton
  }
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px 60px;
}

.menu {
  display: inline-flex;
}

.logo-container {
  display: inline-flex;
  align-items: center;
}

.logo-img {
  width: 25px;
  width: 25px;
}

.logo-text {
  font-size: 25px;
  margin: 5px;
}

.find-add {
  display: inline-flex;
}
</style>
