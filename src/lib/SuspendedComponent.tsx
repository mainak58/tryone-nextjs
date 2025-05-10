import React from "react";
import { getCode } from "./getCode";

async function SuspendedComponent() {
    return (
        <>
            <p>{await getCode()}</p>
        </>
    );
}

export default SuspendedComponent;
