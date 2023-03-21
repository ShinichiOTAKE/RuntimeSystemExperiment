import React from "react";

type Props = {
  screenTitle: String,
  screenDetail: String,
  buttonArea: React.ReactNode,
  searchArea: React.ReactNode,
  resultTable: React.ReactNode,
}

export const SearchPatternBuilder =
  (props: Props) => {
    const {
      screenTitle,
      screenDetail,
      buttonArea,
      searchArea,
      resultTable,
    } = props; 

  return (
    <>
      <div className = "header-area mt-2 p-3 bg-okylightgray flex justify-between">
        <div>
          <h1 className="text-3xl">{ screenTitle }</h1>
          <span >{ screenDetail }</span>
        </div>
        {buttonArea}
      </div>
      <div className = "search-area mt-2 p-3 bg-okylightgray">
        { searchArea }
      </div>
      <div className = "result-area mt-2 p-3 bg-okylightgray">
        <div className = " w-full">
          { resultTable }
        </div>
      </div>
    </>
  );
};