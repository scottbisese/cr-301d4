$.get('../data/page-1.json', (animals) => {
    let source = $("#animal-template").html()
    let template = Handlebars.compile(source);

    animals.forEach(animal => {
        let html = template(animal);
        $('main').append(html);
    });
})

