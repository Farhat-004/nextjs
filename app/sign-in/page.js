import SignIn from "../components/sign-in-com";
import { auth } from "@/auth";
import SignOut from "../components/sign-out";
import Image from "next/image";
export default async function Authpage() {
    const session = await auth();
    console.log(session);

    return (
        <div className="flex flex-col m-10">
            {session && (
                <div className="flex">
                    <p>{session.user.name}</p>
                    <span className="mx-2">|</span>
                    <Image
                        src={session.user.image}
                        alt="user's image"
                        height={30}
                        width={30}
                        className="rounded-full"
                    />
                </div>
            )}
            <div className="">{session ? <SignOut /> : <SignIn />}</div>
        </div>
    );
}
