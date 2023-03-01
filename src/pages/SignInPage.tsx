import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <form
        onSubmit={onSubmitLogin}
        className="w-96 flex flex-col items-center shadow-lg px-8 py-5 rounded-lg"
      >
        <label className="w-full mb-1">이메일</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 border-b px-2 py-1"
        />
        <label className="w-full mb-1">비밀번호</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 border-b px-2 py-1"
        />
        <button className="w-40 py-2 rounded-md bg-indigo-100">로그인</button>
      </form>
    </div>
  );
};

export default SignInPage;
