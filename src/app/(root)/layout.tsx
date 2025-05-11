"use client";
import React from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";

const store = makeStore();

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <Provider store={store}>{children}</Provider>
        </main>
    );
}

export default Layout;
