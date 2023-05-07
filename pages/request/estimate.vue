<script setup>
import { ref } from 'vue'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'nuxt/app'

const router = useRouter()
const nameInput = ref()
const passwordInput = ref()
const titleInput = ref()
const telInput = ref()
const contentInput = ref()

async function saveRequest () {
  const db = getFirestore()
  if (nameInput.value && titleInput.value && telInput.value && contentInput.value && passwordInput.value) {
    const docRef = await addDoc(collection(db, 'request'), {
      name: nameInput.value,
      password: passwordInput.value,
      title: titleInput.value,
      tel: telInput.value,
      content: contentInput.value,
      createdAt: serverTimestamp()
    })
    console.log('Document written with ID: ', docRef.id)
    alert('신청 되었습니다!')
    nameInput.value = ''
    passwordInput.value = ''
    titleInput.value = ''
    telInput.value = ''
    contentInput.value = ''
    router.push('/request')
  } else {
    alert('빈 칸없이 입력해주세요!')
  }
}
</script>

<script>
export default {
  name: 'EstimatePage'
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="@/assets/estimate.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            견적의뢰
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
    <div class="w-2/3 mx-auto">
      <h1 class="text-4xl text-[#494949] font-bold inline-block border-b-2 border-black w-full">
        견적의뢰
      </h1>
    </div>
    <div class="w-2/3 mx-auto">
      <div class="flex flex-row h-12 justify-items-center">
        <label
          class="bg-[#F6F6F6] font-sans text-middle w-24 px-4 py-4 text-sm "
          for="name"
        >닉네임 </label>

        <input
          id="name"
          v-model="nameInput"
          required
          placeholder="닉네임을 입력해주세요"
          class="border w-56 h-8 ml-2 items-center justify-center content-center self-center py-2"
          type="text"
          name="name"
        >
      </div>
      <hr>
      <div class="flex flex-row h-12 justify-items-center">
        <label
          class="bg-[#F6F6F6] font-sans text-middle w-24  px-4 py-4 text-sm "
          for="password"
        >비밀번호</label>

        <input
          id="password"
          v-model="passwordInput"
          placeholder="비밀번호를 입력해주세요"
          required
          class="border w-56 h-8 ml-2 items-center justify-center content-center self-center py-2"
          type="password"
          name="password"
        ><div class="inline-block self-center text-sm text-[#494949]">
          &nbsp; *비밀글로 처리됩니다
        </div>
      </div><hr>
      <div class="flex flex-row h-12 justify-items-center">
        <label
          class="bg-[#F6F6F6] font-sans text-middle w-24  px-4 py-4 text-sm "
          for="title"
        >제목</label>
        <input
          id="title"
          v-model="titleInput"
          required
          placeholder="제목을 입력해주세요"
          class="border w-96 h-8 ml-2 items-center justify-center content-center self-center py-2"
          type="text"
          name="title"
        >
      </div><hr>
      <div class="flex flex-row h-12 justify-items-center">
        <label
          class="bg-[#F6F6F6] font-sans text-middle w-24  px-4 py-4 text-sm "
          for="phone"
        >전화번호:</label>
        <input
          id="phone"
          v-model="telInput"
          required
          placeholder="전화번호를 입력해주세요"
          class="border w-56 h-8 ml-2 items-center justify-center content-center self-center py-2"
          type="tel"
          name="phone"
        >
      </div><hr>
      <div class="flex flex-row h-12">
        <label
          required
          placeholder="견적 내용을 입력해주세요"
          class="bg-[#F6F6F6] font-sans text-middle w-screen px-4 py-4 text-sm "
          for="content"
        >내용:</label>
      </div><div class="flex flex-row h-56">
        <textarea
          id="content"
          v-model="contentInput"
          class="border w-screen h-56 items-center justify-center content-center self-center py-2"
          name="content"
        />
      </div><hr>
      <div class="flex flex-row mt-12 ">
        <textarea
          id=""
          class="w-screen border text-sm p-4"
          name="agree"
          readonly
          rows="5"
        >(주)은성냉동산업(은)는 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록하기 위하여 다음과 같이 개인정보 처리지침을 수립/공개합니다.
1. 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
- 서비스 제공에 관한 문의 및 상담</textarea>
      </div>
      <label>
        <input
          required
          type="checkbox"
        ><div class="inline text-xs">
          수집하는 개인정보 항목, 수집/이용목적, 개인정보보유기간에 동의합니다.
        </div></label>

      <div class="flex row justify-end mt-4 gap-2">
        <button
          class="bg-[#1B426B] text-white px-2 rounded-lg font-bold"
          @click="saveRequest"
        >
          글쓰기
        </button>
        <NuxtLink
          to="/request"
          class="bg-[#1B426B] text-white px-2 rounded-lg font-bold"
        >
          목록
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
