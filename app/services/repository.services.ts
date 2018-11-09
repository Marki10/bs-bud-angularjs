export class RepositoryService {
  static $inject = ['$q', '$http'];
  static NAME: string = 'userService';

  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService) { }

  public getAll(): angular.IHttpPromise<any> {
    return this.$http.get('');
  }
}
