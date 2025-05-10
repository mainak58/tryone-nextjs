import Link from "next/link";
import { getCode } from "@/lib/getCode";
import { Suspense } from "react";
import SuspendedComponent from "@/lib/SuspendedComponent";

export default async function Home() {
    return (
        <>
            <h1>Home</h1>
            <Suspense fallback={<p>Loading ....</p>}>
                <SuspendedComponent />
            </Suspense>
            <Link href={"/users/1"}>User 1</Link>
        </>
    );
}
