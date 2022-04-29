//1
let doc = {
  title: '',
  body: '',
  footer: '',
  date: new Date().toString(),
  addition: {
    topic: '',
    body: '',
    footer: '',
    date: new Date().toString(),
  },
}
function title(value) {
  doc.title = value
  let title = document.createElement('h3')
  title.innerHTML = `Заголовок документа: ${doc.title}`
  document.body.appendChild(title)
}
function body(value) {
  doc.body = value
  let body = document.createElement('h3')
  body
  body.innerHTML = `Тіло документа : ${doc.body}`
  document.body.appendChild(body)
}
function footer(value) {
  doc.footer = value
  let footer = document.createElement('h3')
  footer.innerHTML = `Футер документа : ${doc.footer}`
  document.body.appendChild(footer)
}

function date(value = new Date().toString()) {
  doc.date = value
  let date = document.createElement('h3')
  date.innerHTML = `Дата документа : ${doc.date}`
  document.body.appendChild(date)
}
function addition(topic, body, footer, date) {
  doc.addition.topic = topic
  doc.addition.body = body
  doc.addition.footer = footer
  doc.addition.date = date
  let addition = document.createElement('div')
  addition.style.background = '#FFA07A'
  addition.style.color = 'white'
  addition.style.width = '300px'
  addition.innerHTML = `Додаток заголовок : ${doc.addition.topic}
    <br>
    Додаток тіла : ${doc.addition.body}
    <br>
    Додаток футера : ${doc.addition.footer}
    <br>
    Додаток дати : ${doc.addition.date}

    `
  document.body.appendChild(addition)
}

function main() {
  title('My header!')
  body('My body in project!')
  date()
  addition(
    'Title in addition',
    'Main part in addition',
    'Footer in addition',
    new Date().toString(),
  )
  footer('My footer in project!')
}
//main()
//2
function calc(num1, num2, symbol) {
  switch (symbol) {
    case '+':
      let res1 = num1 + num2
      alert(`Ви ввели ${num1} та ${num2} Результат додавання : ${res1}`)
      break
    case '-':
      let res2 = num1 - num2
      alert(`Ви ввели ${num1} та ${num2} Результат віднімання : ${res2}`)

      break
    case '/':
      let res3 = num1 / num2
      alert(`Ви ввели ${num1} та ${num2} Результат ділення : ${res3}`)

      break
    case '*':
      let res4 = num1 * num2
      alert(`Ви ввели ${num1} та ${num2} Результат множення : ${res4}`)

      break

    default:
      console.log('Введіть коректні значення!')
  }
}
//calc(30000,3,'/')

//3 and 4
function calculate(num1, num2, sign) {
  const signs = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
  }
  if (Array.isArray(num1)) {
    let result = []
    num1.map((first, index) => {
      const secondNum = num2[index]
      result.push(signs[sign](first, secondNum))
    })
    return result
  }
  if (typeof num1 === 'object') {
    return { result: signs[sign](num1.a, num2.b) }
  }
  return signs[sign](num1, num2)
}

//console.log(`[10,6,3] * [1,5,30] = `,calculate([10,6,3], [1,5,30], "*"))
//console.log(`[10,6,3] + [1,5,30] = `,calculate([10,6,3], [1,5,30], "+"))

//console.log(`{a: 100} - {b: 10} = ` ,calculate( {a: 100}, {b: 10}, "-"))
//console.log(`{a: 100} / {b: 10} = ` ,calculate({a: 100}, {b: 10}, "/"))
//5 and 6
MathFrameWork.first = [20, 3]
MathFrameWork.second = [1, 7]
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, '+')
console.log(
  `Ви ввели [${MathFrameWork.first}] + [${MathFrameWork.second}] \n Результат додавання: `,
  MathFrameWork.result,
)

MathFrameWork.first = 2
MathFrameWork.second = 5
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, '*')
console.log(
  `Ви ввели ${MathFrameWork.first} * ${MathFrameWork.second} \n Результат  множення: `,
  MathFrameWork.result,
)

MathFrameWork.first = { a: 120 }
MathFrameWork.second = { b: 3 }
MathFrameWork.calc(MathFrameWork.first, MathFrameWork.second, '/')
console.log(
  `Ви ввели ${MathFrameWork.first.a} / ${MathFrameWork.second.b} \n Результат  ділення: `,
  MathFrameWork.result,
)

//game
let questions = {
  0: 'Ти вже розумієш та вдосконалюєш свої знання з програмування? ',
  1: 'Ти творча людина, якій подобається створювати прекрасне?',
  2: 'Ти любиш вчити іноземні мови?',
  3: 'Ого, буду тоді до вас на ви! Ви маєте діточок і внучок?',
  4: 'Ти любиш дивитися Марвел чи ДС?',
  5: 'Ти вмієш дивувати інших своїми ідеями та знаннями?',
  6: 'Ого, тінейджер, ти любиш вчитися?',
  7: 'Тоді ти любиш дивитися тік-ток і серіальчики ?',
  8: 'Ти живеш тільки однією реальністю та по принципу зараз або ніколи? ',
  9: 'Обери твій улюблений предмет (цифрою): \n 1) Математика\n 2) Іноземні мови\n 3) Інформатика \n 4) Образотворче мистецтво \n 5) Музика',
  10: 'А працювати заради підтримання економіки України треба ж???',
}
let result = {
  0: 'Ого, ми знайшли розробника та ще й дуже розумного!',
  1: 'Ви що кібер-людина? Відпочиньте від стількох справ...',
  2: 'Ти мрійна та вигадлива людина, яка зможе втілити все, що вона тільки забажає!',
  3: 'Ти людина, яка втратила бажання працювати, візьми себе в ручки!',
  4: 'Борітеся - поборете! П.С. хвате дивитися тік-ток....',
  5: 'В тебе все попереду!',
  6: 'Вам треба відпочинок для майбутніх звершень!',
}
let userName = prompt("Введіть своє ім'я", '')

userName = userName || (userName = 'Ноунейм')
let info1 = `
  Вітаємо вас у нашій вікторині, ${userName}!
  Дуже раді, що ви вирішили провести час з нами!
  Ви дізнаєтеся про себе багато нового!
  Правила дуже прості! Відповідай так чи ні на поставленні запитання!
  `
console.log(info1)
let userAge = prompt('Введіть свій вік', '')

console.log('Твій вік ', userAge, ' років')
if (userAge > 7 && userAge <= 30) {
  console.log(questions[6])
  let res1 = prompt(questions[6])
  console.log(`Ти обрав `, res1)
  switch (res1) {
    case 'так': {
      let res3 = prompt(questions[9])
      console.log(questions[9])
      console.log(`Ти обрав`, res3)
      let q1 = res3 == 1 || res3 == 3
      if (q1) {
        let res4 = prompt(questions[0])
        console.log(questions[0])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          console.log(result[0])
        }
        if (res4 == 'ні') {
          console.log(result[5])
        }
      }
      let q2 = res3 == 4 || res3 == 5
      if (q2) {
        let res4 = prompt(questions[1])
        console.log(questions[1])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          let res5 = prompt(questions[5])
          console.log(questions[5])
          console.log(`Ти обрав`, res5)
          if (res5 == 'так') {
            console.log(result[2])
          } else if (res == 'ні') {
            console.log(result[5])
          }
        }
        if (res4 == 'ні') {
          console.log(result[5])
        }
      }
      if (res3 == 2) {
        let res4 = prompt(questions[2])
        console.log(questions[2])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          console.log(result[1])
        } else if (res4 == 'ні') {
          console.log(result[5])
        }
      }
      break
    }
    case 'ні': {
      let res3 = prompt(questions[7])
      console.log(questions[7])
      console.log(`Ти обрав`, res3)

      if (res3 == 'так') {
        let res4 = prompt(questions[10])
        console.log(questions[10])
        console.log(`Ти обрав`, res4)
        if (res4 == 'так') {
          console.log(result[3])
        }
        if (res4 == 'ні') {
          console.log(result[6])
        }
      } else if (res3 == 'ні') {
        console.log(result[6])
      }
      break
    }
  }
}

if (userAge > 31 && userAge < 70) {
  let res5 = prompt(questions[3])
  console.log(questions[3])
  console.log(`Ти обрав`, res5)
  if (res5 == 'так') {
    let res6 = prompt(questions[5])
    console.log(questions[5])
    console.log(`Ти обрав`, res6)

    if (res6 == 'так') {
      console.log(result[2])
    }
    if (res6 == 'ні') {
      console.log(result[6])
    }
  } else if (res5 == 'ні') {
    let res6 = prompt(questions[8])
    console.log(questions[8])
    console.log(`Ти обрав`, res6)
    if (res6 == 'так') {
      console.log(result[1])
    } else if (res6 == 'ні') {
      console.log(result[2])
    }
  }
} else {
  console.log('Введіть коректну відповідь, щоб ми вас зрозуміли ...')
}

//additionally
var manager = {
    first_name: 'Nesterenko',
    last_name: 'Daria',
    age: 25,
    gender: 'female',
    _id: 203041,
    speciality: 'Project Manager',
  }

  console.log('Manager ', manager)
  function Secretary(first_name, last_name, age, gender) {
    this.first_name = first_name
    this.last_name = last_name
    this.age = age
    this.gender = gender
  }
  var mySecretary = new Secretary('Lavrenko', 'Katerina', 30, 'female')
  console.log('Secretary ', mySecretary)

  //p
  function createP(text) {
    let p = document.createElement('p')
    p.innerHTML = text
    document.body.appendChild(p)
  }
  //button
  function createButton(text) {
    let btn = document.createElement('button')
    btn.id = text
    btn.innerHTML = '<b>' + text
    document.body.appendChild(btn)
  }
  //input
  function createInput(text) {
    let input = document.createElement('input')
    input.id = text
    input.type = 'number'
    document.body.appendChild(input)
  }
  let p1 = createP('CALCULATOR')
  document.write('<br>')
  let p2 = createP('Enter the numbers')
  let inputElem1 = createInput('inputId1')
  let inputElem2 = createInput('inputId2')
  let buttonAll = createButton('all')

  let pResult = document.createElement('p')
  document.body.appendChild(pResult)

  function res(result) {
    pResult.innerHTML = `<br/> Result = ${result.toFixed(2)}`
  }

  all.onclick = () => {
    pResult.innerHTML = `<br/>
Sum = ${inputId1.value + inputId2.value}
multiplication = ${inputId1.value * inputId2.value}
division = ${inputId1.value / inputId2.value}
subtraction = ${inputId1.value - inputId2.value}

`
  }
