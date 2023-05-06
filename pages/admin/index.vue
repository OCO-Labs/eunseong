<script setup>
import { ref, onMounted } from 'vue'
import { setPersistence, getAuth, onAuthStateChanged, browserSessionPersistence, signInWithEmailAndPassword } from 'firebase/auth'

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
      <!-- 여기에 '공지작성', '중고장터 작성' 버튼 두개 만들고 각각 noticeState, marketState 라는  ref() 변수 만들고 버튼 클릭하면 true 하나씩 true되게. 둘다 동시에 true가 될 순 없음 -->
      <!-- 그리고 지금 견적의뢰 폼 복사해와서 공지작성 폼, 중고작성 폼 두 개 만들고 noticeState, marketState 값 받아서 true면 폼 보이게 -->
    </div>
  </div>
</template>
