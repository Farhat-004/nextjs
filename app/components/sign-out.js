import { signOut } from "@/auth";

export default function SignOut() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut("google");
            }}
        >
            <button type="submit">SignOut</button>
        </form>
    );
}
