<h2>Нахрен не нужен весь этот проект</h2>
Просто в src лежит готовый redux: toolkitRedux <br>
Не забудь обернуть в индексе App в Provider со свойством store={store} <br>
<h2>Дабы юзать эту дичь в других файлах</h2>
const Переменная = useSelector((state : any) => state.toolkit.Переменная)<br>
const dispatch = useDispatch()
