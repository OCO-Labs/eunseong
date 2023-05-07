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
  const q = query(collection(db, 'market-items'))
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
    (notice.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) &&
    (activeCategory.value === '전체' || notice.category === activeCategory.value))
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
  return currentPage.value === Math.ceil(filteredNotices.value.length / pageSize.value) || filteredNotices.value.length === 0
})

const activeCategory = ref('전체')
const setActiveCategory = (category) => {
  activeCategory.value = category
}
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
            <button
              class="hover:rounded-lg hover:bg-gray-200 px-2"
              :class="{ 'bg-gray-200 rounded-lg': activeCategory === '전체' }"
              @click="setActiveCategory('전체')"
            >
              전체
            </button>
          </div>
          <div class="flex flex-col justify-center w-5/6 gap-6">
            <div class="flex font-bold">
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '냉동/냉장 저장고' }"
                  @click="setActiveCategory('냉동/냉장 저장고')"
                >
                  냉동/냉장 저장고
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '농축산물 저장고' }"
                  @click="setActiveCategory('농축산물 저장고')"
                >
                  농축산물 저장고
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '물류보관 저온창고' }"
                  @click="setActiveCategory('물류보관 저온창고')"
                >
                  물류보관 저온창고
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '아이스크림 저장고' }"
                  @click="setActiveCategory('아이스크림 저장고')"
                >
                  아이스크림 저장고
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '방열문/에어커텐' }"
                  @click="setActiveCategory('방열문/에어커텐')"
                >
                  방열문/에어커텐
                </button>
              </div>
            </div>
            <div class="flex font-bold">
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '냉동기 유니트' }"
                  @click="setActiveCategory('냉동기 유니트')"
                >
                  냉동기 유니트
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '냉난방/항온항습기/제습기' }"
                  @click="setActiveCategory('냉난방/항온항습기/제습기')"
                >
                  냉난방/항온항습기/제습기
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '정육/마트 쇼케이스' }"
                  @click="setActiveCategory('정육/마트 쇼케이스')"
                >
                  정육/마트 쇼케이스
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '부속품 수입 도/소매' }"
                  @click="setActiveCategory('부속품 수입 도/소매')"
                >
                  부속품 수입 도/소매
                </button>
              </div>
              <div class="w-1/5">
                <button
                  class="hover:rounded-lg hover:bg-gray-200 px-2"
                  :class="{ 'bg-gray-200 rounded-lg': activeCategory === '콘베어 방음설비' }"
                  @click="setActiveCategory('콘베어 방음설비')"
                >
                  콘베어 방음설비
                </button>
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
          >
            <img
              :src="`${notice.imageUrl}`"
              alt="이미지"
              class="object-cover h-72"
            >
          </NuxtLink>
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
