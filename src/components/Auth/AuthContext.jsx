import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const AuthContext = createContext(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const { data: session, status } = useSession()
  const [isGuest, setIsGuest] = useState(false)

  const loading = status === 'loading'
  const user = session?.user || (isGuest ? { name: 'Misafir', isGuest: true } : null)
  const isAuthenticated = !!user

  // Ensure guest state is clear if we have a real session
  useEffect(() => {
    if (session?.user && isGuest) {
      setIsGuest(false)
    }
  }, [session, isGuest])

  const login = useCallback(async (email, password) => {
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password
    })

    if (res?.error) {
      return { success: false, error: res.error }
    }
    
    setIsGuest(false)
    return { success: true }
  }, [])

  const register = useCallback(async (email, password, name) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        return { success: false, error: data.error || 'Kayıt başarısız' }
      }

      // Automatically log them in after registration
      return login(email, password)
    } catch (err) {
      return { success: false, error: 'Sunucu hatası' }
    }
  }, [login])

  const logout = useCallback(async () => {
    setIsGuest(false)
    await signOut({ redirect: false })
  }, [])

  const continueAsGuest = useCallback(() => {
    setIsGuest(true)
  }, [])

  const value = {
    user,
    isGuest,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    continueAsGuest,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
