import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-5befa.firebaseio.com/'  
})