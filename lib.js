class Calculation {
    constructor(data) {
        this.data = data
    }

    asyncCalcTotalUmur = (data) => {
        return new Promise((resolve, reject) => {
            this.totalUmur = 0
            for (let index = 0; index < data.length; index++){
                this.totalUmur += Number(data[index].umur)
            }
            resolve(this.totalUmur)
        })
    }

    asyncCalcTotalBekal = (data) => {
        return new Promise((resolve, reject) => {
            this.totalBekal = 0
            for (let index = 0; index < data.length; index++){
                this.totalBekal += Number(data[index].bekal)
            }
            resolve(this.totalBekal)
        })
    }

    calcAll(){
        Promise.all([this.asyncCalcTotalBekal(this.data), this.asyncCalcTotalUmur(this.data)]).then((result) => {
            for(let cek of result){
                console.log(cek)
            }
            console.log('Calc Done')
        })
    }
}

class Stats extends Calculation{
    constructor(data){
        super(data)
    }
}