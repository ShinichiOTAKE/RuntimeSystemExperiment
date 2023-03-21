import React, { Component } from 'react'
type BtnProps = {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  hsize?:"sm" | "md" | "lg";
  wsize?:"sm" | "md" | "lg";
  color?: "green" |"gray";
  textcolor?: "black" | "white";
  disabled?: boolean;
  rounded?: boolean;
  textsize?: "sm" | "md" | "lg";
  submit?: boolean;
  onClick?: (event: any) => void;
};

const style = {
  rounded: "rounded-full", //角を丸くする
  block: "flex justify-center w-full",//最大幅まで伸ばす
  default: "focus:outline-none m-1",
  hsize: {  //要素heightサイズ
    sm: "h-8",
    md: "h-12",
    lg: "h-14",
  },
  wsize: {  //要素widthサイズ
    sm: "w-12",
    md: "w-32",
    lg: "w-40",
  },
  textsizes: {  //文字サイズ
    sm: "text-sm",
    md: "",
    lg: "text-lg",
  },
  colors: {　//色
    green: "bg-okygreen focus:ring-2 focus:ring-offset-2 hover:bg-green-700 focus:ring-green-500",
    gray: "bg-okybtngray focus:ring-2 focus:ring-offset-2 hover:bg-red-700 focus:ring-red-500",
  },
  textcolor: {
    black: "text-black",
    white: "text-white",
  },
};

export const OkyButton = (
  (
    {
      block = false,
      children,
      className,
      color,
      textcolor,
      disabled = false,
      rounded,
      hsize,
      wsize,
      textsize = "md",
      submit,
      onClick,
    }: BtnProps
  ) => (
    <button
      type={submit ? "submit" : "button"}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${block ? style.block : ""}
               ${color ? style.colors[color] : style.colors.gray}
               ${hsize ? style.hsize[hsize]:""}
               ${wsize ? style.wsize[wsize]:""}
               ${textcolor ? style.textcolor[textcolor] : style.textcolor.black}
               ${style.default} ${rounded ? style.rounded : "rounded"}
               ${style.textsizes[textsize]} `}
    >
      {children}
    </button>
  )
);