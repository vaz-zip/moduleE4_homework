class ElectricalDevice {
    constructor(name) {
        this.name = name;
        this.voltage = '220 вольт';
        this.deviceTurned = false;
        //this.power = power;
        //this.activation = activation;
    }

    deviceSwitch(deviceSwitch) {
        if (deviceSwitch === 'on') {
            this.deviceTurned = true;
        } else {
            this.deviceTurned = false;
        }
        console.log(`Электроприбор включён: ${this.deviceTurned}`)
    }

    getSwitch(activation) {
        console.log(this.name + ' работает от сети ' + this.voltage + ' и включается ' + activation)
    }
}


class LightingDevices extends ElectricalDevice {
    constructor(name, lightPower, power, activation, deviceTurned, voltage) {
        super(deviceTurned);
        //super(voltage);
        this.name = name;
        this.lightPower = lightPower;
        this.power = power;
        this.activation = activation;
    }

    getLamp(lightPower) {
        console.log(`Световой мощности этой лампы достаточно для освещения ${Math.floor(lightPower / 150)} кв.м жилой комнаты `)
    }
}

//LightingDevices.prototype = new ElectricalDevice()

class digitalTechnology extends ElectricalDevice {
    constructor(name, power, activation, memorySize, deviceTurned) {
        super(deviceTurned);
        //super(voltage);
        this.name = name;
        this.power = power;
        this.activation = activation;
        this.memorySize = memorySize;
    }

    getComp(memorySize) {
        console.log(`Оперативка у компа ${memorySize}!`)
    }
}

//digitalTechnology.prototype = new ElectricalDevice()

class climateEquipment extends ElectricalDevice{
    constructor(name, power, activation, BTU, deviceTurned, voltage) {
        super(voltage)
        //super(deviceTurned);
        this.name = name;
        this.power = power;
        this.activation = activation;
        this.BTU = BTU;
    }

    getFreeze(BTU) {
        console.log(`Мощность охлаждения данного кондиционера - BTU позволяет поддерживать комфортную температуру в помещении ${Math.floor ((BTU / 3412) * 10)} кв.м`)
    }
}

//climateEquipment.prototype = new ElectricalDevice()

const tableLamp = new LightingDevices('Настольная лампа', 600, 9, 'вручную');
const computer = new digitalTechnology('Компьютер', 400, 'вручную', '1 Тб');
const conditioner = new climateEquipment('Кондиционер', 2500, 'ПУ', 8530);


tableLamp.getSwitch('вручную!')
computer.getSwitch('вручную!')
conditioner.getSwitch('ПУ!')
tableLamp.getLamp(7000)
computer.getComp('8 Gb')
conditioner.getFreeze(8000)
tableLamp.deviceSwitch('on'); // Включаем девайс ('on') или выключаем (любое значение, кроме 'on')
