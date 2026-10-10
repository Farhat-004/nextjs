import CustomLink from "@/app/components/Link";
import { comments } from "@/app/data/data";

export default function CommentsPage() {
    return (
        <div>
            <ul className="flex flex-col ml-10">
                {comments.map((el) => (
                    <CustomLink key={el.id} path={`comments/${el.id}`}>
                        {el.text}
                    </CustomLink>
                ))}
            </ul>
        </div>
    );
}
