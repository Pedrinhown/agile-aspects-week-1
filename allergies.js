//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alergias = {
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

  constructor(alergia) {
    this.identificadorAlergia = alergia;
  }

  list() {
    const itensAlergico = [];

    for (const alergico in alergias) {
      if ((this.identificadorAlergia & alergias[alergico]) !== 0) {
        itensAlergico.push(alergico);
      }
    }

    console.log(itensAlergico);
    return itensAlergico;
  }

  allergicTo(alergico) {

    return (this.identificadorAlergia & alergias[alergico]) !== 0;
  }
}

