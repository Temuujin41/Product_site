<script setup>
  import { ref, computed } from 'vue'
  import Home from './Home.vue'
  import About from './About.vue'
  import Login from './LoginSignup.vue'
  import Productions from './productions.vue'
  import Basket from './baskets.vue'
  const routes = {
    '/': Home,
    '/about': About,
    '/login': Login,
    '/productions': Productions,
    '/basket': Basket
  }
  
  const currentPath = ref(window.location.hash)
  
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })
  
  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
  </script>
  
  <template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#/">
      <img src="./assets/4LifeLogo .png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a href="#/" class="navbar-item">
        Home
      </a>

      <a href="#/productions" class="navbar-item">
        Productions
      </a>

      <a href="#/basket" class="navbar-item">
        Basket
      </a>
      <a href="#/about" class="navbar-item">
        About
      </a>

  
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="#/login" class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    <component :is="currentView" />
  </template>