import React, { Dispatch, SetStateAction, useRef } from "react";
import RenderIf from "../RenderIf/RenderIf";

type ToastProps = {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const Toast: React.FC<ToastProps> = ({ isShow, setIsShow }) => {
  const toast = useRef<HTMLDivElement>(null);

  const closeToast = () => {
    toast.current?.classList.add("toast-slide-out");

    setTimeout(() => {
      setIsShow(false);
    }, 500);
  };

  return (
    <RenderIf condition={isShow}>
      <div ref={toast} className={`toast`}>
        <div className="mb-1 flex items-center justify-between">
          <div className="text-base font-medium">Success</div>
          <div
            className="flex cursor-pointer items-center justify-center rounded p-1 duration-200 hover:bg-red-200 "
            onClick={closeToast}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-red-500"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="text-gray-400">
          Check the browser console for the output
        </div>
      </div>
    </RenderIf>
  );
};

export default Toast;
