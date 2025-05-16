interface InputProps {
  placeholder: string;
  ref?: unknown;
}

export function Input({ placeholder, ref }: InputProps) {
  return (
    <div>
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border rounded m-2"
      />
    </div>
  );
}
