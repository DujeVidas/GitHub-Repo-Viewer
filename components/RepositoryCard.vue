<template>
  <div>
    <v-card class="mx-10 max-w-screen-lg w-screen">
      <div class="flex justify-between py-2 px-5">
        <p class="font-normal text-lg">{{ repo.name }}</p>
        <div class="flex items-center space-x-2">
          <VTooltip text="Open In New Tab" location="start">
            <template v-slot:activator="{ props }">
              <VIcon
                icon="mdi-web"
                @click="openInNewTab(repo.html_url)"
                v-bind="props"
              ></VIcon>
            </template>
          </VTooltip>
          <VTooltip text="Copy SSH URL">
            <template v-slot:activator="{ props }">
              <VIcon
                icon="mdi-ssh"
                @click="copyToClipboard(repo.ssh_url)"
                v-bind="props"
              ></VIcon
            ></template>
          </VTooltip>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  repo: Object,
});
</script>

<style lang="scss" scoped></style>
