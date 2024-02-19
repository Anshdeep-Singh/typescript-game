import { CollisionBlock } from "./CollisionBlock";

export function parse2D(array: number[]): number[][] {
    const rows: number[][] = [];
    for (let i = 0; i < array.length; i += 16) {
        rows.push(array.slice(i, i + 16));
    }

    return rows;
}


export function createObjectsFrom2D(matrix: number[][]): CollisionBlock[] {
    const objects: CollisionBlock[] = [];
    matrix.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 292 || symbol === 250) {
                objects.push(
                    new CollisionBlock({
                        position: {
                            x: x * 64,
                            y: y * 64,
                        },
                    })
                );
            }
        });
    });

    return objects;
}
