interface ButtonProps {
  text: string;
  [key: string]:
    | string
    | number
    | boolean
    | undefined
    | React.ReactNode
    | (() => void);
}

export function BottomButton({ text, ...anyProps }: ButtonProps) {
  return (
    <div className="fixed bottom-5 w-full max-w-screen-sm">
      <div className="mx-4 text-center">
        <button
          className="w-full rounded-md px-5 bg-primary py-4 text-white mb-5 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
          {...anyProps}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
