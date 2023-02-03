import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodolist} from "./components/SuperTodolist";


function App() {

  const tasks = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false}
  ]

  return (
    <div>
      <SuperButton callBack={() => {}} color="red">RED SUPER BUTTON</SuperButton>
      <SuperButton callBack={() => {}}>DEFAULT SUPER BUTTON</SuperButton>
      <SuperButton callBack={() => {}} color="secondary" disabled>RED SUPER BUTTON</SuperButton>

      <div>------------------------------------------------------------------------------------------------------</div>

      <SuperTodolist tasks={tasks}>
      <div>
        <SuperButton callBack={() => {
        }} color="red">RED SUPER BUTTON</SuperButton>
        <SuperButton callBack={() => {
        }}>DEFAULT SUPER BUTTON</SuperButton>
        <SuperButton callBack={() => {
        }} color={"secondary"} disabled>RED SUPER BUTTON</SuperButton>
        <input type={"text"}/>
        <input type={"text"}/>
        <input type={"text"}/>
        <input type={"text"}/>
        <input type={"text"}/>
        <input type={"text"}/>
        <input type={"text"}/>
        <input type={"text"}/>
      </div>
      </SuperTodolist>

      <div>------------------------------------------------------------------------------------------------------</div>

      <SuperTodolist tasks={tasks}>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
      </SuperTodolist>

      <div>------------------------------------------------------------------------------------------------------</div>

      <SuperTodolist tasks={tasks}>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <SuperButton callBack={() => {
        }} color="red">RED SUPER BUTTON</SuperButton>
        <SuperButton callBack={() => {
        }}>DEFAULT SUPER BUTTON</SuperButton>
        <SuperButton callBack={() => {}} color={"secondary"} disabled>RED SUPER BUTTON</SuperButton>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
        <div>some text</div>
      </SuperTodolist>

    </div>
  );
}


export default App;
