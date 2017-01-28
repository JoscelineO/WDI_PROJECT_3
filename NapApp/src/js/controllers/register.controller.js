angular
  .module('napApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'TokenService', 'CurrentUserService'];
function RegisterCtrl(User, TokenService, CurrentUserService){
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      });
  };
}
