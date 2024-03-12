import React from "react";

export default function Login() {
    const handleLogin = () => {
  
    return (
      <div
        className="justify-center h-full py-[20vh] flex items-center"
      >
        <header className="text-center bg-zinc-100 shadow-lg rounded-xl p-6 max-w-[390px] min-w-[390px] box-border mx-32 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-7 text-center">
            Inicia sesión en tu cuenta
          </h1>
          <div className="flex flex-row space-x-2 items-center justify-center">
            <h5 className="text-center">¿Aún no tienes una cuenta?</h5>
            <Link
              className="font-bold text-sky-800 hover:text-blue-950"
              to="/register"
            >
              Registrate
            </Link>
          </div>
          <div className="flex flex-col space-y-6 mb-6 mt-6">
            <Form handleSignIn={handleLogin} />
          </div>
        </header>
      </div>
    );
    }
}