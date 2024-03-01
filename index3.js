< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <title>Exam_4</title>
    </head>
    <body>
      <script>
        const currentTasks= [
        {title: "HTML&CSS", isDone: true },
        {title: "JS", isDone: true },
        {title: "ReactJS", isDone: false }
        ];
    const tasksWithId = XXX.map((todo, i) => ({YYY, id: ZZZ+ 1 }));
        console.log(tasksWithId);
      </script>
    </body>
  </html>
// ! ЧИТАЙ ВНИМАТЕЛЬНО, НЕ СПЕШИ:
// Добавь в каждый объект массива id
// Для этого тебе необходимо разобраться со всеми заглушками XXX YYY ZZZ
// Пример: array ,,,inArray key (через пробел)

<!DOCTYPE html >
  <html lang="en">

    <head>
      <meta charset="UTF-8">
        <title>Exam_3</title>
    </head>

    <body>
      <script>
        const users = [
        {
          currentID: 1,
        name: 'John',
        surName: 'Doe',
        address: '123 Main St'
  },
        {
          currentID: 2,
        name: 'Jane',
        surName: 'Smith',
        address: '456 Elm St'
  },
        {
          currentID: 3,
        name: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
  },
        {
          currentID: 4,
        name: 'Emily',
        surName: 'Brown',
        address: '567 Pine St'
  },
        {
          currentID: 5,
        name: 'Michael',
        surName: 'Williams',
        address: '890 Cedar St'
  }
        ];

const filteredUsers = users.XXX (user => user.YYY%2 ZZZ 0);

        console.log(filteredUsers);

      </script>
    </body>

  </html>


// ! ЧИТАЙ ВНИМАТЕЛЬНО, НЕ СПЕШИ:
// Чтобы вывести объекты с нечетной currentID, тебе необходимо  написать метод,
// поле с которым работаем и условие вместо заглушек XXX  YYY  ZZZ.
// Пример: метод поле ??? (через пробелы)

<!DOCTYPE html >
  <html lang="en">

    <head>
      <meta charset="UTF-8">
        <title>Exam_3</title>
    </head>

    <body>
      <script>
        const namesArray = [
        ["John", "Mary", "David", "Sarah", "Michael"],
        ["Emma", "Robert", "Sophia", "James", "Olivia"],
        ["William", "Emily", "Joseph", "Isabella", "Daniel"],
        ["Grace", "Benjamin", "Mia", "Henry", "Abigail"],
        ["Alexander", "Ava", "Matthew", "Charlotte", "Ethan"],
        ["Harper", "Jack", "Amelia", "Samuel", "Lily"],
        ["Owen", "Ella", "David", "Victoria", "Leo"],
        ["Chloe", "Andrew", "Nora", "Thomas", "Sofia"]
        ];

        const filteredNames = namesArray
      .flatMap(names => names.XXX(name => name[0] === 'YYY')).ZZZ(",");

        console.log(filteredNames);

      </script>
    </body>

  </html>

// ! ЧИТАЙ ВНИМАТЕЛЬНО, НЕ СПЕШИ:
// Чтобы пройти тест, тебе необходимо вместо заглушек XXX, YYY , ZZZ
// написать методы и еще что-то, чтобы вывести все имена начинающиеся на букву "A"
// Пример:  метод * метод (через пробелы, БЕЗ КАВЫЧЕК)
// Заодно не поленись уточнить что делает метод flatMap
