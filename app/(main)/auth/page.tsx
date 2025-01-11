"use client";

import Image from "next/image";
import AuthImg from "@/public/images/auth.svg";
import { useEffect, useState } from "react";

export default function Auth() {
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 2000);
  }, []);

  return (
    <div>
      {timer && (
        <Image
          src={AuthImg}
          alt="auth"
          className="fixed z-50 w-full"
          style={{
            objectFit: "cover",
          }}
        />
      )}
      <div className="mx-5 flex flex-col gap-8">
        <div className="text-2xl font-bold pt-10">검증한 정보</div>
        <div>
          <div className="text-gray-400">자격정보</div>
          <div className="text-xl pt-1">지체장애경증</div>
        </div>
        <div className="grid grid-cols-[90px_1fr] gap-3">
          <div className="text-gray-400">성명</div>
          <div>홍길동</div>
          <div className="text-gray-400">생년월일</div>
          <div>1990.01.12</div>
          <div className="text-gray-400">주소</div>
          <div>서울특별시 서초구 강남대로 369</div>
          <div className="text-gray-400">유효기간</div>
          <div>2025.05.11</div>
          <div className="text-gray-400">등록기관</div>
          <div>서울특별시 서초구청장</div>
        </div>
      </div>
    </div>
  );
}
