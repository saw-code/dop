import React from 'react';
import {dataState, PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

type PropsType = {
  pages: Array<PagesType>
}

export const Page = (props: PropsType) => {

  const params = useParams()

  return (
    <div>
      <Content page={props.pages[Number(params.id)]}/>
    </div>
  );
};
