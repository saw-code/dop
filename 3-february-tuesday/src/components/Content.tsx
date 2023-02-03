import React from 'react';
import {PagesType} from "../data/dataState";

type PropsType = {
  page: PagesType
}

export const Content = (props: PropsType) => {
  return (
    <div>
      <h3>
        {props.page.heading}
        <div>{props.page.about}</div>
      </h3>
    </div>
  );
};
