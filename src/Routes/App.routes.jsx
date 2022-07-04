import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Preview } from "../pages/Preview"
import { Profile } from "../pages/Profile"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
