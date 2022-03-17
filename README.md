# Тестовое задание Дубинин Иван

Стек: TypeScript, rematch, Bootstrap, Sass
Попробовать онлайн: https://codesandbox.io/s/epic-lake-bk2bit
К заданию добавлена кнопка тестовой среды для отработки сценариев

## Установка проекта

Склонировав проект и открыв его в консоли:

### `npm install`

Устанавливает все необходимые для работы зависимости

### `npm start`

Запускает проект в режиме разработчика по адресу: [http://localhost:3000](http://localhost:3000)

## Известные баги/проблемы

1. Нажатия на комбинации клавиш не отрабатывают, если не кликнуть мышью в пределах div.container-fluid
2. Если комбинацией ctrl+z удалить все заметки, а затем попытаться добавить через ctrl+y добавляются пустые заметки
3. Комбинации отрабатывают костыльно, а не так как предполагается
4. Использован sass вместо scss, так как sass лично удобнее, технологии минимально отличаются синтаксисом
5. Bootstrap подключен через npm, а не cdn или файлами в проекте, поэтому реализация изменённого дизайна сделана через custom.sass
6. Не созданны effects в моделях, так как нет необходимости отрабатывать асинхронные вызовы
7. Не использован TypeScript в своих максимальных возможностях
