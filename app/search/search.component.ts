class SearchController implements ng.IController {
    welcome: string = 'hello ng';

    constructor() { }
}

export class SearchComponent implements ng.IComponentOptions {
    static NAME: string = 'searchView';
    controller: any;
    templateUrl: any;

    constructor() {
        this.controller = SearchController;
        this.templateUrl = require('./search.html');
    }
}
