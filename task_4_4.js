function Electric(){
    this.section = 'Электро'
    this.switch = true
}

Electric.prototype.info = function(){
    // if (this.switch){
    console.group(`${this.name}:`)
    console.log(`Секция: ${this.section}`)
    console.log(`Тип: ${this.type}`)
    this.switch ? console.log(`Состояние:  ВКЛ`) : console.log(`Состояние:  ОТКЛ`)
    console.groupEnd()
}

Electric.prototype.switcher = function(){
    if (this.switch){
        this.switch = false
        console.log(`Сработал выключатель "${this.name}" - переведён в состояние: ${this.switch}`)
    } else {
        this.switch = true
        console.log(`Сработал выключатель "${this.name}" - переведён в состояние: ${this.switch}`)
    }
    return this.switch
}

function Lamps (name, type) {
    this.name = name,
        this.type = type
}
Lamps.prototype = new Electric()
Lamps.prototype.info = function(){
    if (this.switch){
        console.log(`Отдел "Светильники"\n${this.name}:\nТип: ${this.type}\nСостояние:  ВКЛ`)
    } else {
        console.log(`Отдел "Светильники"\n${this.name}:\nТип: ${this.type}\nСостояние:  ОТКЛ`)
    }
}

function Computers (name, type) {
    this.name = name,
        this.type = type
}
Computers.prototype = new Electric()

const lamp = new Lamps("Лампа", "LED")

const comp1 = new Computers("Компьютер", 'Laptop')
const comp2 = new Computers("Компьютер", 'PC')

// console.log(lamp)
lamp.info()
lamp.switch = lamp.switcher()
lamp.info()
lamp.switch = lamp.switcher()
lamp.info()
// console.log(comp)
comp1.info()
comp1.switcher()
comp1.info()
comp2.info()