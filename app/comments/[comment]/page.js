import { comments } from "@/app/data/data";

export default async function Comment({ params }) {
    const { comment } = await params;
    const commentText = comments[comment - 1]?.text;
    return (
        <div>
            <p>{commentText}</p>
        </div>
    );
}
