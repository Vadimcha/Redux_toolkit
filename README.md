Нахрен не нужен весь этот проект <br>
Просто в src лежит готовый redux: toolkitRedux <br>
Не забудь обернуть в индексе App в Provider со свойством store={store} <br>
const Переменная = useSelector((state : any) => state.toolkit.Переменная)
const dispatch = useDispatch()
