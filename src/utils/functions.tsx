function priceSlicer(
  price: string,
  trillion: string,
  billion: string,
  million: string
): string {
  let index: number = price.split("").findIndex((elem) => elem === ".");

  if (price.slice(0, index).length >= 4 && price.slice(0, index).length <= 6) {
    return numberWithCommas(price.slice(0, index));
  } else if (price.slice(0, index).length === 3) {
    return price.slice(0, index + 2);
  } else if (price.slice(0, index).length === 2) {
    return price.slice(0, index + 3);
  } else if (price.slice(0, index).length === 1) {
    return price.slice(0, index + 4);
  } else if (price.slice(0, index).length === 15) {
    return price.slice(0, 3) + "." + price.slice(3, 6) + trillion;
  } else if (price.slice(0, index).length === 14) {
    return price.slice(0, 2) + "." + price.slice(2, 5) + trillion;
  } else if (price.slice(0, index).length === 13) {
    return price.slice(0, 1) + "." + price.slice(1, 4) + trillion;
  } else if (price.slice(0, index).length === 12) {
    return price.slice(0, 3) + "." + price.slice(3, 6) + billion;
  } else if (price.slice(0, index).length === 11) {
    return price.slice(0, 2) + "." + price.slice(2, 5) + billion;
  } else if (price.slice(0, index).length === 10) {
    return price.slice(0, 1) + "." + price.slice(1, 4) + billion;
  } else if (price.slice(0, index).length === 9) {
    return price.slice(0, 3) + "." + price.slice(3, 6) + million;
  } else if (price.slice(0, index).length === 8) {
    return price.slice(0, 2) + "." + price.slice(2, 5) + million;
  } else if (price.slice(0, index).length === 7) {
    return price.slice(0, 1) + "." + price.slice(1, 4) + million;
  } else {
    return "";
  }
}

function slicePrice(price: string, lang: string) {
  let billion: string, million: string, trillion: string;
  let res: string;
  if (lang === "en") {
    trillion = " Trillion";
    billion = " Billion";
    million = " Million";
    res = priceSlicer(price, trillion, billion, million);
  } else {
    trillion = " Триллион";
    billion = " Миллиард";
    million = " Миллион";
    res = priceSlicer(price, trillion, billion, million);
  }
  return res;
}

function numberWithCommas(x: string) {
  return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function slicePercent(percent: string): string {
  if (percent[0] === "-") {
    percent.slice(1, -1);
    return percent.slice(1, 5);
  }
  return percent.slice(0, 4);
}

function getChartPrice(price: string) {
  if (price.split(".")[0].length >= 5) {
    return Number(price.split(".")[0]);
  } else {
    return Number(price.slice(0, 5));
  }
}

export { slicePrice, numberWithCommas, slicePercent, getChartPrice };
