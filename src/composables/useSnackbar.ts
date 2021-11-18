import { createToast, ToastOptions } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

type ShowSnackbar = {
  title: string
  description?: string
  type?: ToastOptions['type']
  position?: ToastOptions['position']
}

export function showSnackbar({
  title,
  description,
  type,
  position = 'bottom-center',
}: ShowSnackbar) {
  createToast({
    title,
    description,
  }, {
    type,
    position,
  })
}
