import { RepositoryService } from '../services/repository.services';

class SearchController implements ng.IController {
    static $inject = ['repositoryService', '$state'];
    repositorys: any;

    constructor(public repository: RepositoryService, public $state: ng.ui.IStateService) { }

    public getRepositories(searchText): any {
        this.repository.getAll(searchText).then((data) => {
            this.repositorys = data.data.items;
        });
    }
}

//repository?id=10

export class SearchComponent implements ng.IComponentOptions {
    static NAME: string = 'searchView';
    controller: any;
    templateUrl: any;

    constructor() {
        this.controller = SearchController;
        this.templateUrl = require('./search.html');
    }
}
