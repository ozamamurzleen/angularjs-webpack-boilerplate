import angular from 'angular';
import template from './users.tpl.html';
import customTable from '../../components/custom-table/custom-table.component';

export default angular
  .module('users.page', [
    customTable,
  ])
  .component('users', {
    template,
  })
  .name;
