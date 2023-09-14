import Nookies from 'nookies'

export const logout = () => {
  Nookies.destroy(null, 'accessToken')
  Nookies.destroy(null, 'refreshToken')
  window.location.href = '/login'
}
