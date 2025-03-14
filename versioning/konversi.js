// 2. Konversi cm ke km atau sebaliknya
function convertLength(value, unit) {
    if (unit === "cm") {
        return `${value / 100000} km`;
    } else if (unit === "km") {
        return `${value * 100000} cm`;
    } else {
        return "Unit tidak valid";
    }
}
console.log(`100000 cm → ${convertLength(100000, "cm")}`);