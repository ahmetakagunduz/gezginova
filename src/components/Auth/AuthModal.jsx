import { useState } from 'react'
import { X, Mail, Lock, User, Globe } from 'lucide-react'
import { useAuth } from './AuthContext'
import './AuthModal.css'

export default function AuthModal({ onClose }) {
  const { login, register, continueAsGuest } = useAuth()
  const [tab, setTab] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setName('')
    setError('')
    setSuccess('')
  }

  const switchTab = (newTab) => {
    setTab(newTab)
    resetForm()
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Tüm alanları doldurun.')
      return
    }

    setIsSubmitting(true)
    // Simulate a brief delay
    await new Promise((r) => setTimeout(r, 300))

    const result = login(email, password)
    if (result.success) {
      setSuccess('Giriş başarılı! Hoş geldin 🎉')
      setTimeout(() => onClose(), 800)
    } else {
      setError(result.error)
    }
    setIsSubmitting(false)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Tüm alanları doldurun.')
      return
    }

    if (password.length < 6) {
      setError('Şifre en az 6 karakter olmalı.')
      return
    }

    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 300))

    const result = register(email, password, name)
    if (result.success) {
      setSuccess('Hesap oluşturuldu! Hoş geldin 🎉')
      setTimeout(() => onClose(), 800)
    } else {
      setError(result.error)
    }
    setIsSubmitting(false)
  }

  const handleGuest = () => {
    continueAsGuest()
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="auth-modal-overlay" onClick={handleOverlayClick}>
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="auth-modal-header">
          <h2 className="auth-modal-title">
            <span className="text-gradient">GezgiNova</span>
          </h2>
          <p className="auth-modal-subtitle">Dünyayı keşfetmeye başla</p>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${tab === 'login' ? 'active' : ''}`}
            onClick={() => switchTab('login')}
          >
            Giriş Yap
          </button>
          <button
            className={`auth-tab ${tab === 'register' ? 'active' : ''}`}
            onClick={() => switchTab('register')}
          >
            Kayıt Ol
          </button>
        </div>

        {error && <div className="auth-message auth-error">{error}</div>}
        {success && <div className="auth-message auth-success">{success}</div>}

        <form onSubmit={tab === 'login' ? handleLogin : handleRegister}>
          {tab === 'register' && (
            <div className="auth-field">
              <label className="auth-label" htmlFor="auth-name">
                <User size={16} />
                İsim
              </label>
              <input
                id="auth-name"
                type="text"
                className="auth-input"
                placeholder="Adın"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
          )}

          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-email">
              <Mail size={16} />
              E-posta
            </label>
            <input
              id="auth-email"
              type="email"
              className="auth-input"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="auth-password">
              <Lock size={16} />
              Şifre
            </label>
            <input
              id="auth-password"
              type="password"
              className="auth-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
            />
          </div>

          <button
            type="submit"
            className="auth-submit btn btn-primary btn-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
            ) : tab === 'login' ? (
              'Giriş Yap'
            ) : (
              'Hesap Oluştur'
            )}
          </button>
        </form>

        <div className="auth-divider">
          <span>veya</span>
        </div>

        <button className="auth-google-btn" disabled>
          <Globe size={18} />
          Google ile Giriş
          <span className="auth-soon-badge">Yakında</span>
        </button>

        <button className="auth-guest-link" onClick={handleGuest}>
          Misafir Olarak Devam Et →
        </button>
      </div>
    </div>
  )
}
