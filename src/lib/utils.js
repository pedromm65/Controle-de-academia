module.exports = {
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    today.getDate()
    birthDate.getDate()

    if ( month < 0 || month == 0 && today.getDate() < birthDate.getDate() ) {
        age = age - 1   
    }

    return age
    },

    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day  = `0${date.getUTCDate()}`.slice(-2)

        return  {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },

    bloodType(type) {
        let typeBlood = 'C+'

        if (type === 'A1') {
            typeBlood = 'A+'
        } else if (type === 'A0') {
            typeBlood = 'A-'
        } else if (type === 'B1') {
            typeBlood = 'B+'
        } else if (type === 'B0') {
            typeBlood = 'B-'
        } else if (type === 'AB1') {
            typeBlood = 'AB+'
        } else if (type === 'AB0') {
            typeBlood = 'AB-'
        } else if (type === 'O1') {
            typeBlood = 'O+'
        } else if (type === 'O0') {
            typeBlood = 'O-'
        }

        return {
            TipoSangue: typeBlood
        } 
    }

}