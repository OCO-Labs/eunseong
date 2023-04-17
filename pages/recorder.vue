<script>
export default {
  name: 'RecorderPage'
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="@/assets/part/Banner.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            냉동창고 온도DATA 기록장치
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
      <h1 class="text-4xl mb-20 text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        냉동/냉장 창고 온도DATA 기록장치개요
      </h1>
      <img
        src="@/assets/recorder/2015_new_03_1.png"
        alt="냉동/냉장 창고 온도DATA 기록장치개요"
        class="mb-20 mx-auto"
      ><div class="text-center text-[#494949] text-sm">
        냉동, 냉장 창고 내부,외부온도 DATA를 표시 및 기록 저장하고 이를 서버로 통신으로 보내고 핸드폰 또는 PC로 확인 가능한 시스템
      </div>
    </div>
    <div class="w-1/2 mx-auto mb-20">
      <h1 class="text-4xl mb-20 text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        온도DATA 기록장치 주요 기능
      </h1>
      <div class="text-center mb-12 leading-loose text-[#494949] text-sm">
        1) 냉동, 냉장 창고 내부,외부온도 DATA 및 습도 등의 LCD 표시<br>
        2) 터치스크린을 통한 입력(상한/하한 설정 등)<br>
        3) 그래프 표현<br>
        4) 메시지 전달기능(문자 방송기능)<br>
        5) 외부 신호 전달기능(외부 장치의 이상신호(접점) 기타 신호를 서버에 전송 -> 사용자에게 통보)<br>
        6) 출력 신호 (접점 및 기타 신호)
      </div>
      <img
        src="@/assets/recorder/2015_new_04.png"
        alt="온도DATA 기록장치 주요 기능"
        class="mb-20 mx-auto"
      >
    </div>
    <div class="w-1/2 mx-auto mb-20">
      <h1 class="text-4xl mb-20 text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        온도DATA 서버 기록장치 주요 기능
      </h1>
      <div class="text-center mb-12 leading-loose  text-[#494949] text-sm">
        1) 냉동, 냉장 창고 내부,외부온도 DATA 및 습도 등의 정보를 서버 저장장치에 기록<br>
        2) 감시 서버 작동(이상 신호를 실시간으로 분석)<br>
        3) 스마트폰 통신 서버(감시 서버에서 이상신호 분류된 신호를 스마트폰에 알려줌)<br>
        4) 메세지 입력 및 전송 서버 (문자 방송)
      </div>
      <img
        src="@/assets/recorder/2015_new_05.png"
        alt="온도DATA 서버 기록장치 주요 기능"
        class="mb-20 mx-auto"
      >
    </div>
    <div class="w-1/2 mx-auto mb-20">
      <h1 class="text-4xl mb-20 text-[#494949] font-bold inline-block border-b-4 border-gray-300 w-full">
        설정 / 동작 / 알람 등의 처리
      </h1>
      <div class="text-center mb-12 text-[#494949] leading-loose text-sm">
        <div class="inline text-2xl font-bold text-[#1B426B]">
          [ 참고 ]<br>
        </div>
        • LCD 표시장치의 온도를 정정하는 기능(0 점 조정 참조)<br>
        • 기타 장비로 부터 입력을 받을 수 있도록 입력을 만든다.<br>
        • 온도DATA는 정보로서 재 처리가 가능하게 한다.
      </div>
      <img
        src="@/assets/recorder/2015_new_06.png"
        alt="설정 / 동작 / 알람 등의 처리"
        class="mb-20 mx-auto"
      >
    </div>
    <div class="w-1/2 mx-auto mb-20">
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
      </div>
      <div class="self-center w-[271px]">
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
