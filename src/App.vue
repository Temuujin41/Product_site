<template>
<Navbar2/>
<Navbar />
</template>

<script>
import Navbar from "./components/Navbar/navbarComponent.vue"
import Navbar2 from "./components/Navbar2/navbar2Components.vue";
export default {
name: "App",
components: {
  Navbar, Navbar2,
}
}
</script>