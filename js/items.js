const items = [
	'Skull',
	'Gold Key',
	'Treasure Map'
];

Macro.add('selectItems', {
	handler() {
    const num = Number(this.args[0]);
		const selection = [];
		const itemsLeft = [].concat(items);

		while (selection.length < num) {
			selection.push(itemsLeft.splice(Math.random() * itemsLeft.length, 1));
		}

		selection.forEach(item => new Wikifier(this.output,
			`[[${item}|${this.args[1]}][$item to "${item}"]] `));
	}
});
