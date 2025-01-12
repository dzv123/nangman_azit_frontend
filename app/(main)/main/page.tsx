"use server";

import MainContents from "./mainContents";

interface SearchParams {
  password: string;
}

export interface User {
  name: string;
  pw: string;
  blue: boolean;
}

const user1: User = {
  name: "홍길동",
  pw: "123456",
  blue: true,
};
const user2: User = {
  name: "김영미",
  pw: "654321",
  blue: false,
};

export default async function Main({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // const user = await fetch(
  //   "http://172.24.66.27:3000/api/schedules/123456"
  // ).then((res) => res.json());
  // console.log(user);

  const pw = searchParams.password;

  return (
    <div>
      <MainContents user={pw === user1.pw ? user1 : user2} />
    </div>
  );
}
