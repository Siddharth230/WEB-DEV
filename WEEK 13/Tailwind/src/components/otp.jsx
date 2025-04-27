import { useRef, useState } from "react";
import { Button } from "./button";

export function Otp({ number }) {
  const ref = useRef(Array(number).fill(0));

  const [disabled] = useState(true);

  return (
    <div className="flex justify-center">
      {Array(number)
        .fill(1)
        .map((x, index) => (
          <SubOtpBox
            reference={(e) => {
              ref.current[index] = e;
            }}
            key={index}
            onDone={() => {
              if (index + 1 >= number) {
                return;
              }
              ref.current[index + 1].focus();
            }}
            goBack={() => {
              if (index == 0) {
                return;
              }
              ref.current[index - 1].focus();
            }}
          />
        ))}

      <br />
      <Button disabled={disabled}>Sign Up</Button>
    </div>
  );
}

function SubOtpBox({ reference, onDone, goBack }) {
  const [inputBoxValue, setInputBoxValue] = useState("");
  return (
    <div>
      <input
        value={inputBoxValue}
        ref={reference}
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            goBack();
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (
            val == "1" ||
            val == "2" ||
            val == "3" ||
            val == "4" ||
            val == "5" ||
            val == "6" ||
            val == "7" ||
            val == "8" ||
            val == "9" ||
            val == "0"
          ) {
            setInputBoxValue(val);
            onDone();
          }
        }}
        className="w-[40px] h-[50px] rounded-xl bg-blue-400 m-1 mt-3 px-4 text-white outline-0"
        type="text"
      />
    </div>
  );
}
