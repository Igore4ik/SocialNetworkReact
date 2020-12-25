// создаем переменную в которую попадет undefined, если велью есть и ошибка если велью нет
//это нужно для проверки формы на пустоту
export const required = value =>  value ?  undefined :  "Field id required";

//в этой переменной мы задаем макс длинну и когда длина велью(инпута) превышает наше заданное значение - показываем ошибку
//это нужно для проверки формы на максимальную длину строки
export let setMaxLength = (maxLength) => (value) =>  (value && value.length > maxLength) ? `Max length is ${maxLength}` : undefined;