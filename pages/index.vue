<script>
export default {
  name: 'IndexPage'
}
</script>

<template>
  <img
    class="w-full mb-32"
    loading="lazy"
    src="~/assets/index/big.png"
    alt="사진"
  >
  <div class="container mx-auto px-[7rem]">
    <div class="flex flex-col items-center mb-7">
      <h1 class="text-3xl font-bold text-[#1B426B]">
        주요제품
      </h1>
      <h2 class="font-bold text-gray-400">
        냉동창고의 모든 것이 있습니다.
      </h2>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-10 w-[62rem] justify-items-center">
        <div class="w-80 h-[25.9rem] border-2 rounded-3xl group">
          <NuxtLink to="/refrigerator">
            <img
              class="w-full border-b rounded-t-3xl"
              loading="lazy"
              src="~/assets/index/Rectangle17.png"
              alt="사진"
            >

            <div class="flex flex-col p-5 font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
              <h2 class="text-xl group-hover:text-white">
                냉동/냉장 저장고
              </h2>
              <p class="text-sm text-gray-400 group-hover:text-white">
                REFRIGERATED STORAGE
              </p>
              <p class="mt-3 text-lg text-[#1B426B] group-hover:text-white">
                상세보기
              </p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-80 h-[25.9rem] border-2 rounded-3xl group">
          <NuxtLink to="/farmstore">
            <img
              class="w-full border-b rounded-t-3xl"
              loading="lazy"
              src="~/assets/index/Rectangle19.png"
              alt="사진"
            >
            <div class="flex flex-col p-5 font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
              <h2 class="text-xl group-hover:text-white">
                농축산물 저장고
              </h2>
              <p class="text-sm text-gray-400 group-hover:text-white">
                AGRICULTURAL STORAGE
              </p>
              <p class="mt-3 text-lg text-[#1B426B] group-hover:text-white">
                상세보기
              </p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-80 h-[25.9rem] border-2 rounded-3xl group">
          <NuxtLink to="/storage">
            <img
              class="w-full border-b rounded-t-3xl"
              loading="lazy"
              src="~/assets/index/Rectangle21.png"
              alt="사진"
            >
            <div class="flex flex-col p-5 font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
              <h2 class="text-xl group-hover:text-white">
                물류보관 저장창고
              </h2>
              <p class="text-sm text-gray-400 group-hover:text-white">
                WAREHOUSE STORAGE
              </p>
              <p class="mt-3 text-lg text-[#1B426B] group-hover:text-white">
                상세보기
              </p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-80 h-[25.9rem] border-2 rounded-3xl group">
          <NuxtLink to="/icecream">
            <img
              class="w-full border-b rounded-t-3xl"
              loading="lazy"
              src="~/assets/index/Rectangle1.png"
              alt="사진"
            >
            <div class="flex flex-col p-5 font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
              <h2 class="text-xl group-hover:text-white">
                아이스크림 저장고
              </h2>
              <p class="text-sm text-gray-400 group-hover:text-white">
                ICECREAM STORAGE
              </p>
              <p class="mt-3 text-lg text-[#1B426B] group-hover:text-white">
                상세보기
              </p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-80 h-[25.9rem] border-2 rounded-3xl group">
          <NuxtLink to="/radiation">
            <img
              class="w-full border-b rounded-t-3xl"
              loading="lazy"
              src="~/assets/index/Rectangle8.png"
              alt="사진"
            >
            <div class="flex flex-col p-5 font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
              <h2 class="text-xl group-hover:text-white">
                방열문/에어커텐
              </h2>
              <p class="text-sm text-gray-400 group-hover:text-white">
                DOOR/CURTAIN
              </p>
              <p class="mt-3 text-lg text-[#1B426B] group-hover:text-white">
                상세보기
              </p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-80 h-[25.9rem] border-2 rounded-3xl group">
          <NuxtLink to="/freezer">
            <img
              class="w-full border-b rounded-t-3xl"
              loading="lazy"
              src="~/assets/index/Rectangle10.png"
              alt="사진"
            >
            <div class="flex flex-col p-5 font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
              <h2 class="text-xl group-hover:text-white">
                냉동기 유니트
              </h2>
              <p class="text-sm text-gray-400 group-hover:text-white">
                REFRIGERATED UNIT
              </p>
              <p class="mt-3 text-lg text-[#1B426B] group-hover:text-white">
                상세보기
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-12 mb-32">
      <NuxtLink to="/product">
        <div class="bg-[#1B426B] p-2 px-10 font-bold text-white">
          제품 소개 더 보러가기
        </div>
      </NuxtLink>
    </div>
    <div class="flex flex-col items-center mb-7">
      <h1 class="text-3xl font-bold text-[#1B426B]">
        특허 및 인증
      </h1>
      <h2 class="font-bold text-gray-400">
        특허 기술을 활용하여 개발된 제품으로, 우수한 품질과 기능성을 보장합니다.
      </h2>
    </div>
    <div class="mt-10 container mx-auto px-[14rem] flex flex-row gap-6 justify-center">
      <img
        class="w-44 shadow-2xl"
        loading="lazy"
        src="~/assets/cert/patent_01.png"
        alt="사진"
      >
      <img
        class="w-44 shadow-2xl"
        loading="lazy"
        src="~/assets/cert/patent_05.png"
        alt="사진"
      >
      <img
        class="w-44 shadow-2xl"
        loading="lazy"
        src="~/assets/cert/patent_08.png"
        alt="사진"
      >
      <img
        class="w-44 shadow-2xl"
        loading="lazy"
        src="~/assets/cert/patent_14.png"
        alt="사진"
      >
    </div>
  </div>
  <div class="relative w-full h-72 bg-[#1B426B] -top-32 -z-10" />
  <div class="flex justify-center -top-56 relative">
    <NuxtLink
      to="/cert"
      class="z-10 bg-white p-2 px-10 font-bold text-[#1B426B]"
    >
      인증 현황 더 보러가기
    </NuxtLink>
  </div>
  <div class="flex flex-row justify-center">
    <iframe
      width="800"
      height="500"
      src="https://www.youtube.com/embed/nhCn5UOuuU4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
  <div class="flex flex-row justify-center mt-4">
    <img
      class="w-[26rem]"
      loading="lazy"
      src="~/assets/index/Rectangle14.png"
      alt="사진"
    >
    <img
      class="w-[26rem]"
      loading="lazy"
      src="~/assets/index/Rectangle15.png"
      alt="사진"
    >
  </div>
</template>
