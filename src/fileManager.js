import * as fs from "fs";

const dataFromFile = (fileName) => {
  const file = fs.readFileSync(`src/db/${fileName}.json`, "utf-8");
  return JSON.parse(file);
};

const changeFile = (fileName, data) => {
  const toBeWritten = JSON.stringify(data);
  fs.writeFileSync(`src/db/${fileName}.json`, toBeWritten, "utf-8");
};

export { dataFromFile, changeFile };
