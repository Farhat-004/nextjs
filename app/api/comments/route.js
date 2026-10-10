import { comments } from "@/app/data/data";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    if (query) {
        const filteredComments = comments.filter((com) =>
            com.text.toLocaleLowerCase().includes(query)
        );
        return Response.json(filteredComments);
    }

    return Response.json(comments);
}
