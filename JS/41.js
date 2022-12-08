/** ЗАДАЧА 41 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

const popularPostsIds = (posts, minimalComentsQty) => {
    let result = new Array;

    for (let i in posts)
        if (posts[i].comments >= minimalComentsQty)
            result.push(posts[i].postId)
    return result
}

const inputPosts = [{
        title: 'Как быстро выучить JavaScript?',
        postId: 3421,
        comments: 25,
    },
    {
        title: 'Где используется JavaScript?',
        postId: 5216,
        comments: 3,
    },
    {
        title: 'Какая разница между React и Angular?',
        postId: 8135,
        comments: 12,
    },
]

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []