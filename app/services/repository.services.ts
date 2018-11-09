export class RepositoryService {
  static $inject = ['$q', '$http'];
  static NAME: string = 'repositoryService';

  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService) { }

  public getAll(searchText): angular.IHttpPromise<any> {
    return this.$http.get('https://api.github.com/search/repositories?q=' + searchText);
  }
}
