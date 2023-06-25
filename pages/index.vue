<template>
  <div>
    <h1>チャットアプリ</h1>
    <div v-for="message in messages" :key="message.id">
      {{ message.text }}
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" type="text" placeholder="メッセージを入力してください" />
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import Message from '~/models/Message'

export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    }
  },
  mounted() {
    this.fetchMessages()
    this.unsubscribe = Message.subscribeToMessages(messages => {
      this.messages = messages
    })
  },
  beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  },
  methods: {
    async fetchMessages() {
      this.messages = await Message.fetchMessages()
    },
    subscribeToMessages() {
      Message.subscribeToMessages(messages => {
        this.messages = messages
      })
    },
    async sendMessage() {
      await Message.sendMessage(this.newMessage)
      this.newMessage = ''
    },
  },
}
</script>
