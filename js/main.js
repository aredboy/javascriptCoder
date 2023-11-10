//--------- 1ra Entrega ----------

function openDialog() {
    let customMsg = "Ya tenés el Reprocann?";
    let number = 0;
    
    if (confirm(customMsg, number, length)) {
        number = Number(prompt("Ingrese su número de autorización de 5 dígitos."));
        length = number.toString().length;
        budget(length);
    } else {
        alert("Ingresá a https://reprocann.msal.gob.ar/auth y obtenelo!");
    };
}

function budget(quantity) {
    if (length<=5){
        quantity = Number(prompt("Cuantos gramos necesitas?"));
        grams = quantity;
    } else {
        alert("Número incorrecto, vuelva a escribirlo.")
    }
    calculateBudget(grams);
}

function calculateBudget() {
    if (grams<=10) {
        multi = grams*3;
        alert('El valor total de su pedido es de u$d '+multi+'.');
    } else {
        multi1 = grams*2;
        alert('El valor total de su pedido es de u$d '+multi1+'.');
    }
}

//----------- 2da Entrega ----------

const strains = [
	{
        name: 'Chemdawg',
        thc: '18%',
		cbd: 'CBG 1%',
		rating: 4.3,
		feelings: 'Euforia, Inspiración, Creatividad',
		negatives: 'Boca seca, Ojos secos, Mareo',
		helps: 'Estrés, Ansiedad, Dolor',
        description: 'https://www.leafly.com/strains/chemdawg'
	},
	{
        name: 'OG Kush',
        thc: '18%',
		cbd: '0%',
		rating: 4.3,
		feelings: 'Hambre, Sueño, Euforia',
		negatives: 'Boca seca, Ojos secos, Paranoia',
		helps: 'Estrés, Ansiedad, Dolor',
        description: 'https://www.leafly.com/strains/og-kush'
	},
	{
        name: 'Skunk Dawg',
        thc: '21%',
		cbd: 'CBG 1%',
		rating: 4.5,
		feelings: 'Verborragia, Enfoque, Energética',
		negatives: 'Boca seca, Paranoia, Ansiedad',
		helps: 'Estrés, Depresión, Ansiedad',
        description: 'https://www.leafly.com/strains/skunk-dawg'
	},
	{
        name: 'Blueberry AK',
        thc: '20%',
		cbd: 'CBG 1%',
		rating: 4.7,
		feelings: 'Euforia, Relajación, Hambre',
		negatives: 'Dolor de cabeza, Mareo, Boca seca',
		helps: 'Estrés, Ansiedad, Depresión',
        description: 'https://www.leafly.com/strains/blueberry-ak'
	},
	{
        name: 'Strawberry Cheesecake',
        thc: '16%',
		cbd: '0%',
		rating: 4.5,
		feelings: 'Alegría, Sueño, Euforia',
		negatives: 'Ojos secos, Mareo, Boca seca',
		helps: 'Dolor, Estrés, Depresión',
        description: 'https://www.leafly.com/strains/strawberry-cheesecake'
	},
	{
        name: 'Cereal Milk',
        thc: '22%',
		cbd: 'CBG 1%',
		rating: 4.6,
		feelings: 'Relajacion, Risueño, Despierto',
		negatives: 'Dolor de cabeza, Ansiedad, Paranoia',
		helps: 'Ansiedad, Depresión, Estrés',
        description: 'https://www.leafly.com/strains/cereal-milk'
	},
	{
        name: 'Harle-Tsu',
        thc: '0%',
		cbd: '11%',
		rating: 4.5,
		feelings: 'Relajacion, Enfoque, Despierto',
		negatives: 'Dolor de cabeza, Mareo, Ojos secos',
		helps: 'Dolor, Estrés, Ansiedad',
        description: 'https://www.leafly.com/strains/harle-tsu'
	},
	{
        name: 'Cherry Cheesecake',
        thc: '0%',
		cbd: '11%',
		rating: 5.0,
		feelings: 'Risueño, Verborragia, Enfoque',
		negatives: 'Boca seca',
		helps: 'Ansiedad, Enfermedad de Crohn´s',
        description: 'https://www.leafly.com/strains/cherry-cheesecake'
	},
	{
        name: 'Cherry On Top',
        thc: '0%',
		cbd: '8%',
		rating: 4.5,
		feelings: 'Alegría, Sueño, Hambre',
		negatives: 'Boca seca',
		helps: 'Depresión, Ansiedad, Insomnio',
        description: 'https://www.leafly.com/strains/cherry-cheesecake'
	},
	{
        name: 'Harlequin',
        thc: '5%',
		cbd: '9%',
		rating: 4.3,
		feelings: 'Enfoque, Energético, Despierto',
		negatives: 'Ansiedad, Dolor de cabeza, Ojos secos',
		helps: 'Dolor, Ansiedad, Estrés',
        description: 'https://www.leafly.com/strains/harlequin'
	},
	{
        name: 'Mochi',
        thc: '10%',
		cbd: '0%',
		rating: 4.6,
		feelings: 'Sueño, Relajación, Hambre',
		negatives: 'Ansiedad, Paranoia, Ojos secos',
		helps: 'Ansiedad, Insomnio, Estrés',
        description: 'https://www.leafly.com/strains/mochi'
	},
];


alert('Ahora elegí la cepa prescripta por tu médico.');
let helpPrompt = prompt('Ingrese cuál es su dolencia principal (Ansiedad, Estrés, Depresión, Dolor, Insomnio, Enfermedad de Crohn´s): ');

function showStrains(strains){
    strains.forEach((strain) =>
    console.log(
        strain.name + ", " 
        + strain.thc + ", " 
        + strain.cbd + ", " 
        + strain.rating + ", " 
        + strain.feelings + ", " 
        + strain.negatives + ", " 
        + strain.helps + ", " 
        + strain.description)
        );
    }

function chooseStrainByMedicalCondition() {

    const result = strains
        .filter(filterStrain);
    if (result.length > 0) {
        showStrains(result);
    } else {
        alert("No contamos una cepa para esa dolencia. Contactate con nosotros para que te asesoremos al: 11-5656-8080");
    }
}


function filterStrain(strain) {
    
    if(helpPrompt) {
        return strain.helps.includes(helpPrompt);
    };
    return strain;
}

chooseStrainByMedicalCondition()