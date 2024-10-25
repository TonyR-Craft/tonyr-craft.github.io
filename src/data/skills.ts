const skills = [
    "azure",
    "ansible",
    "bash",
    "c",
    "cpp",
    "cs",
    "css",
    "cypress",
    "docker",
    "eclipse",
    "express",
    "git",
    "github",
    "html",
    "java",
    "js",
    "jest",
    "kotlin",
    "kubernetes",
    "linux",
    "materialui",
    "mongodb",
    "mysql",
    "nextjs",
    "nodejs",
    "npm",
    "perl",
    "powershell",
    "postman",
    "py",
    "react",
    "regex",
    "sqlite",
    "tailwind",
    "terraform",
    "ts",
    "ubuntu",
    "vim",
    "visualstudio",
    "vscode",
    "windows"
]

export const getSkillsFromSkillIconsApiBlock = () => {
    return `https://skillicons.dev/icons?i=${skills.join(",")}`;
}

export const getSkillsFromSkillIconApiArray = () => {
    return skills.map((skill) => `https://skillicons.dev/icons?i=${skill}`);
}