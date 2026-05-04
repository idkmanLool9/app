import { Navigate, Route, Routes } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import Login from './screens/Login'
import Register from './screens/Register'
import MapHome from './screens/MapHome'
import Saved from './screens/Saved'
import Profile from './screens/Profile'
import AppShell from './components/AppShell'
import RequireAuth from './lib/RequireAuth'

export default function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/app"
          element={
            <RequireAuth>
              <AppShell />
            </RequireAuth>
          }
        >
          <Route index element={<Navigate to="map" replace />} />
          <Route path="map" element={<MapHome />} />
          <Route path="saved" element={<Saved />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PhoneFrame>
  )
}
