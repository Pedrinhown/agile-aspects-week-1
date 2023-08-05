//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dicionario = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

export class Allergies {
  //instancia alergia com base no valor digitado 
  constructor(alergia) {
    this.identificadorAlergia = alergia;
  }
  //lista que vai conter os itens no qual é alergico
  list() {

  }

  allergicTo(alergico) {

    if(this.identificadorAlergia === 0){
      this.identificadorBinario = this.identificadorAlergia.toString(2)
      console.log(this.identificadorAlergia.toString(2));
      return false;
    }
  }
}

