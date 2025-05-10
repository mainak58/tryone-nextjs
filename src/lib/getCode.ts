export async function getCode() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return Math.random();
}
