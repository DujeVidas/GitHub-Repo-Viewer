<template>
  <div class="flex gap-5 justify-center items-center">
    <input
      class="border rounded border-black shadow-md"
      v-model="searchTerm"
      placeholder="Enter a GitHub username"
    />
    <VBtn append-icon="mdi-github" @click="searchUser">Search</VBtn>
  </div>
  <ul class="flex flex-col gap-5 mt-10 justify-center items-center">
    <li v-if="gotUser"><UserCard :user="user" /></li>
    <li v-for="repo in repositories" :key="repo.id">
      <RepositoryCard :repo="repo" />
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Repository {
  id: number;
  name: string;
  owner: Object;
}

const searchTerm = ref("");
const repositories = ref<Repository[]>([]);
const user = ref({});
const gotUser = ref(false);

const searchUser = async () => {
  try {
    repositories.value = await searchUserRepositories(searchTerm.value);

    user.value = repositories.value[0].owner;
    gotUser.value = true;
    console.log(repositories.value[0]);
  } catch (error) {
    console.error(error);
  }
};
</script>
