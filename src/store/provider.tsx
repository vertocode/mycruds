'use client'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import { SnackbarProvider } from '../components/elements/Snackbar'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </Provider>
  )
}

export default Providers
