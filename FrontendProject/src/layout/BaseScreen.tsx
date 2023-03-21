import React from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { OkyButton, OkyClock } from "@/component";

export const BaseScreenLayout = () => {
  return (
    <div className="bg-white">
      <nav>
        <div className="navigation">
          <div className="flex justify-between">
            <div>
              <ul>
                <li>販売管理</li>
              </ul>
            </div>
            <div className="title-bar">
              <ul>
                <li>画面ID:9999999999</li>
                <li><OkyClock /></li>
                <li>9876:システム部</li>
                <li>岡谷太郎</li>
              </ul>
            </div>
          </div>
          <div className="menu-bar">
            <ul>
              <li><a href="/menu">メニュー(ホーム)</a></li>
              <li><a href="/prt0000010">契約管理</a></li>
              <li><a href="/menu">入出荷管理</a></li>
              <li><a href="/menu">計上管理</a></li>
              <li><a href="/menu">サブシステム</a></li>
              <li><a href="/menu">保守管理</a></li>
              <li><a href="/menu">貿易</a></li>
              <li><a href="/test">テスト</a></li>
            </ul>
          </div>
        </div>
        <div className="bg-okygray flex justify-end">
          <OkyButton color="gray" textsize="lg" wsize="lg" hsize="lg" disabled={false} onClick={() => console.log("FAQ")}>FAQ</OkyButton>
          <OkyButton color="gray" textsize="lg" wsize="lg" hsize="lg" disabled={false} onClick={() => console.log("マニュアル")}>マニュアル</OkyButton>
          <OkyButton color="gray" textsize="lg" wsize="lg" hsize="lg" disabled={false} onClick={() => console.log("お助けメモ")}>お助けメモ</OkyButton>
        </div>
      </nav>
      <section id="screen" className = "m-4">
        <Outlet />
      </section>
    </div>
  );
};