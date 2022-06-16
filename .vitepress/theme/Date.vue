<script setup>
const props = defineProps({
  /**
   * { time, string }
   */
  date: Object
})

function getDateTime() {
  return !!props.date?.time
    ? new Date(props.date?.time).toISOString()
    : undefined
}
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd class="text-base leading-6 font-medium text-gray-300">
      <time :datetime="getDateTime()">{{ date?.string }}</time>
    </dd>
  </dl>
</template>
