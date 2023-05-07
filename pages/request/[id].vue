<script setup>
import { onMounted, ref } from 'vue'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useRoute } from 'nuxt/app'

onMounted(() => {
  getNotice()
})

const route = useRoute()

const notice = ref()
const title = ref('')
const name = ref('')
const tel = ref('')
const content = ref('')
const createdAt = ref()

const passwordCheck = ref(false)

const passwordInput = ref('')
const password = ref('')

function passwordChecking () {
  if (passwordInput.value == password.value) {
    passwordCheck.value = true
  } else {
    alert('비밀번호가 틀립니다!')
  }
}

async function getNotice () {
  const db = getFirestore()
  const docRef = doc(db, 'request', `${route.params.id}`)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
    notice.value = (docSnap.data())
    title.value = docSnap.data().title
    name.value = docSnap.data().name
    tel.value = docSnap.data().tel
    content.value = docSnap.data().content
    password.value = docSnap.data().password
    createdAt.value = docSnap.data().createdAt
  } else {
  // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }
}

function formatDate (timestamp) {
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="~/assets/request/image.png"
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
      <div class="text-4xl font-bold mb-2">
        견적의뢰
      </div>
      <div v-if="passwordCheck">
        <table class="table-fixed w-full">
          <tbody>
            <tr class="border-t-2 border-gray-600 h-14">
              <td class="w-1/12 bg-gray-100 px-4 font-bold">
                제목
              </td>
              <td class="w-11/12 px-4">
                {{ title }}
              </td>
            </tr>
            <tr class="border-y h-14">
              <td class="bg-gray-100 px-4 font-bold">
                작성자
              </td>
              <td class="px-4">
                {{ name }}
              </td>
            </tr>
            <tr class="border-y h-14">
              <td class="bg-gray-100 px-4 font-bold">
                작성일
              </td>
              <td class="px-4">
                {{ formatDate(createdAt) }}
              </td>
            </tr>
            <tr class="border-y h-14">
              <td class="bg-gray-100 px-4 font-bold">
                전화번호
              </td>
              <td class="px-4">
                {{ tel }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-12">
          {{ content }}
        </div>
      </div>
      <div v-else>
        <div class="flex flex-col items-center my-12">
          <div class="font-bold">
            비밀번호 입력
          </div>
          <input
            v-model="passwordInput"
            class="border"
            type="password"
          >
          <button
            class="bg-[#1B426B] text-white font-bold px-4 py-1 my-2"
            @click="passwordChecking"
          >
            확인
          </button>
        </div>
      </div>
      <hr>
      <div class="flex justify-end mt-3">
        <NuxtLink
          to="/request"
          class="px-4 py-1 w-20 text-center rounded-lg text-white font-bold bg-[#1B426B]"
        >
          목록
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
