import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      priceChart: {
        label: "Price(USD)",
      },
      coinPage: {
        currentPrice: "Current Price: ",
        marketCap: "Market capitalization: ",
        vol: "Volume(24h): ",
        avg: "Average Price(24h): ",
        circSup: "Circulating Supply: ",
        maxSup: "Maximum Supply: ",
        change: "Change(24h): ",
        history: "Coin's price change history",
        "1D": "1D",
        "5D": "5D",
        "7D": "7D",
        "15D": "15D",
        "1M": "1M",
        "2M": "2M",
        "6M": "6M",
        "1Y": "1Y",
      },
      currenciesTableHead: {
        rank: "Rank",
        name: "Name",
        price: "Price(USD)",
        markCap: "Market Capitalization",
        vol: "Volume(24h)",
        circSup: "Circulating Supply",
        avg: "Average Price(24h)",
        change: "Change(24h)",
        rankTooltipContent:
          "Position of cryptocurrency by Market Capitalization.",
        nameTooltipContent: "Name of crypto project.",
        priceTooltipContent:
          "Cost of a single coin or token for a cryptocurrency.",
        markCapTooltipContent:
          "Cryptocurrencys's total value and is calculated by multiplying the price and circulated suply.",
        changeTooltipContent:
          "Percentage price difference in the market between now and 24 hours ago.",
        volTooltipContent:
          "Number of tokens traded in the market between now and 24 hours ago.",
        circSupTooltipContent:
          "Total number of a specific cryptocurrency's coins or tokens in circulation on a blockchain and publicly available for the market to trade.",
        avgTooltipContent: "Measures the average daily price for an asset.",
      },
      footer: {
        copyright: `${new Date().getFullYear()} © Currency List | All rights reserved`,
        usedAPI: "Used API",
      },
      pagination: {
        back: "Back",
        next: "Next",
      },
    },
  },
  ru: {
    translation: {
      priceChart: {
        label: "Цена(USD)",
      },
      coinPage: {
        currentPrice: "Текущая стоимость: ",
        marketCap: "Рыночная капитализация: ",
        vol: "Объем(24ч): ",
        avg: "Средняя цена(24ч): ",
        circSup: "Циркулирующее Предложение: ",
        maxSup: "Максимальное Предложение: ",
        change: "Изменение(24ч): ",
        history: "История изменения цены",
        "1D": "1Д",
        "5D": "5Д",
        "7D": "7Д",
        "15D": "15Д",
        "1M": "1M",
        "2M": "2M",
        "6M": "6M",
        "1Y": "1Г",
      },
      currenciesTableHead: {
        rank: "Ранк",
        name: "Название",
        price: "Цена(USD)",
        markCap: "Рыночная Капитализация",
        vol: "Объем(24ч)",
        circSup: "Циркулирующее Предложение",
        avg: "Средняя цена(24ч)",
        change: "Изменение(24ч)",
        rankTooltipContent: "Позиция криптовалюты по рыночной капитализации.",
        nameTooltipContent: "Название криптовалютного проекта.",
        priceTooltipContent: "Стоимость одного токена или монеты.",
        markCapTooltipContent:
          "Суммарная стоимость криптовалюты, которая равна произведению цены и циркулирующего предложения.",
        changeTooltipContent:
          "Показывает разницу в стоимости криптовалюты сейчас и 24ч назад.",
        volTooltipContent:
          "Показывает сумму всех проведенных сделок данной криптовалютой за 24ч.",
        circSupTooltipContent:
          "Количество выпущенных монет, которые на данный момент находятся в публичном обращении.",
        avgTooltipContent:
          "Показывает среднюю цену криптовалюты за последние 24ч.",
      },
      footer: {
        copyright: `${new Date().getFullYear()} © Currency List | Все права защищены`,
        usedAPI: "Используемый API",
      },
      pagination: {
        back: "Назад",
        next: "Вперёд",
      },
    },
  },
};

i18n.use(initReactI18next).use(languageDetector).init({
  resources,
});

export default i18n;
