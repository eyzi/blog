<script setup>
import Date from './Date.vue'
import posts from '../metadata.json'
</script>

<template>
  <div class="divide-y divide-gray-200">
    <div class="pb-5 space-y-2 md:space-y-5">
      <h1
        class="
          text-3xl
          leading-9
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-3xl sm:leading-10
          md:text-3xl md:leading-14
        "
      >
        {{ $frontmatter.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-400">{{ $frontmatter.subtext }}</p>
    </div>
    <ul class="divide-y divide-gray-200">
      <li class="py-12" v-for="{ title, href, date, excerpt } of posts">
        <article
          class="
            space-y-2
            xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline
          "
        >
          <Date :date="date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a class="text-white" :href="href">{{ title }}</a>
              </h2>
              <div
                v-if="excerpt"
                class="prose max-w-none text-gray-300"
                v-html="excerpt"
              ></div>
            </div>
            <div class="text-base leading-6 font-medium">
              <a class="link" aria-label="read more" :href="href"
                >Read more →</a
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
