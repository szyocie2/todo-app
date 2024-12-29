import {Employee} from "./types";

const employees: Employee[] = [
    {
        firstName: "Szymon",
        lastName: "Ociepka",
        age: 21,
        position: "Developer",
        programmingLanguage: ["C#", "JavaScript", "C++"]
    },
    {
        firstName: "Kacper",
        lastName: "Mierzwa",
        age: 42,
        position: "Designer",
        programmingLanguage: ["C#", "JavaScript", "Python"]
    },
    {
        firstName: "Paweł",
        lastName: "Krempa",
        age: 69,
        position: "Developer",
        programmingLanguage: ["TypeScript", "JavaScript", "C++"]
    },
    {
        firstName: "Marek",
        lastName: "Kramarz",
        age: 34,
        position: "Developer",
        programmingLanguage: ["PHP", "C", "C++"]
    },
    {
        firstName: "Kacper",
        lastName: "Kubacki",
        age: 19,
        position: "Manager",
        programmingLanguage: ["Java", "JavaScript", "Assembler"]
    },
    {
        firstName: "Szmon",
        lastName: "Miłkowski",
        age: 101,
        position: "Designer",
        programmingLanguage: ["Assembler", "PHP"]
    }
]

const getDevelopers = (employees: Employee[]) => {
    return employees.filter(e => e.position === "Developer");
}

const findEmployee = (employees: Employee[], name: string) => {
    return employees.find(e => e.firstName.includes(name) || e.lastName.includes(name))
}

function addExperience(employee: Employee, lang: string) {
    employee.programmingLanguage.push(lang);
}

function addExperiences(employees: Employee[], lang: string) {
    return employees.map(e => e.programmingLanguage.push(lang));
}


console.log("employees", employees);
const developers: Employee[] = getDevelopers(employees);
console.log("developers", developers);
const szymon = findEmployee(employees, "Szymon");
if (szymon) {
    addExperience(szymon, "Python");
}
console.log("szymon", szymon);
addExperiences(developers, "CSS");
console.log("CSS added", employees);
