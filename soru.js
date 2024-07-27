function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),
    new Soru("5-Hangisi bir JavaScript framework'üdür?", { a: "Angular", b: "Laravel", c: "Django" , d: "Spring" }, "a"),
    new Soru("6-Hangisi frontend geliştirme sürecinde kullanılmaz?", { a: "Webpack", b: "Babel", c: "Redis", d: "Gulp" }, "c"),
    new Soru("7-Hangisi JavaScript'in bir kütüphanesidir?", { a: "jQuery", b: "Flask", c: "Symfony", d: "Express" }, "a"),
    new Soru("8-Hangisi bir JavaScript motorudur?", { a: "V8", b: "PhantomJS", c: "jQuery UI", d: "AngularJS" }, "a"),
    new Soru("9-Hangisi JavaScript'in bir derleyicisidir?", { a: "Babel", b: "Webpack", c: "ESLint", d: "npm" }, "a"),
    new Soru("10-Hangisi JavaScript'in bir test framework'üdür?", { a: "Mocha", b: "PHPUnit", c: "JUnit", d: "RSpec" }, "a"),
];