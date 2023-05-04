<script>
export default {
  name: 'ProductPage',
  data () {
    return {
      meat: true,
      mart: true,
      flower: true
    }
  }
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
      <button
        class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center"
        @click=" flower=true, mart=true, meat=true"
      >
        전체
      </button>
      <button
        class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center"
        @click="mart=false, flower=false, meat=true"
      >
        정육 쇼케이스
      </button>
      <button
        class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center"
        @click="mart=true, flower=false, meat=false"
      >
        마트 쇼케이스
      </button>
      <button
        class="border rounded-full h-[46px] w-[143px] text-xl text-[#1B426B] hover:bg-[#1B426B] hover:text-white text-center"
        @click="mart=false, flower=true, meat=false"
      >
        꽃 쇼케이스
      </button>
    </div>
    <div class="w-2/3 mx-auto ">
      <div class="mt-10 grid grid-cols-4 justify-items-center">
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold border rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              표준형 오픈 다단 쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-1.png"
            alt="사진"
          >
          <div
            v-if="mart"
            class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]"
          >
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              표준 도어형 다단 쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-2.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-center text-[#494949] group-hover:text-white">
              유럽형 오픈 다단 쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-3.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="text-xs text-[#494949] text-center group-hover:text-white">
              대용량 CVS 오픈 <br>다단쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-4.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="text-xs text-[#494949] text-center group-hover:text-white ">
              대용량 CVS 도어형 <br>다용도 쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-5.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              세미다단 오픈 쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-6.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              냉장/냉동 평대
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-7.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              유럽형 반찬대면 쇼케이스
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle79.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              냉동식품 평대
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle81.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              생선비냉 서랍형
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle83-1.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              다용도 냉장평대
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle85-1.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              와이드 냉동평대
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle85-1.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class=" text-xs text-[#494949] text-center group-hover:text-white">
              앙코르-오픈다단/<br>
              일배낙농,유제품
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle85.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              앙코르-세미다단
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle83-2.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              벽면형온장고
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle85-2.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              앙코르-오픈다단/청과,야채
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle87.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              카두만두-다용도 1도어
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle89.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              카두만두-다용도 2도어
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle83-3.png"
            alt="사진"
          >
          <div

            class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]"
          >
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              핑야오-수경야채4각
            </p>
          </div>
        </div>
        <div
          v-if="mart"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle85-3.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              타지마할-양념육
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-8.png"
            alt="사진"
          >
          <div

            class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]"
          >
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              고급형 정육대면 직냉식(2,3단)
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-9.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              앙코르-오픈다단/정육,생선
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-10.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              유럽형 정육대면
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-11.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              이스타나-유럽 A,B형
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-12.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              이스타나-일반 A,B형
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-13.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              이스타나-일반형 코너
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-14.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              육절기
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-15.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              육절기
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-16.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              골절기
            </p>
          </div>
        </div>
        <div
          v-if="meat"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-17.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              골절기
            </p>
          </div>
        </div>
        <div
          v-if="flower"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-18.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              꽃 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              <br>
            </p>
          </div>
        </div>
        <div
          v-if="flower"
          class="w-[249px] h-[341px] rounded-3xl group mt-4"
        >
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/product/Rectangle74-19.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] border font-bold rounded-b-3xl group-hover:bg-[#1B426B]">
            <h2 class="text-xl text-[#1B426B] text-center group-hover:text-white">
              꽃 쇼케이스
            </h2>
            <p class="mt-3 text-sm text-[#494949] text-center group-hover:text-white">
              <br>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
