import reducerProfilePage, {addPostActionCreator, deletePostActionCreator} from "./reducer-profilePage";


let state = {
    posts: [
        {id: 1, text: "It's my first post", countLikes: 12},
        {id: 2, text: "Hello everyone", countLikes: 2},
        {id: 3, text: "Nice to meet you", countLikes: 123}
    ]
};
//тест который добавляет новый пост и сравнивает, чтобы длина ожидаемая была равна полученой
//т.к. длина была 3 и 1 пост добавили - длина ожидаемая должна быть равна 4
it('should return new length of posts', function () {
    let action = addPostActionCreator("my new post");

   let newState = reducerProfilePage(state, action);

    expect( newState.posts.length).toBe(4);
});
//тест проверяет равна ли новая длина массива постс ожидаемому значению при удадении поста
// с правильно указанным айди(т.е. такой - который есть в массиве)
//должен вернуть длину минус 1
it('should return decrement length of posts', function () {
    let action = deletePostActionCreator(1);

    let newState = reducerProfilePage(state, action);

    expect( newState.posts.length).toBe(2);
});
//тест проверяет равна ли новая длина массива постс ожидаемому значению при удадении поста
// с не правильно указанным айди(т.е. такого - которого нет в массиве)
//должен вернуть исходную длину
it('should return same length of posts', function () {
    let action = deletePostActionCreator(10);

    let newState = reducerProfilePage(state, action);

    expect( newState.posts.length).toBe(3);
});











