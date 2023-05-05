<script setup>
import CallIcon from './icons/CallIcon.vue'
</script>

<template>
  <header class="border-b">
    <div class="container mx-auto px-[7rem]">
      <div class="flex flex-row justify-between items-center h-16">
        <div class="flex flex-row gap-2">
          <CallIcon class="place-self-center" />
          <strong class="mr-2 text-2xl text-[#1B426B]">
            010-3787-2333
          </strong>
          <strong class="place-self-center text-[#1B426B]">고객 상담실</strong>
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
    <div class="flex flex-row justify-between">
      <NuxtLink to="/">
        <img
          src="~/assets/logo.png"
          width="226"
          height="90"
        >
      </NuxtLink>
      <div class="flex flex-row place-self-center">
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            회사소개
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/intro"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              인사말
            </NuxtLink>
            <NuxtLink
              to="/cert"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              인증현황
            </NuxtLink>
            <NuxtLink
              to="/map"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              오시는길
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            쇼케이스
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/showcase"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              쇼케이스
            </NuxtLink>
            <NuxtLink
              to="/product"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              제품소개
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-40 h-[6rem] font-bold text-xl"
          >
            냉동/냉장 저장고
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-40 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/storage"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              물류보관 저온창고
            </NuxtLink>
            <NuxtLink
              to="/refrigerator"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              냉동, 냉장 저장고
            </NuxtLink>
            <NuxtLink
              to="/farmstore"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              농축산물 저장고
            </NuxtLink>
            <NuxtLink
              to="/icecream"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              아이스크림 저장고
            </NuxtLink>
            <NuxtLink
              to="/carrier"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              캐리어 냉동기 저장시스템
            </NuxtLink>
            <NuxtLink
              to="/radiation"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              방열문/에어커텐
            </NuxtLink>
            <NuxtLink
              to="/heater"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              냉난방/항온항습기/제습기
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            냉동기계
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/part"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              부속품 수입 도/소매
            </NuxtLink>
            <NuxtLink
              to="/conveyor"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              콘베어 방음설비
            </NuxtLink>
            <NuxtLink
              to="/recorder"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              냉동창고 온도DATA 기록장치
            </NuxtLink>
            <NuxtLink
              to="/freezer"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              냉동기 유니트
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            시공사례
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/construction"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              시공사례
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            공지사항
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/notice"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              공지사항
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            견적의뢰
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <NuxtLink
              to="/request"
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
            >
              견적의뢰
            </NuxtLink>
          </div>
        </div>
        <div>
          <button
            class="peer w-32 h-[6rem] font-bold text-xl"
          >
            중고장터
          </button>
          <div
            class="hidden absolute peer-hover:flex hover:flex w-32 flex-col bg-white border z-10"
          >
            <a
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
              href="#"
            >About Us</a>
            <a
              class="px-5 py-3 hover:bg-[#1B426B] hover:text-white"
              href="#"
            >Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
