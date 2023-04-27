<script>
export default {
  name: 'StoragePage'
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="~/assets/storage/image.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            물류보관 저온창고
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
    <div class="w-2/3 mx-auto mb-10">
      <h1 class="text-4xl mb-10 text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        물류보관 저온창고 상세도
      </h1>
    </div>
    <div class="conatiner mx-auto w-2/5 mb-24">
      <img
        class="w-full mb-10"
        loading="lazy"
        src="~/assets/storage/img.png"
        alt="사진"
      >
      <img
        class="w-full"
        loading="lazy"
        src="~/assets/storage/table.png"
        alt="사진"
      >
    </div>
    <div class="w-2/3 mx-auto">
      <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        물류보관 저온창고 상세도
      </h1>
      <div class="w-4/5 mx-auto">
        <div class="flex flex-row h-80 mt-20 justify-between gap-12">
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
              1. 우수한 단열효과
            </div>
            <div class="ml-2">
              - 성화 Cold Storage Pannel은 단열성이 우수한 Polyrethane을
              주입 발포한 냉.온기를 완전결하게 차단하여에너지의 소비를
              최소한으로 절약 할 수 있는경제적인 제품입니다.
            </div>
          </div>
          <div class="w-[0.05rem] bg-gray-400" />
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
              2. 양호한 시공성
            </div>
            <div class="ml-2">
              - 공장에서품질관리에 의해 생산된 규격품을 현장에서
              조립하므로 설치장소(지하실,2,3층)에 구애받지않습니다.
            </div>
          </div>
        </div>
        <div class="flex gap-8 mt-10">
          <div class="w-1/2 h-[0.05rem] bg-gray-400" />
          <div class="w-1/2 h-[0.05rem] bg-gray-400" />
        </div>
        <div class="flex flex-row h-80 mt-10 justify-between gap-12">
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
              3. 증개축 이설 가능
            </div>
            <div class="ml-2">
              - 조립식냉장고는 패널조립 방식으로 해체가 용이하여
              점포확장, 배치변경에 따른 증,개축 이설이가능한
              경제적인 냉동, 냉장고 입니다.
            </div>
          </div>
          <div class="w-[0.05rem] bg-gray-400" />
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-10 rounded-full font-bold text-center text-white text-2xl">
              4. 유효공간 최대 활용
            </div>
            <div class="ml-2">
              - 같은외형의 크기라도 뛰어난 우레탄의 단열효과로
              축조식에 비해 보온 두께가 1/2~1/3로 얇아져
              유효공간을 넓게 사용할 수 있습니다.
            </div>
          </div>
        </div>
        <div class="flex gap-8 mt-10">
          <div class="w-1/2 h-[0.05rem] bg-gray-400" />
          <div class="w-1/2 h-[0.05rem] bg-gray-400" />
        </div>
        <div class="flex flex-row h-80 mt-10 justify-between gap-12">
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
              5. 위생적인 제품
            </div>
            <div class="ml-2">
              - 패널표면을칼라 철판, 비닐코팅 철판, 스텐레스 강판등을
              선택 사용하므로서 외관이 미려하며 위생적입니다.
            </div>
          </div>
          <div class="w-[0.05rem] bg-gray-400" />
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-10 rounded-full font-bold text-center text-white text-2xl">
              6. 공기 단축
            </div>
            <div class="ml-2">
              - 축조식및 기타 방식에 비해 공기를 1/3이상으로
              단축할 수 있습니다.(숙달시 1평을 2人 2시간이면조립가능.)
            </div>
          </div>
        </div>
        <div class="flex gap-8 mt-10">
          <div class="w-1/2 h-[0.05rem] bg-gray-400" />
          <div class="w-1/2 h-[0.05rem] bg-gray-400" />
        </div>
        <div class="flex flex-row h-80 mt-10 justify-between gap-12">
          <div class="w-1/2 flex flex-col space-y-4">
            <div class="bg-[#1B426B] p-4 px-14 rounded-full font-bold text-center text-white text-2xl">
              7. 품질 보장
            </div>
            <div class="ml-2">
              - 완벽한 단열 효과로 최저의 전기사용을 책임집니다.
            </div>
          </div>
          <div class="w-1/2 flex flex-col space-y-4" />
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
