import { faker } from "@faker-js/faker";
import chalk from "chalk";

function getRandomColor() {
  const colores = [
    //'black',//no negro
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "gray",
    "grey",
    "redBright",
    "greenBright",
    "yellowBright",
    "blueBright",
    "magentaBright",
    "cyanBright",
    "whiteBright",
    //'bgBlack',//no negro
    "bgRed",
    "bgGreen",
    "bgYellow",
    "bgBlue",
    "bgMagenta",
    "bgCyan",
  ];

  const ColorRamdom = colores[Math.floor(Math.random() * colores.length)];
  return ColorRamdom;
}

const NombreRamdom = faker.internet.userName();
const ColorRamdom = getRandomColor();

console.log(chalk[ColorRamdom](NombreRamdom));
