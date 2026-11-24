export const getPosts = async () => {
        const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await promise.json();
        return json;
}

export const getDetailPost = async ({ params }) => {
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const json = await promise.json();
        return json;
}

export const getData = async () => {
        const promise = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await promise.json();
        return json
}