<script>
export default {
  name: 'ProductPage'
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="@/assets/showcase/image1.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            제품소개
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
  </header>
  <main>
    <div class="w-1/2 mx-auto mb-20">
      <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full mb-20">
        제품소개
      </h1>
    </div>
    <div class="flex flex-row items-center justify-center space-x-12 ">
      <button class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center">
        전체
      </button>
      <button class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center">
        정육 쇼케이스
      </button>
      <button class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center">
        마트 쇼케이스
      </button>
      <button class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center">
        꽃 쇼케이스
      </button>
    </div>
    <div class="w-2/3 mx-auto ">
      <div class="mt-10 grid grid-cols-4 justify-items-center">
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              표준형 오픈 다단 쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-1.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              표준 도어형 다단 쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-2.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-center text-[#494949] group-hover:text-white">
              유럽형 오픈 다단 쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-3.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              대용량 CVS 오픈 <br>다단쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              표준형 오픈 다단 쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-1.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              표준 도어형 다단 쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-2.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-center text-[#494949] group-hover:text-white">
              유럽형 오픈 다단 쇼케이스
            </p>
          </div>
        </div>
        <div class="w-[249px] h-[341px] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-3.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              대용량 CVS 오픈 <br>다단쇼케이스
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
