<script>
export default {
  name: 'ShowcasePage'
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="~/assets/showcase/image1.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            쇼케이스
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
    <div class="w-2/3 mx-auto mb-20">
      <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        쇼케이스 종류
      </h1>
      <div class="mt-10 grid grid-cols-3 justify-items-center">
        <div class="w-[21rem] h-[26rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/showcase/Rectangle51.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              정육 쇼케이스
            </h2>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-[21rem] h-[26rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/showcase/Rectangle19.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              마트 쇼케이스
            </h2>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
        <div class="w-[21rem] h-[26rem] border-2 rounded-3xl group">
          <img
            class="w-full border-b rounded-t-3xl"
            loading="lazy"
            src="~/assets/showcase/Rectangle21.png"
            alt="사진"
          >
          <div class="flex flex-col px-5 pt-[1.4rem] pb-[1.7rem] font-bold rounded-b-3xl group-hover:bg-blue-900">
            <h2 class="text-xl group-hover:text-white">
              꽃 쇼케이스
            </h2>
            <p class="mt-3 text-lg text-blue-900 group-hover:text-white">
              상세보기
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/3 mx-auto mb-20">
      <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        오픈 쇼케이스
      </h1>
      <div class="flex flex-row h-80 mt-20 justify-between gap-4">
        <div class="w-1/2 flex flex-col space-y-4">
          <div class="bg-blue-900 p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
            전제품 스테인레스 드레인판 적용
          </div>
          <div class="ml-2">
            - 음식물 잔해 혹은 찌꺼기 제거가 기존 제품들에 비해 수월합니다.
          </div>
          <div class="ml-2">
            - 스테인레스 사용으로 깔끔한 내부를 연출합니다.
          </div>
          <div class="ml-2">
            - 쇼케이스 내부 청소 시 기존 판에 비해 부식이 되지 않습니다.
          </div>
        </div>
        <div class="w-[0.05rem] bg-gray-400" />
        <div class="w-1/2 flex flex-col space-y-4">
          <div class="bg-blue-900 p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
            전제품 LED LAMP 기본 적용
          </div>
          <div class="ml-2">
            - 전제품 LED LAMP 기본 적용으로 가격, 경쟁력 우위
          </div>
          <div class="ml-2">
            - 수은, 필라멘트 등을 사용하지 않아 안전하고
            친환경적이며 각종 환경에대응 가능
          </div>
          <div class="ml-2">
            - 기존 조명 대비 최고 90%까지 전력 절감
          </div>
          <div class="ml-2">
            - 빛의 세기, 파장 조절, 광 제어 등이 자유로워
            다양한 기능 구현이 가능하며 녹색 문화창조
          </div>
        </div>
      </div>
      <div class="flex gap-8 mt-10">
        <div class="w-1/2 h-[0.05rem] bg-gray-400" />
        <div class="w-1/2 h-[0.05rem] bg-gray-400" />
      </div>
      <div class="flex flex-row h-80 mt-10 justify-between gap-4">
        <div class="w-1/2 flex flex-col space-y-4">
          <div class="bg-blue-900 p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
            상품 전시 공간 극대화
          </div>
          <div class="ml-2">
            - 상품 연출 공간을 넓혀 소비자의 시야 각도를 높여 진열 효과를 극대화 합니다.
          </div>
        </div>
        <div class="w-[0.05rem] bg-gray-400" />
        <div class="w-1/2 flex flex-col space-y-4">
          <div class="bg-blue-900 p-4 px-10 rounded-full font-bold text-center text-white text-2xl">
            대 / 중 / 소형 마트, 편의점, 정육시설
          </div>
          <div class="ml-2">
            - 쇼케이스 이용 장소로 가장 최적화된 우수 제품 설치 및 A/S 관리
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/3 mx-auto mb-20">
      <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        설치 사례
      </h1>
    </div>
    <div class="grid grid-cols-3 mx-auto w-1/2 gap-4">
      <div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle71.png"
          alt="낙농 쇼케이스"
        ><div class="text-center w-[271px] font-bold text-xl">
          낙농 쇼케이스
        </div>
      </div>
      <div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle72.png"
          alt="마트장식장설치"
        ><div class="text-center w-[271px] font-bold text-xl">
          마트장식장설치
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle73.png"
          alt="꽃 쇼케이스"
        ><div class="text-center w-[271px] font-bold text-xl">
          꽃 쇼케이스
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle74.png"
          alt="낙농 쇼케이스"
        ><div class="text-center w-[271px] font-bold text-xl">
          낙농 쇼케이스
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle75.png"
          alt="마트장식장설치"
        ><div class="text-center w-[271px] font-bold text-xl">
          마트장식장설치
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle76.png"
          alt="꽃 쇼케이스"
        ><div class="text-center w-[271px] font-bold text-xl">
          꽃 쇼케이스
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle68.png"
          alt="낙농 쇼케이스"
        ><div class="text-center w-[271px] font-bold text-xl">
          낙농 쇼케이스
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle69.png"
          alt="마트장식장설치"
        ><div class="text-center w-[271px] font-bold text-xl">
          마트장식장설치
        </div>
      </div><div class="self-center w-[271px]">
        <img
          src="@/assets/refrigerator/Rectangle70.png"
          alt="꽃 쇼케이스"
        ><div class="text-center w-[271px] font-bold text-xl">
          꽃
          쇼케이스
        </div>
      </div>
    </div>
  </main>
</template>
