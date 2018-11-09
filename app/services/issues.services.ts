export class IssuesService {
  static $inject = ['$q', '$http'];
  static NAME: string = 'issuesService';

  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService) { }

  public getIssues(repoName): angular.IHttpPromise<any> {
    return this.$http.get('https://api.github.com/search/issues?q=repo:' + repoName);
  }
}
