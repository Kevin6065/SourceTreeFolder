import { getCurrentInstance } from 'vue'

const useFormat = () => {
  const instance = getCurrentInstance()
  if (!instance) throw new Error('useFormat must be used inside setup()')
  const { $formatPrice, $formatDate } = instance.appContext.config.globalProperties

  return {
    $fmPrice: $formatPrice,
    $formatDate,
  }
}

export default useFormat
