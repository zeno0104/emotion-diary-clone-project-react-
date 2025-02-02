import { useParams } from "react-router-dom";

export const Edit = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 일기 수정페이지 입니다.</div>;
};
