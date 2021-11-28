const temps: number[] = [30, 20, 40, 50, 50];
const tempsAr: Array<number> = [30, 20, 40, 50, 50];

const tempsNoMytation: readonly number[] = [30, 20, 40, 50, 50];

const tempsStr: (number | string)[] = [30, 20, 40, 50, 50];

const coords: [number, number, string] = [50.0000, 4545.545454, "kjdfhgkldh"]

console.log(temps, tempsAr, coords, tempsStr, tempsNoMytation)
export { };