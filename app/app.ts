// app.ts
import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { SearchComponent } from './search/search.component';
import { RepositoryComponent } from '../app/repository/repository.component';
import { RepositoryService } from './services/repository.services';

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
          name: 'app.repository',
          url: '/repository?id',
          component: RepositoryComponent.NAME,
        });

    $urlRouterProvider.otherwise('/app');
  }])
  .component(AppComponent.NAME, new AppComponent())
  .component(SearchComponent.NAME, new SearchComponent())
  .component(RepositoryComponent.NAME, new RepositoryComponent())
  .service(RepositoryService.NAME, RepositoryService);
element(document).ready(() => {
  bootstrap(document, ['app']);
});
