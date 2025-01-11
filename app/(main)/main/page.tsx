import MainContents from "./mainContents";

interface SearchParams {
  password: string;
}

export default function Main({ searchParams }: { searchParams: SearchParams }) {
  const pw = searchParams.password;
  console.log(pw);
  return (
    <div>
      <MainContents />
    </div>
  );
}
