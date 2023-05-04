<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { query, collection, onSnapshot, getFirestore } from 'firebase/firestore'
import SearchIcon from '~/components/icons/SearchIcon.vue'

const recentNotice = ref([])

onMounted(() => {
  getRecentNotice()
})

// const documentSnapshots = ref()
async function getRecentNotice () {
  const db = getFirestore()
  const q = query(collection(db, 'notice'))
  // documentSnapshots.value = await getDocs(q)
  onSnapshot(q, (snapshot) => {
    recentNotice.value = []
    snapshot.forEach((doc) => {
      recentNotice.value.push({
        id: doc.id,
        ...doc.data()
      })
    })
  })
}

// async function saveNotice () {
//   const db = getFirestore()
//   const docRef = await addDoc(collection(db, 'notice'), {
//     title: 'title'
//   })
//   console.log('Document written with ID: ', docRef.id)
// }

const state = reactive({
  currentPage: 0,
  pageSize: 8
})

const visiblePosts = computed(() => {
  const start = state.currentPage * state.pageSize
  const end = start + state.pageSize
  return recentNotice.value.slice(start, end)
})

const pageCount = computed(() => {
  return Math.ceil(recentNotice.value.length / state.pageSize)
})

const canNextPage = computed(() => {
  return state.currentPage < pageCount.value - 1
})

const canPreviousPage = computed(() => {
  return state.currentPage > 0
})

function nextPage () {
  if (canNextPage.value) {
    state.currentPage++
  }
}

function previousPage () {
  if (canPreviousPage.value) {
    state.currentPage--
  }
}
</script>

<script>
export default {
  name: 'NoticePage'
}
</script>

<template>
  <header>
    <div class="relative overflow-hidden mb-20">
      <img
        src="~/assets/notice/image.png"
        alt="이미지"
        class="w-full h-[449px]"
      >
      <div class="absolute top-0 left-0 right-1/2 bottom-0 bg-[#1B426B]" />
      <div class="absolute bottom-0 left-0 right-1/2 top-0 px-10 py-20 ">
        <div class="flex flex-col">
          <div class="mx-auto h-[1px] item-center w-[400px] bg-white border mb-12" />
          <h2 class="md:text-6xl font-bold mb-4 text-white text-center">
            공지사항
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
        공지사항
      </div>
      <table class="table-fixed w-full">
        <thead>
          <tr class="bg-gray-100 border-t-2 border-gray-600 h-14 text-gray-600">
            <th class="">
              번호
            </th>
            <th class="w-6/12">
              제목
            </th>
            <th class="">
              작성자
            </th>
            <th class="">
              작성일
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(notice, index) in visiblePosts"
            :key="index"
            class="text-center border-y h-14"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ notice.title }}</td>
            <td>관리자</td>
            <td>2020-01-02</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center my-10">
        <form class="w-full max-w-sm">
          <div class="flex items-center border-b border-[#1B426B] py-2">
            <input
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
      <div class="flex justify-center gap-1 mb-12">
        <button
          class="w-16 rounded-lg p-1 bg-[#1B426B] disabled:bg-gray-200 text-white font-bold"
          :disabled="!canPreviousPage"
          @click="previousPage"
        >
          이전
        </button>
        <button
          class="w-16 rounded-lg p-1 bg-[#1B426B] disabled:bg-gray-200 text-white font-bold"
          :disabled="!canNextPage"
          @click="nextPage"
        >
          다음
        </button>
      </div>
    </div>
  </main>
</template>
