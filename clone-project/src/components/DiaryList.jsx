import { useState } from "react";
import { Button } from "./Button";
import { DiaryItem } from "./DiaryItem";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDate = () => {
    // toSorted(): 원본 배열은 냅두고 정렬된 새로운 배열을 반환한다.
    // eslint-disable-next-line react/prop-types
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return a.createdDate - b.createdDate;
      } else {
        return b.createdDate - a.createdDate;
      }
    });
  };
  const sortedData = getSortedDate();
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text="새 일기 쓰기"
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
