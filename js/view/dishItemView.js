class DishItemView {
	constructor(image, name, price) {
		this.image = image;
		this.name = name;
		this.price = price;
	}
	render() {
		if (this.price) {
			return /* template */ `
				<div class="col-md-4 col-lg-2 item-column">
					<div class="item-box">
						<img src="images/${this.image}" alt="">
						<div class="label text-center">${this.name}</div>
						<div class="spacing-x-small"></div>
						<b class="text-danger text-center text-lg-right d-block">${this.price} SEK</b>
					</div>
				</div>
        `
		} else {
			return /* template */ `
				<div class="col-sm-6 col-md-4 item-column">
					<a class="item-box" href="detail.html">
						<img src="images/${this.image}" alt="">
						<div class="label text-center">${this.name}</div>
					</a>
				</div>
			`
		}
	}
}