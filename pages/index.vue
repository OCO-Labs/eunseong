<script>
export default {
  name: 'IndexPage'
}
</script>

<template>
  <div class="container mx-auto px-[7rem]">
    <div class="flex flex-col items-center mb-7">
      <h1 class="text-3xl font-bold text-blue-900">
        주요제품
      </h1>
      <h2 class="font-bold text-gray-400">
        냉동창고의 모든 것이 있습니다.
      </h2>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-3 w-[62rem] justify-items-center">
        <div class="w-80 h-[28.5rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="https://picsum.photos/200"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              냉동/냉장 저장고
            </h2>
            <p class="text-sm text-gray-400 group-hover:text-white">
              REFRIGERATED STORAGE
            </p>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-80 h-[28.5rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="https://picsum.photos/200"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              농축산물 저장고
            </h2>
            <p class="text-sm text-gray-400 group-hover:text-white">
              AGRICULTURAL STORAGE
            </p>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-80 h-[28.5rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="https://picsum.photos/200"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              물류보관 저장창고
            </h2>
            <p class="text-sm text-gray-400 group-hover:text-white">
              WAREHOUSE STORAGE
            </p>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-80 h-[28.5rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="https://picsum.photos/200"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              아이스크림 저장고
            </h2>
            <p class="text-sm text-gray-400 group-hover:text-white">
              ICECREAM STORAGE
            </p>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-80 h-[28.5rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="https://picsum.photos/200"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              방열문/에어커텐
            </h2>
            <p class="text-sm text-gray-400 group-hover:text-white">
              DOOR/CURTAIN
            </p>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-80 h-[28.5rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="https://picsum.photos/200"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              냉동기 유니트
            </h2>
            <p class="text-sm text-gray-400 group-hover:text-white">
              REFRIGERATED UNIT
            </p>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-12 mb-32">
      <div class="bg-blue-900 p-2 px-10 font-bold text-white">
        제품 소개 더 보러가기
      </div>
    </div>
    <div class="flex flex-col items-center mb-7">
      <h1 class="text-3xl font-bold text-blue-900">
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
        src="~/assets/cert/patent_01.png"
        alt="사진"
      >
      <img
        class="w-44 shadow-2xl"
        loading="lazy"
        src="~/assets/cert/patent_01.png"
        alt="사진"
      >
      <img
        class="w-44 shadow-2xl"
        loading="lazy"
        src="~/assets/cert/patent_01.png"
        alt="사진"
      >
    </div>
  </div>
  <div class="relative w-full h-72 bg-blue-900 -top-32 -z-10">
    <div class="flex justify-center pt-48">
      <div class="bg-white p-2 px-10 font-bold text-blue-900">
        인증 현황 더 보러가기
      </div>
    </div>
  </div>
</template>
