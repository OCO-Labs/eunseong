<script>
export default {
  name: 'CertPage'
}
</script>

<template>
  <head>
    <title>인사말</title>
  </head>

  <body>
    <header>
      <div class="relative overflow-hidden">
        <img
          src="@/assets/intro/intro3.png"
          alt="이미지"
          class="w-full h-auto"
        >
        <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
        <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
          <div class="flex flex-col">
            <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-4" />
            <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
              회사소개
            </h2>
            <div class="h-[1px] mx-auto item-center w-[400px] bg-white border mt-4 mb-4" />
            <p class="text-xl text-white text-center">
              냉동 / 냉장 저온저장고 무인관리 경비시스템
            </p>
            <p class="text-center text-white  ">
              최고의 품질과 최고의 기술로 고객을 먼저 생각하는<br>
              21세기를 선도하는 냉동창고 전문업체 (주)은성냉동산업입니다.
            </p>
          </div>
        </div>
      </div>
      <!-- <img
                                                src="@/assets/intro/intro3.png"
                                                alt=""
                                              > -->
      <h2 class="mt-10 text-[35px] font-bold">
        인증현황
      </h2>
      <div class="w-[1036px] h-[1px] bg-[#494949] mb-20" />
    </header>
    <main>
      <div class="grid grid-cols-4 gap-16 justify-items-center">
        <img
          src="@/assets/cert/patent_01.png"
          alt=""
        >
        <img
          src="@/assets/cert/patent_02.png"
          alt=""
        >
        <img
          src="@/assets/cert/patent_03.png"
          alt=""
        >
        <img
          src="@/assets/cert/patent_04.png"
          alt=""
        ><img
          src="@/assets/cert/patent_01.png"
          alt=""
        ><img
          src="@/assets/cert/patent_01.png"
          alt=""
        ><img
          src="@/assets/cert/patent_01.png"
          alt=""
        ><img
          src="@/assets/cert/patent_01.png"
          alt=""
        >
      </div>
    </main>
  </body>
</template>
