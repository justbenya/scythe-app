export function shuffle(array: any): Array<any> {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        let temp = result[i];
        result[i] = result[randIndex];
        result[randIndex] = temp;
    }
    return result;
}

export function isEmpty(obj: object) {
    return Object.keys(obj).length === 0;
}
