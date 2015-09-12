var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var ArticleComponent = (function () {
    function ArticleComponent() {
        this.title = "TDD with Angular2";
        this.authors = "Darrel and Daniel";
        this.tags = ["TDD", "Angular2"];
    }
    ArticleComponent.prototype.addTag = function (tag) {
        this.tags.push(tag);
    };
    ArticleComponent = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "<h1>Test-Driven Development with Angular 2<h1/>\n  \t    <h2>Article Description </h2>\n\t    <p>Title: {{ title }}</p> \n\t    <p>Authors: {{ authors }}</p> \n  \t    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
})();
exports.ArticleComponent = ArticleComponent;
