import { Route, Routes } from "react-router-dom";
import InnerRouter from "./InnerRouter";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<InnerRouter />} />
      </Routes>
    </div>
  );
}