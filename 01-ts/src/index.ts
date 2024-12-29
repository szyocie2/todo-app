import {DataProcessor} from "./data-processor";

const proc = new DataProcessor<string>()
proc.addData("X");
proc.addData("13");

proc.processData((d) => {
    console.log(d);
})

const filtered = proc.filterData((d) => {
    return d.length >= 2;
})

console.table(filtered);