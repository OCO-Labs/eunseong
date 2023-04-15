<script>
export default {
  name: 'MapPage'
}
</script>

<template>
  <head>
    <title>오시는 길</title>
  </head>

  <body>
    <header>
      <div class="relative overflow-hidden mb-20">
        <img
          src="@/assets/intro/intro3.png"
          alt="이미지"
          class="w-full h-[449px]"
        >
        <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
        <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
          <div class="flex flex-col">
            <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
            <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
              회사소개
            </h2>
            <div class="h-[1px] mx-auto item-center w-[400px] bg-white border mt-12 mb-12" />
            <p class="text-2xl text-white text-center">
              냉동 / 냉장 저온저장고 무인관리 경비시스템
            </p>
            <p class="text-center text-white text-lg ">
              최고의 품질과 최고의 기술로 고객을 먼저 생각하는<br>
              21세기를 선도하는 냉동창고 전문업체 (주)은성냉동산업입니다.
            </p>
          </div>
        </div>
      </div>
      <div class="w-1/2 mx-auto mb-20">
        <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
          오시는 길
        </h1>
      </div>
    </header>
    <main>
      <section>
        오시는 길 map
      </section>
    </main>
  </body>
</template>
