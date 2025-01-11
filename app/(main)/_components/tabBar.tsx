"use client";

import { InfoSvg, HomeSvg, AuthSvg, MoreSvg } from "@/components/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 z-40 mx-auto flex w-full max-w-screen-sm border-t bg-white px-5 py-3 *:flex *:flex-1 *:items-center *:justify-center">
      <Link href="/main">
        <div
          className={`flex flex-col items-center text-sm ${
            pathname === "/main" ? "text-primary" : "text-text"
          }`}
        >
          <HomeSvg primary={pathname === "/main"} />
          <div>나의 증명서</div>
        </div>
      </Link>

      <Link href="/auth">
        <div
          className={`flex flex-col items-center text-sm ${
            pathname === "/auth" ? "text-primary" : "text-text"
          }`}
        >
          <AuthSvg primary={pathname === "/auth"} />
          <div>상대방 인증</div>
        </div>
      </Link>

      <Link href="/info">
        <div
          className={`flex flex-col items-center text-sm ${
            pathname === "/info" ? "text-primary" : "text-text"
          }`}
        >
          <InfoSvg primary={pathname === "/info"} />
          <div>맞춤 정보</div>
        </div>
      </Link>

      <Link href="/more">
        <div
          className={`flex flex-col items-center text-sm ${
            pathname === "/more" ? "text-primary" : "text-text"
          }`}
        >
          <MoreSvg primary={pathname === "/more"} />
          <div>더보기</div>
        </div>
      </Link>
    </div>
  );
}
