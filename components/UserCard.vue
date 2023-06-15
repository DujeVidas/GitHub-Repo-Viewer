<template>
  <VCard class="max-w-lg w-screen">
    <div class="flex justify-start px-5 py-2">
      <VAvatar size="25px">
        <VImg :src="user.avatar_url"></VImg>
      </VAvatar>
      <p class="font-medium text-xl px-5">{{ user.login }}</p>
      <VTooltip text="Open In New Tab">
        <template v-slot:activator="{ props }">
          <VIcon
            class="flex-1 justify-end"
            icon="mdi-web"
            @click="openInNewTab(user.html_url)"
            v-bind="props"
          ></VIcon>
        </template>
      </VTooltip>
    </div>
  </VCard>
</template>

<script setup>
const props = defineProps({
  user: Object,
});
</script>

<style lang="scss" scoped></style>
