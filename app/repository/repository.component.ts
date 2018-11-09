import { RepositoryService } from '../services/repository.services';

class RepositoryController implements ng.IController {
    static $inject = ['repositoryService', '$state'];
    repositorys: any;
    constructor(public repository: RepositoryService, public $state: ng.ui.IStateService) {
        this.repository.getAll().then((data) => {
            this.repositorys = data.data;
        });
    }
}

export class RepositoryComponent implements ng.IComponentOptions {
    static NAME: string = 'repositoryView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = RepositoryController;
        this.templateUrl = require('./repository.html');
    }
}
