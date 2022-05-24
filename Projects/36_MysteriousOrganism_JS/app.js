/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JS app that generates objects that simulate the DNA of a rare species (P.aequor) for a research team to study. 
*/

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        mutate() {
            const baseToMutate = Math.floor(Math.random() * this.dna.length)
            const dnaCurrentValue = this.dna[baseToMutate]
            let newRandValue;
            do {
                newRandValue = returnRandBase()
            } while (newRandValue === dnaCurrentValue);
            this.dna[baseToMutate] = newRandValue;
        },
        compareDNA(pAequor) {
            let match = 0
            let percentage;
            for (let i = 0; i < pAequor.dna.length; i++) {
                const element = pAequor.dna[i];
                if (element === this.dna[i]) match++
            }
            percentage = (match / this.dna.length) * 100
            console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% DNA in common`)
        },
        willLikelySurvive() {
            let goodBases = 0
            let percentage;
            this.dna.forEach(e => e === 'C' || e === 'G' ? goodBases++ : false)
            percentage = (goodBases / this.dna.length) * 100
            return percentage >= 60
        }
    }
}

const generateGoodInstances = ammount => {
    let goodInstanceArray = []
    let specimen = 1;
    for (let i = 0; i < ammount; i++) {
        let newStrand;
        do {
            newStrand = pAequorFactory(specimen, mockUpStrand())
        } while (!newStrand.willLikelySurvive());
        goodInstanceArray.push(newStrand)
        specimen++
    }
    return goodInstanceArray
}

const goodInstances = generateGoodInstances(30)