import { collection, onSnapshot, addDoc } from 'firebase/firestore'
import { firestore } from '~/plugins/firebase'

class Message {
  static async fetchMessages() {
    const snapshot = await getDocs(collection(firestore, 'messages'))
    return snapshot.docs.map(doc => doc.data())
  }

  static subscribeToMessages(callback) {
    const unsubscribe = onSnapshot(collection(firestore, 'messages'), snapshot => {
      const messages = snapshot.docs.map(doc => doc.data())
      callback(messages)
    })
    return unsubscribe
  }

  static async sendMessage(text) {
    await collection(firestore, 'messages').add({
      text: text,
    })
  }

  static async sendMessage(text) {
    await addDoc(collection(firestore, 'messages'), {
      text: text,
    })
  }
}

export default Message
