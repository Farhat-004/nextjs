import { comments } from "@/app/data/data";

export async function GET(request, { params }) {
    const { comment } = params;
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    if (query) {
        const filteredComments = comments.filter((com) =>
            com.text.toLocaleLowerCase().includes(query)
        );
        return Response.json(filteredComments);
    }
    const c = comments[comment - 1];
    return new Response(JSON.stringify(c.text));
}
export async function DELETE(request, { params }) {
    const id = params.comment;
    const index = Number(id) - 1;
    const toDelComment = comments.find((el) => el.id === index);
    comments.splice(index, 1);
    return new Response(JSON.stringify(toDelComment.text));
}
export async function PATCH(request, { params }) {
    const id = params.comment;
    const comment = await request.json();

    const index = comments.findIndex((el) => el.id === parseInt(id));
    const toEditComment = comments[index];
    toEditComment.text = comment?.text;
    return Response.json(toEditComment);
}
