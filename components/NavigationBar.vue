<template>
  <header class="bg-gray-100 shadow-2xl shadow-slate-200">
    <nav class="flex items-center justify-between container mx-auto px-4 py-2">
      <v-icon
        class="flex items-center"
        icon="mdi-github"
        color="black"
        size="120"
      ></v-icon>
      <div class="flex space-x-4 gap-5">
        <NuxtLink to="/" class="text-gray-700 hover:text-black">Home</NuxtLink>
        <v-divider
          vertical
          :thickness="6"
          class="border-opacity-100"
        ></v-divider>
        <NuxtLink to="/about" class="text-gray-700 hover:text-black"
          >About</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
