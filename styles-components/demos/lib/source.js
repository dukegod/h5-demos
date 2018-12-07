
async function source(params) {
    const result = await fetch(`../docs/${params}`);
    return result;
}

export default source;

