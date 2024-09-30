const defaultUserAppList = [
  {
    id: "dfsgdfhbfgrjhty",
    name: "AI搜索",
    link: "https://ai-search.zeabur.app/",
    logo: "https://translate.google.cn//favicon.ico",
    type: "inner",
    width: 1024,
    height: 528,
    x: 256,
    y: 132,
  },
  {
    id: "xfghfjytktdfgfht",
    name: "代码练习场",
    link: "https://code.ip3x.com",
    logo: "https://haut-online-ide.vercel.app/favicon.ico",
    type: "inner",
    width: 1024,
    height: 635,
    x: 245,
    y: 37,
  },
  {
    id: "usegyhjrAphgkjkp31",
    name: "GeoGebra",
    link: "https://www.geogebra.org/calculator",
    logo: "https://www.geogebra.org//favicon.ico",
    type: "inner",
    width: 1031,
    height: 666,
    x: 280,
    y: 32,
  },
  {
    id: "usejytjmhjfjytf",
    name: "Excalidraw",
    link: "https://excalidraw.com/",
    logo: "https://excalidraw.com//favicon.ico",
    type: "inner",
    width: 1123,
    height: 698,
    x: 218,
    y: 13,
  },
  {
    id: "0rdAOQGAf6_H1YKiCRBsO",
    name: "vscode",
    link: "https://vscode.dev/",
    logo: "https://vscode.dev/static/stable/favicon.ico",
    type: "outer",
    width: 1228,
    height: 689.1666666666667,
    x: 145,
    y: 9.916666666666629,
  },
  {
    id: "dfsgdfhbfgrjhty",
    name: "MSN天气",
    link: "https://www.msn.cn/zh-cn/weather",
    logo: "https://res.public.onecdn.static.microsoft/creativeservice/3430b1a7-7088-9320-9d5d-fc0714e31835_8353863567095989496_128000000002452769_assets_image1_1607464730314.png",
    type: "inner",
    width: 1024,
    height: 528,
    x: 256,
    y: 132,
  },
];

export type UserApp = typeof defaultUserAppList[number];

export type UserAppList = Array<UserApp>;

export { defaultUserAppList };
