import { useParams } from "react-router-dom";

export const Diary = () => {
  const params = useParams();
  return <div>{params.id}번 일기 내용 입니다~</div>;
};
