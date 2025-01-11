"use client";

import { BottomButton } from "@/components/button";
import { useState } from "react";
import Image from "next/image";
import Intro1 from "@/public/images/intro1.svg";
import Intro2 from "@/public/images/intro2.svg";
import Intro3 from "@/public/images/intro3.svg";
import Intro4 from "@/public/images/intro4.svg";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Intro() {
  const [step, setStep] = useState(0);
  const [check, setCheck] = useState<boolean[]>([false, false]);
  const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden">
      {step <= 2 && (
        <>
          <Slider {...settings}>
            {Steps(0)}
            {Steps(1)}
            {Steps(2)}
          </Slider>

          <BottomButton text="시작하기" onClick={() => setStep(step + 3)} />
        </>
      )}
      {step === 3 && (
        <>
          <div className="mx-5 pt-5">
            <div className="text-2xl pb-4 font-bold">이용 약관 동의</div>
            <p className="pb-4">
              서비스 이용을 위해 <br />
              이용 약관 동의가 필요합니다.
            </p>

            <label className="flex gap-2 pb-2 items-center border-b">
              <input
                name="checkall"
                className="size-5 border-slate-400 rounded-sm checked:border-primary checked:bg-primary border text-primary focus:ring-transparent"
                type="checkbox"
                checked={check[0] && check[1]}
                onChange={() => {
                  if (!(check[0] && check[1])) setCheck([true, true, true]);
                  else setCheck([false, false, false]);
                }}
              />
              <span className="font-extrabold">
                전체동의{" "}
                <span className="text-sm font-normal text-gray-400">
                  선택항목에 대한 동의 포함
                </span>
              </span>
            </label>

            <label className="flex gap-2 pb-2 pt-2 items-center">
              <input
                name="check0"
                className="size-5 border-slate-400 rounded-sm checked:border-primary checked:bg-primary border text-primary focus:ring-transparent"
                type="checkbox"
                checked={check[0]}
                onChange={() => {
                  setCheck([!check[0], check[1]]);
                }}
              />
              <span className="">
                서비스 이용약관 동의{" "}
                <span className="text-primary">(필수)</span>
              </span>
            </label>
            <label className="flex gap-2 pb-2 items-center">
              <input
                name="check1"
                className="size-5 border-slate-400 rounded-sm checked:border-primary checked:bg-primary border text-primary focus:ring-transparent"
                type="checkbox"
                checked={check[1]}
                onChange={() => {
                  setCheck([check[0], !check[1]]);
                }}
              />
              <span className="">
                개인정보 수집 및 이용 동의{" "}
                <span className="text-primary">(필수)</span>
              </span>
            </label>
          </div>

          <BottomButton
            text="확인"
            disabled={!check[0] || !check[1]}
            onClick={() => setStep(step + 1)}
          />
        </>
      )}
      {step === 4 && (
        <>
          <div className="mx-5 pt-5">
            <div className="text-2xl pb-4 font-bold">본인 인증 진행</div>
            <p className="pb-4">
              증명서를 발급하기 위해 <br />
              최초 1회 본인 인증을 진행합니다.
            </p>

            <p className="bg-gray-100 px-4 py-6 flex flex-col gap-5 rounded-md">
              <span>1. 본인 명의 휴대폰으로 인증을 합니다.</span>
              <span>2. 한 사람당 한 기기만 인증이 가능합니다. </span>
            </p>
          </div>

          <BottomButton text="인증하기" onClick={() => setStep(step + 1)} />
        </>
      )}
      {step === 5 && (
        <>
          <div className="pt-12 flex flex-col items-center">
            <Image src={Intro4} alt="intro" height={200} />
            <div className="font-bold pt-4 text-xl my-4">
              본인 인증을 완료했습니다
            </div>
            <p className="text-center h-20">
              소중한 개인정보는 블록체인 기술로 <br />
              안전하게 보관됩니다.
            </p>
          </div>

          <BottomButton
            text="시작하기"
            onClick={() => router.push("/password")}
          />
        </>
      )}
    </div>
  );
}

function Steps(step: number) {
  return (
    <div className="pt-12 flex flex-col items-center">
      {step === 0 && (
        <Image className="mx-auto" src={Intro1} alt="intro" height={200} />
      )}
      {step === 1 && (
        <Image className="mx-auto" src={Intro2} alt="intro" height={200} />
      )}
      {step === 2 && (
        <Image className="mx-auto" src={Intro3} alt="intro" height={200} />
      )}
      <div className="font-bold text-center pt-4 text-xl my-4">
        {step === 0 && "완벽한 개인 정보 보호"}
        {step === 1 && "증명서 제출 및 상대방 검증"}
        {step === 2 && "맞춤형 정보 제공"}
      </div>
      <div className="text-center h-20">
        {step === 0 && (
          <p>
            <span className="text-primary">블록체인 기술</span>을 이용해 <br />
            소중한 개인정보를 <br />
            안전하게 보호합니다.
          </p>
        )}
        {step === 1 && (
          <p>
            <span className="text-primary">QR코드</span>를 통해 나의 증명서도
            제출하고 <br />
            상대방의 증명서도 검증할 수 있습니다.
          </p>
        )}
        {step === 2 && (
          <p>
            증명정보에 맞춰서 이용가능한 <br />
            복지서비스를 알려드립니다.
          </p>
        )}
      </div>
      <div className="flex justify-center pt-4 gap-3">
        <div
          className={`size-2 rounded-full ${
            step === 0 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-2 rounded-full ${
            step === 1 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
        <div
          className={`size-2 rounded-full ${
            step === 2 ? `bg-primary` : `bg-gray-200`
          }`}
        ></div>
      </div>
    </div>
  );
}
