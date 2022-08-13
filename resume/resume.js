function generPaper(layoutStr, json) {
  const createGrid = () => {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    return grid;
  };

  const createBox = (span, title, value, isHeader) => {
    const box = document.createElement("div");
    const titleBox = document.createElement("div");
    const valueBox = document.createElement("div");
    box.classList.add(`b-${span}`);
    if (isHeader) box.classList.add("sticky");
    titleBox.classList.add("title");
    valueBox.classList.add("value");
    titleBox.innerText = title;
    valueBox.innerText = value;

    box.appendChild(titleBox);
    box.appendChild(valueBox);
    return box;
  };

  const jsonArray = Object.entries(json).reverse();
  const grid = createGrid();

  const converSpan = (cha) => {
    switch (cha) {
      case "1":
        return 1;
      case "2":
        return 2;
      case "-":
        return 3;
      default:
        return -1;
    }
  };

  let headerCounter = 3;
  for (let i = 0; i < layoutStr.length; i++) {
    const span = converSpan(layoutStr[i]);

    if (span <= 0) continue;

    const box = createBox(span);
    const data = jsonArray.length ? jsonArray.pop() : ["", ""];
    const isHeader = headerCounter > 0;
    grid.appendChild(createBox(span, data[0], data[1], isHeader));

    headerCounter -= span;
  }

  return grid;
}

(() => {
  const json = {
    Name: "Snowy",
    Age: "28",
    Gender: "Male",
    Phone: "156-5519-7127",
    Email: "snow_sore@hotmail.com",
    Address: "Chengdu",
    Nationality: "South Korea",
    Skills: "Web frontend, Database, Server, Linux",
    Education: "Sichuan University",
  };

  const root = document.getElementById("resume");
  const main = document.createElement("div");
  const input = document.createElement("input");
  input.value = "-[1|1|1][2|1]--";

  input.onchange = (e) => {
    e.preventDefault();

    const layoutStr = e.target.value;

    main.innerHTML = "";
    main.appendChild(generPaper(layoutStr, json));
  };

  main.appendChild(generPaper(input.value, json));
  root.appendChild(input);
  root.appendChild(main);
})();
