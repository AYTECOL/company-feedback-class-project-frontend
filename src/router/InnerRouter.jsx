import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

export const InnerRouter = () => {
  return (
    <div className="flex flex-col h-screen">
    <article className="w-full mt-[3vh]">
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.element />}
        />
      ))}
    </Routes>
    </article>
    </div>
  )
}
