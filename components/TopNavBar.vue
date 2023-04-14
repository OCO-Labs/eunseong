<script setup>
import CallIcon from './icons/CallIcon.vue'
</script>

<template>
  <header class="border-b">
    <div class="container mx-auto px-[7rem]">
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex flex-row gap-2">
          <CallIcon class="place-self-center" />
          <strong class="mr-2 text-2xl text-blue-900">
            010-3787-2333
          </strong>
          <strong class="place-self-center text-blue-900">고객 상담실</strong>
          <p class="place-self-center text-gray-400">
            제품에 대한 궁금한 사항을 문의해주세요.
          </p>
        </div>
        <div class="flex flex-row gap-2 text-gray-400">
          <p>HOME</p>
          <p>|</p>
          <p>CONTACT US</p>
          <p>|</p>
          <p>ADMIN</p>
          <p>|</p>
          <p class="text-green-700">
            블로그
          </p>
        </div>
      </div>
    </div>
  </header>
  <div class="container mx-auto px-[7rem] h-24">
    <div class="flex flex-row">
      <img
        src="~/assets/logo.png"
        width="226"
        height="90"
      >
      <div class="flex flex-row place-self-center">
        <div>
          <button
            class="peer w-32 h-[5.8rem] font-bold text-xl"
          >
            회사소개
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border"
          >
            <a
              class="px-5 py-3 hover:bg-blue-900 hover:text-white"
              href="#"
            >About Us</a>
            <a
              class="px-5 py-3 hover:bg-blue-900 hover:text-white"
              href="#"
            >Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
