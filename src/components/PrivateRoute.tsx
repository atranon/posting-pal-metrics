import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>

  return user ? children : <Navigate to="/login" />
}
