/* < !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <title>Exam_2</title>
    </head>
    <body>
      <script>
        let man= {
          name: "Alex",
        age: 22,
        gender: "male",
        address: {
          country: "Country"
            },
        marital_status: "married",
        kid: [
        {
          name: "Emily",
        age: 8,
        grandchildren: [
        {
          name: "Alice",
        age: 13
                        },
        ]
                }
        ]
        };
        let newPerson = {
          ...man,
          kid: [
        {
          XXX.YYY[0],
          grandchildren: [
        XXX.YYY[0].grandchildren,
        {
          name: "Bob",
        age: 15
                }
        ]
        }
        ]
};
        console.log(man);
        console.log(newPerson);
      </script>
    </body>
  </html>

  <!DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <title>Exam_2</title>
    </head>
    <body>
      <script>
const checkAccess = (prof, level, age) => {
if ((prof ??? 'proger' ??? level === 'june' && age > 21) ??? (prof === 'proger' && level === 'middle' && age >= 18)) {
          console.log('Оффер!');
} else {
          console.log('Прокачивайся дальше, салага!');
}
};
        checkAccess('proger', 'june', 25);
        checkAccess('proger', 'middle', 18);
      </script>
    </body>
  </html>

  
 */

  < !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <title>Exam_2</title>
    </head>
    <body>
      <script>
        let person= {
          name: "John",
        age: 35,
        gender: "male",
        address: {
          street: "123 Main St",
        city: "Cityville",
        state: "State",
        country: "Country"
            },
        passport: {
          number: "ABC123XYZ",
            },
        marital_status: "married",
        kid: [
        {
          name: "Emily",
        age: 8
                },
        ]
        };
        let newPerson = {
          ...person,
          kid: [
        {
          name: "Kate",
        age: 11
        }
        ]
    };
        console.log(person);
        console.log(newPerson);
      </script>
    </body>
  </html>
