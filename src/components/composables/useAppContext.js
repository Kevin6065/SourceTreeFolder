// import { getCurrentInstance } from 'vue'

// const useFormat = () => {
//   const instance = getCurrentInstance()
//   if (!instance) throw new Error('useFormat must be used inside setup()')
//   const { $formatPrice, $formatDate } = instance.appContext.config.globalProperties

//   return {
//     $fmPrice: $formatPrice,
//     $formatDate,
//   }
// }

// export default useFormat

import { inject } from 'vue'
import { AppContextKey } from '../provide/context-key'

export function useAppContext() {
  const context = inject(AppContextKey)
  if (!context) {
    throw new Error('AppContext is not provided')
  }
  return context
}
