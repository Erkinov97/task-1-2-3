<template>
  <div class="login">
    <h1>Login</h1>
    <button @click="login">Log in</button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

import axios from 'axios'
const toast = useToast()

const login = async () => {
  try {
    const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
      email: 'john@mail.coma',
      password: 'changeme'
    })
    console.log(res)

    if (res.status === 201) {
      localStorage.setItem('token', res.data.access_token)
      toast.success('My toast content')
      // Autentifikatsiya muvaffaqiyatli bajarilgan
      // Ma'lumotni qabul qilib, kerakli sahifaga yo'naltirish
      // Masalan, router.push('/protected');
    }
  } catch (error: any) {
    console.error('Error logging in:', error)
    toast.error(`${error.response.data.message}`)
  }
}
</script>
