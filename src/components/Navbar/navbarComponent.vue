<template>
<nav class="bg-stone-200 sticky md">
    <div class="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">

          <button @click="show = !show"  type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400   hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> 

        </div>
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <div class="flex flex-shrink-0">
            <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div>
          <div class="hidden md:ml-6 md:block">
            <div class="flex space-x-5">
              <a href="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/">Home</router-link></a>
  
              <a href="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/about">About</router-link></a>
  
              <a href="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/basket">Basket</router-link></a>
  
              <a href="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/product">product</router-link></a>
  
              <a href="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/login">login</router-link></a>

              <a href="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/news">News</router-link></a>

              <a horef="#" class=" text-#666666  hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium"><router-link to="/company">Company</router-link></a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
     
          <button type="button" class="inline-flex items-center justify-center rounded-md bg-stone-200 p-2  hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            
          </button>
  
          <div class="relative ml-3">
            <div>
             
            </div>
  
          </div>
        </div>
      </div>
    </div>
  
    <div v-if="show" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
    
        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/">Home</router-link></a>
  
        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/about">About</router-link></a>
  
        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/basket">Basket</router-link></a>
  
        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/product">product</router-link></a>
  
        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/login">Login</router-link></a>

        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/news">News</router-link></a>
  
        <a href="#" class=" text-#666666   hover:text-indigo-500 block px-3 py-2 rounded-md text-base font-medium"><router-link to="/company">Company</router-link></a>
      </div>

    </div>
  </nav>
  <router-view />
  </template>

<script>
export default {
  
    data() {
        return{
            name: "Navbar",
            show: false,
        }
    }
}

</script>
  
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
nav.sticky {
  position: sticky;
  top: 0;
}


</style>
