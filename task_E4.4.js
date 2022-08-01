function ElectricalDevice(power, name, activation, deviceSwitch, deviceTurned) {
    this.name = name;
    this.voltage = '220 вольт';
    this.deviceTurned = false;
    this.power = power;
    this.activation = activation;
    this.deviceSwitch = function (deviceSwitch) {
        if (deviceSwitch === 'on') {
            this.deviceTurned = true;
        } else {
            this.deviceTurned = false;
        }
        console.log(`Электроприбор включён: ${this.deviceTurned}`)
    }
    this.getSwitch = function (activation) {
        console.log(this.name + ' работает от сети ' + this.voltage + ' и включается ' + activation)

    }

}



function LightingDevices(name, lightPower, power, activation) {
    this.name = name;
    this.light_power = lightPower;
    this.power = power;
    this.activation = activation;
    this.getLamp = function () {
        console.log(`Световой мощности этой лампы достаточно для освещения ${Math.floor(lightPower / 150)} кв.м жилой комнаты `)
    }
}

LightingDevices.prototype = new ElectricalDevice()

function digitalTechnology(name, power, activation, memorySize) {
    this.name = name;
    this.power = power;
    this.activation = activation;
    this.memorySize = memorySize;
    this.getComp = function () {
        console.log(`Оперативка у компа ${memorySize}!`)
    }
}

digitalTechnology.prototype = new ElectricalDevice()

function climateEquipment(name, power, activation, BTU) {
    this.name = name;
    this.power = power;
    this.activation = activation;
    this.getFreeze = function () {
        console.log(`Мощность охлаждения данного кондиционера - BTU позволяет поддерживать комфортную температуру в помещении ${(BTU / 3412) * 10} кв.м`)
    }
}

climateEquipment.prototype = new ElectricalDevice()

const tableLamp = new LightingDevices('Настольная лампа', 600, 9, 'вручную');
const computer = new digitalTechnology('Компьютер', 400, 'вручную', '1 Тб');
const conditioner = new climateEquipment('Кондиционер', 2500, 'ПУ', 8530);


tableLamp.getSwitch('вручную!')
computer.getSwitch('вручную!')
conditioner.getSwitch('ПУ!')
tableLamp.getLamp()
computer.getComp()
conditioner.getFreeze()
tableLamp.deviceSwitch('on'); // Включаем прибор ('on') или выключаем (любое значение, отличное от 'on')
