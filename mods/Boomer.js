elements.fire_fairy = {
    name: "fire fairy",
    color: ["#c99373","#d9b882","#db7972"],
	temp:150,
	state: "solid",
	behavior: [
		"XX|CR:smoke%1 AND M1|M1",
		"XX|FX%5|XX",
		"XX|CR:supernova%0.0001 AND CR:bomb%0.1 AND M1|M1",
    ],
    category: "weapons",
};
