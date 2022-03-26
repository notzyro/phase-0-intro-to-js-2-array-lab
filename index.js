const cats = [ "Milo", "Otis", "Garfield"];

function beforeEach() {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
};

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop(cats);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newcats = [...cats, "Broom"];
    return newcats;
}

function prependCat() {
    const oldcats = ["Arnold", ...cats];
    return oldcats;
}

function removeLastCat() {
    const newcat = cats.slice(0, cats.length - 1);
    return newcat;
}

function removeFirstCat() {
    const firstcat = cats.slice(1);
    return firstcat;
}