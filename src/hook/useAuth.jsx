import { useEffect } from "react"
import { createContext, useContext, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [search, setSearch] = useState("")

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      setData({ user, token })
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível logar com o usuário.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })

      toast.success("Perfil atualizado!")

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível atualizar o perfil!")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token")
    const user = localStorage.getItem("@rocketmovies:user")

    if(token, user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut, 
      user: data.user, 
      updateProfile,
      search,
      setSearch
    }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
