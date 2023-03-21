import React, { Component } from 'react'
type TxtProps = {
  id?: string;
  value?: string;
  block?: boolean;
  className?: string;
  wsize?:"xs" |"sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  onChange?: (event: any) => void;
};

const style = {
  block: "flex justify-center w-full",//最大幅まで伸ばす
  default: "focus:outline-none m-1 border-2 border-gray-400 rounded",
  wsize: {  //要素widthサイズ
    xs: "w-12",
    sm: "w-28",
    md: "w-36",
    lg: "w-40",
    xl: "w-48",
  },
};

export const OkyTextbox = (
  (
    {
      id,
      value,
      block = false,
      className,
      disabled = false,
      wsize,
      onChange,
    }: TxtProps
  ) => (
    <input 
      id={id}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={`${className} ${block ? style.block : ""}
               ${wsize ? style.wsize[wsize]:""}
               ${style.default}`}
    />
  )
);