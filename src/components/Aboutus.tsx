import React from "react";
import MyContext from "./MyContext";

function Aboutus() {
    return (
        <>
            <MyContext.Consumer>
                {(datas) => <div>{datas}</div>}
            </MyContext.Consumer>
        </>
    );
}

export default Aboutus;
