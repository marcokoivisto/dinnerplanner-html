class SubHeaderController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    addEventListeners() {
        this.view.backBtn.on("click", () => {
            navigate('select');
        })
    }

    renderView() {        
        this.view.render();
        this.addEventListeners();
    }
}