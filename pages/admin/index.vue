<script setup>
import { ref, onMounted } from 'vue'
import { setPersistence, getAuth, onAuthStateChanged, browserSessionPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const inputEmail = ref('')
const inputPassword = ref('')
const userState = ref()

onMounted(() => {
  checkLoginState()
})

function login () {
  const auth = getAuth()
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
    })
    .then(() => {
      console.log('Success Login')
    })
    .catch((error) => {
      // this.errorLogin = true
      console.log(error)
      alert('로그인 실패')
      inputEmail.value = ''
      inputPassword.value = ''
    })
}

function checkLoginState () {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userState.value = user
    } else {
      userState.value = null
    }
  })
}

function logout () {
  const auth = getAuth()
  auth.signOut()
    .then(() => {
      userState.value = null
    })
}

const writingNotice = ref(false)
const writingMarket = ref(false)

function toggleNoticeForm () {
  writingNotice.value = !writingNotice.value
  writingMarket.value = false
}

function toggleMarketForm () {
  writingMarket.value = !writingMarket.value
  writingNotice.value = false
}

const title = ref('')
const content = ref('')

async function addNotice () {
  const db = getFirestore()
  const noticesCollection = collection(db, 'notices')

  try {
    await addDoc(noticesCollection, {
      title: title.value,
      content: content.value,
      createdAt: serverTimestamp()
    })

    alert('공지사항이 작성되었습니다.')
    title.value = ''
    content.value = ''
    writingNotice.value = false
  } catch (error) {
    console.error('Error adding document: ', error)
    alert('공지사항 작성에 실패하였습니다.')
  }
}

function handleImageUpload (event) {
  const file = event.target.files[0]
  if (file) {
    marketImage.value = file
  } else {
    marketImage.value = null
  }
}

const marketTitle = ref('')
const marketContent = ref('')
const marketImage = ref(null)
const marketCategory = ref()

async function uploadImage (file) {
  const storage = getStorage()
  const filePath = `market-items/${Date.now()}-${file.name}`
  const fileRef = storageRef(storage, filePath)

  const uploadTask = uploadBytesResumable(fileRef, file)

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', null, reject, async () => {
      const downloadURL = await getDownloadURL(fileRef)
      resolve(downloadURL)
    })
  })
}

async function addMarketItem () {
  const db = getFirestore()
  const marketItemsCollection = collection(db, 'market-items')

  let imageUrl = ''
  if (marketImage.value) {
    try {
      imageUrl = await uploadImage(marketImage.value)
    } catch (error) {
      console.error('Error uploading image: ', error)
      alert('이미지 업로드에 실패하였습니다.')
      return
    }
  }

  try {
    await addDoc(marketItemsCollection, {
      title: marketTitle.value,
      content: marketContent.value,
      category: marketCategory.value,
      imageUrl,
      createdAt: serverTimestamp()
    })

    alert('중고장터 아이템이 작성되었습니다.')
    marketTitle.value = ''
    marketContent.value = ''
    marketImage.value = null
    writingMarket.value = false
    marketCategory.value = ''
  } catch (error) {
    console.error('Error adding document: ', error)
    alert('중고장터 작성에 실패하였습니다.')
  }
}
</script>

<script>
export default {
  name: 'AdminPage'
}
</script>

<template>
  <div class="container mx-auto my-4">
    <div
      v-if="userState === null"
      class="flex gap-y-4 flex-col items-center m-4"
    >
      <div class="text-xl font-bold">
        관리자 로그인
      </div>
      <input
        v-model="inputEmail"
        placeholder="이메일 입력"
        type="email"
        class="w-1/3 h-12 bg-slate-100 px-3 rounded"
      >
      <input
        v-model="inputPassword"
        placeholder="비밀번호 입력"
        type="password"
        class="w-1/3 h-12 bg-slate-100 px-3 rounded"
      >
      <button
        class="w-1/3 h-12 bg-[#1B426B] flex items-center justify-center text-white font-bold rounded"
        @click="login"
      >
        로그인
      </button>
    </div>
    <div v-if="userState !== null">
      <div class="flex justify-between m-4">
        <div>반갑습니다!</div>
        <button
          class="text-[#1B426B] font-bold"
          @click="logout"
        >
          로그아웃
        </button>
      </div>
      <hr>
      <div class="flex gap-4 m-4">
        <button
          :class="{'bg-[#1B426B] text-white': writingNotice, 'bg-gray-300 text-[#1B426B]': !writingNotice}"
          class="font-bold px-2 py-1 rounded-lg"
          @click="toggleNoticeForm"
        >
          공지사항 작성
        </button>
        <button
          :class="{'bg-[#1B426B] text-white': writingMarket, 'bg-gray-300 text-[#1B426B]': !writingMarket}"
          class="font-bold px-2 py-1 rounded-lg"
          @click="toggleMarketForm"
        >
          중고장터 작성
        </button>
      </div>
      <hr>
      <div
        v-if="writingNotice"
        class="m-4"
      >
        <div class="mb-4">
          <label
            for="title"
            class="block text-sm font-medium text-gray-700"
          >제목</label>
          <input
            id="title"
            v-model="title"
            type="text"
            name="title"
            class="w-full h-12 bg-slate-100 px-3 rounded"
          >
        </div>
        <div class="mb-4">
          <label
            for="content"
            class="block text-sm font-medium text-gray-700"
          >내용</label>
          <textarea
            id="content"
            v-model="content"
            name="content"
            rows="10"
            class="w-full bg-slate-100 px-3 py-2 rounded"
          />
        </div>
        <button
          class="w-full h-12 bg-[#1B426B] flex items-center justify-center text-white font-bold rounded"
          @click="addNotice"
        >
          공지사항 작성
        </button>
      </div>
      <div
        v-if="writingMarket"
        class="m-4"
      >
        <div class="mb-4">
          <label
            for="market-title"
            class="block text-sm font-medium text-gray-700"
          >제목</label>
          <input
            id="market-title"
            v-model="marketTitle"
            type="text"
            name="market-title"
            class="w-full h-12 bg-slate-100 px-3 rounded"
          >
        </div>
        <div class="mb-4">
          <label
            for="market-content"
            class="block text-sm font-medium text-gray-700"
          >내용</label>
          <textarea
            id="market-content"
            v-model="marketContent"
            name="market-content"
            rows="10"
            class="w-full bg-slate-100 px-3 py-2 rounded"
          />
        </div>
        <div class="mb-4">
          <label
            for="market-image"
            class="block text-sm font-medium text-gray-700"
          >이미지</label>
          <input
            id="market-image"
            type="file"
            name="market-image"
            class="bg-slate-100 px-3 py-2 rounded"
            @change="e => handleImageUpload(e)"
          >
        </div>
        <div class="mb-4">
          <label
            for="market-category"
            class="block text-sm font-medium text-gray-700"
          >카테고리</label>
          <select
            id="market-category"
            v-model="marketCategory"
            name="market-category"
            class="w-full h-12 bg-slate-100 px-3 rounded"
          >
            <option
              disabled
              value=""
            >
              카테고리 선택
            </option>
            <option value="냉동/냉장 저장고">
              냉동/냉장 저장고
            </option>
            <option value="농축산물 저장고">
              농축산물 저장고
            </option>
            <option value="물류보관 저온창고">
              물류보관 저온창고
            </option>
            <option value="아이스크림 저장고">
              아이스크림 저장고
            </option>
            <option value="방열문/에어커텐">
              방열문/에어커텐
            </option>
            <option value="냉동기 유니트">
              냉동기 유니트
            </option>
            <option value="냉난방/항온항습기/제습기">
              냉난방/항온항습기/제습기
            </option>
            <option value="정육/마트 쇼케이스">
              정육/마트 쇼케이스
            </option>
            <option value="부속품 수입 도/소매">
              부속품 수입 도/소매
            </option>
            <option value="콘베어 방음설비">
              콘베어 방음설비
            </option>
          </select>
        </div>
        <button
          class="w-full h-12 bg-[#1B426B] flex items-center justify-center text-white font-bold rounded"
          @click="addMarketItem"
        >
          중고장터 작성
        </button>
      </div>
    </div>
  </div>
</template>
