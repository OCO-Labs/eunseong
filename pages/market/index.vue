<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { query, collection, onSnapshot, getFirestore } from 'firebase/firestore'
import SearchIcon from '~/components/icons/SearchIcon.vue'

const recentNotice = ref([])

onMounted(() => {
  getRecentNotice()
})

async function getRecentNotice () {
  const db = getFirestore()
  let idx = 1
  const q = query(collection(db, 'market'))
  onSnapshot(q, (snapshot) => {
    recentNotice.value = []
    snapshot.forEach((doc) => {
      recentNotice.value.push({
        id: doc.id,
        idx,
        ...doc.data()
      })
      idx++
    })
  })
}

const currentPage = ref(1)
const pageSize = ref(10)

const searchKeyword = ref('')
const filteredNotices = computed(() => {
  return recentNotice.value.filter(notice =>
    notice.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})

const paginateNotices = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredNotices.value.slice(start, end)
})

const filterNotices = () => {
  currentPage.value = 1
}

watch(searchKeyword, filterNotices)

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < Math.ceil(filteredNotices.value.length / pageSize.value)) {
    currentPage.value++
  }
}

const prevButtonDisabled = computed(() => {
  return currentPage.value === 1
})

const nextButtonDisabled = computed(() => {
  return currentPage.value === Math.ceil(filteredNotices.value.length / pageSize.value)
})
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="~/assets/market/image.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            중고장터
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
      <div class="text-3xl font-bold mb-2">
        중고장터
      </div>
      <div class="w-full h-[0.05rem] bg-black" />
      <div>
        <div class="flex w-full h-32">
          <div class="w-1/6 h-full flex justify-center items-center font-bold text-lg">
            전체
          </div>
          <div class="flex flex-col justify-center w-5/6 gap-6">
            <div class="flex gap-4 font-bold">
              <div class="w-1/5">
                냉동/냉장 저장고
              </div>
              <div class="w-1/5">
                농축산물 저장고
              </div>
              <div class="w-1/5">
                물류보관 저온창고
              </div>
              <div class="w-1/5">
                아이스크림 저장고
              </div>
              <div class="w-1/5">
                방열문/에어커텐
              </div>
            </div>
            <div class="flex gap-4 font-bold">
              <div class="w-1/5">
                냉동기 유니트
              </div>
              <div class="w-1/5">
                냉난방/항온항습기/제습기
              </div>
              <div class="w-1/5">
                정육/마트 쇼케이스
              </div>
              <div class="w-1/5">
                부속품 수입 도/소매
              </div>
              <div class="w-1/5">
                콘베어 방음설비
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[0.05rem] bg-black" />
      <div class="px-10 py-6 flex justify-between">
        <div class="font-bold place-self-center">
          검색: <span class="text-[#1B426B]">{{ paginateNotices.length }}</span>개
        </div>
        <div>
          <form class="w-full max-w-sm">
            <div class="flex items-center border-b border-[#1B426B]">
              <input
                v-model="searchKeyword"
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="검색어를 입력해주세요"
              >
              <button
                class="flex-shrink-0 border-transparent border-4 text-[#1B426B] text-sm py-1 px-2 rounded"
                type="button"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <div
          v-for="(notice, index) in paginateNotices"
          :key="index"
          class="flex flex-col"
        >
          <NuxtLink
            :to="`/market/${notice.id}`"
            class="h-72 bg-gray-100"
          />
          <div class="text-center mt-2">
            {{ notice.title }}
          </div>
        </div>
      </div>
      <div
        class="flex justify-center gap-1 my-12"
      >
        <button
          class="w-16 rounded-lg p-1 bg-[#1B426B] disabled:bg-gray-200 text-white font-bold"
          :disabled="prevButtonDisabled"
          @click="prevPage"
        >
          이전
        </button>
        <button
          class="w-16 rounded-lg p-1 bg-[#1B426B] disabled:bg-gray-200 text-white font-bold"
          :disabled="nextButtonDisabled"
          @click="nextPage"
        >
          다음
        </button>
      </div>
    </div>
  </main>
</template>
