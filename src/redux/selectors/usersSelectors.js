export const getUsers = state => state.usersPage.users;
export const getPageSize = state => state.usersPage.pageSize;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsFetching = state => state.usersPage.isFetching;
export const getToggleBtn = state => state.usersPage.toggleBtn;

//Селекторы - методы инкапсулирующие получения нужных полей из стейта, удобно менять в одном месте