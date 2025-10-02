import { Routes, Route } from "react-router-dom"
import Login from "./pages/Onboarding/Login"
import DashLayout from "./pages/Onboarding/dashboard/DashLayout"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashlayout" element={<DashLayout />} />
      </Routes>
    </div>
  )
}

export default App