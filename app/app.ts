// app.ts
import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { SearchComponent } from './search/search.component';
import { IssuesComponent } from './issues/issues.component';
import { RepositoryService } from './services/repository.services';
import { IssuesService } from './services/issues.services';

import './app.less';

export let app = module('app', [
  'ui.router'
])
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $stateProvider.state({
      name: 'app',
      url: '/app',
      component: AppComponent.NAME
    }).state(
      {
        name: 'app.search',
        url: '/search',
        component: SearchComponent.NAME
      }).state(
        {
          name: 'app.issues',
          url: '/issues?repo_name',
          component: IssuesComponent.NAME,
        });

    $urlRouterProvider.otherwise('/app');
  }])
  .component(AppComponent.NAME, new AppComponent())
  .component(SearchComponent.NAME, new SearchComponent())
  .component(IssuesComponent.NAME, new IssuesComponent())
  .service(RepositoryService.NAME, RepositoryService)
  .service(IssuesService.NAME, IssuesService);
element(document).ready(() => {
  bootstrap(document, ['app']);
});
