class ListItemView {
	constructor(name, price, numberOfGuests) {
		this.name = name;
		this.price = price;
		this.numberOfGuests = numberOfGuests;
	}
	render() {
		return /* template */ `
		<div class="list-item row no-gutters justify-content-between text-danger">
			<span class="col ellipsis" style="padding-right: 15px;">${this.name}</span>
			<span class="col-auto">${this.numberOfGuests} x ${this.price}</span>
		</div>
		`;
	}
}