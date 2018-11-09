import { IssuesService } from '../services/issues.services';

class IssuesController implements ng.IController {
    static $inject = ['issuesService', '$state', '$stateParams'];

    repoName: string;
    issues: any;

    constructor(public issuesService: IssuesService, public $state: ng.ui.IStateService, public $stateParams: ng.ui.IStateParamsService) {
        this.repoName = $stateParams.repo_name;

        this.getIssues(this.repoName);

    }

    getIssues(repoName): any {
        this.issuesService.getIssues(repoName).then((data) => {
            this.issues = data.data.items;
        });
    }
}

export class IssuesComponent implements ng.IComponentOptions {
    static NAME: string = 'issuesView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = IssuesController;
        this.templateUrl = require('./issues.html');
    }
}
