<script>
export default {
  name: 'IntroPage'
}
</script>

<template>
  <head>
    <title>인사말</title>
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
          인사말
        </h1>
      </div>
    </header>
    <main>
      <p class="text-2xl text-center mt-10 text-[#1B426B]">
        항상 고객을 최우선으로 생각하는 기업(주)은성냉동산업입니다.<br>
      </p>
      <div class="font-bold text-2xl text-center mb-10 text-[#1B426B]">
        홈페이지 방문에 감사드리며 진심으로 환영합니다.
      </div>
      <div class="h-[201px] w-[1px] bg-[#1B426B] solid border mx-auto mb-10" />

      <div class="grid grid-rows-2 grid-flow-col item-center justify-center gap-x-10">
        <img
          src="@/assets/intro/intro1.png"
          alt="사진"
          class="h-[540px] w-[363px]"
        >
        <p class="text-center text-[#767676]">
          (주)은성냉동산업대표
        </p>
        <p class="text-[21px] text-[#767676] leading-10">
          안녕하세요? (주)은성냉동산업입니다.<br>
          저희 (주)은성냉동산업은 30년 이상의 노하우와 실력을 겸비한<br>
          젊고 유능한 인력들로만 구성된 냉동창고 전문시공업체입니다.<br>
          저희 (주)은성냉동산업은 아이스크림 저장고제작, 농·축산물 저장고 제작,<br>
          냉동·냉장 저장고 제작, 냉동기계고장알림시스템 운영, 콘베어 제작,<br>
          냉·난방시스템 설비·제조 전문회사로서 우수한 기술력과 품질로<br>
          고객 여러분의 기대에부흥하기 위한 끊임없는 노력과 고객 서비스에<br>
          최선을 다하고 있습니다. 더욱 진보된 냉동산업의 발전에 크게<br>
          이바지 할 것을 약속드리며 고객의 일익을 담당할 수 있도록<br>
          임직원 일동은 열과성의를 다하고 있습니다. 당사는 향후 지속적으로<br>
          다양한 제품 개발과 품질 향상의 실천으로 최선을 다하고<br>
          꾸준히 노력하는 회사가 되겠습니다.감사합니다.
        </p>
        <p class="text-xl font-bold text-end">
          (주)은성냉동산업 임직원 일동
        </p>
      </div>
      <img
        src="@/assets/intro/intro2.png"
        alt="조직도"
        class="mx-auto -mt-96"
      >
    </main>
  </body>
</template>
