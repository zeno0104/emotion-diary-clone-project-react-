import React from "react";

import { useParams } from "react-router-dom";

export const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>Diary</div>;
};
