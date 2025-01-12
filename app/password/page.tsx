"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (password.length === 6) {
      router.push(`/main?password=${password}`);
    }
  });

  return (
    <div>
      <div className="pt-20 pb-16 text-center">
        <h2 className="text-2xl font-bold pb-8">비밀번호 설정</h2>
        <div className="text-gray-400">비밀번호 6자리를 입력해주세요</div>
      </div>

      <div className="flex justify-center pb-20 gap-10">
        <div
          className={`size-6 rounded-full ${
            password.length > 0 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-6 rounded-full ${
            password.length > 1 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-6 rounded-full ${
            password.length > 2 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-6 rounded-full ${
            password.length > 3 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-6 rounded-full ${
            password.length > 4 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-6 rounded-full ${
            password.length > 5 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
      </div>

      <div className="grid grid-cols-3 gap-12 text-xl fixed bottom-16 max-w-screen-sm mx-auto w-full">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((i) => (
          <PasswordButton
            key={i}
            text={String(i)}
            onClick={() => setPassword((password) => password + String(i))}
          />
        ))}
        <div></div>
        <PasswordButton
          text="0"
          onClick={() => setPassword((password) => password + "0")}
        />

        <svg
          className="mx-auto hover:cursor-pointer"
          onClick={() => setPassword(password.slice(0, -1))}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0661 19.4341C13.3785 19.7465 13.3785 20.2531 13.0661 20.5655C12.7537 20.8779 12.2472 20.8779 11.9348 20.5655L3.93475 12.5655C3.62234 12.2531 3.62234 11.7465 3.93475 11.4341L11.9348 3.43412C12.2472 3.1217 12.7537 3.1217 13.0661 3.43412C13.3785 3.74654 13.3785 4.25307 13.0661 4.56549L6.43181 11.1998L20.5 11.1998C20.9419 11.1998 21.3 11.558 21.3 11.9998C21.3 12.4416 20.9419 12.7998 20.5 12.7998L6.43181 12.7998L13.0661 19.4341Z"
            fill="#212124"
          />
        </svg>
      </div>
    </div>
  );
}

function PasswordButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return <button onClick={onClick}>{text}</button>;
}
