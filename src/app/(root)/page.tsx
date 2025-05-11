"use client";

import Aboutus from "@/components/Aboutus";
import Blog from "@/components/Blog";
import MyContext from "@/components/MyContext";
import { addTodo } from "@/features/todo/todoSlice";
import { FormEvent, useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";

export default function Home() {
    const [name, setName] = useState("");
    // const [names, setNames] = useState("");
    // const data = names;
    const dispatch = useDispatch();

    function onSubmitt(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(addTodo(name));
    }

    return (
        <>
            <h1>Hello World</h1>

            <form onSubmit={onSubmitt}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 bg-amber-300"
                />
                <button type="submit"> Submit</button>
            </form>

            {/* <div>
                <MyContext.Provider value={data}>
                    <Aboutus />
                    <Blog />
                </MyContext.Provider>
            </div> */}
        </>
    );
}
