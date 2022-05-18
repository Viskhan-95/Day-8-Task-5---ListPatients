let lastID = 2;

const listPatients = {
    patients: [
        {
            id: 1,
            lastName: 'Иванов',
            firstName: 'Иван',
            birthDay: '01.01.2001',
            address: {
                city: 'Грозный',
                street: 'А. Митаева',
                hause: 50,
            },
            diagnosis: 'Гипертоническая болезнь'
        },

        {
            id: 2,
            lastName: 'Сидоров',
            firstName: 'Сидор',
            birthDay: '01.01.2002',
            address: {
                city: 'Грозный',
                street: 'А-Х Кадырова',
                hause: 1,
            },
            diagnosis: 'Бронхиальная астма'
        },
    ],

    printDataPatient: function (idPatient) {
        let dataPatient = [];

        for (let i = 0; i < this.patients.length; i++) {
            if (this.patients[i].id === idPatient) {
                dataPatient = this.returnArrayDataPatient(this.patients[i]);
            }
        }

        for (let i = 0; i < dataPatient.length; i++) {
            console.log(dataPatient[i]);
        }
    },

    returnArrayDataPatient: function (arrayDataPatient) {
        let dataPatient = [`ФИО: ${arrayDataPatient.lastName} ${arrayDataPatient.firstName} ${arrayDataPatient.birthDay}`,
        `Адрес: г. ${arrayDataPatient.address.city}, ул. ${arrayDataPatient.address.street}, дом ${arrayDataPatient.address.hause}`,
        `Диагноз: ${arrayDataPatient.diagnosis}`];
        return dataPatient;
    },

    printListPatient: function () {
        for (let i = 0; i < this.patients.length; i++) {
            console.log(`ФИО: ${this.patients[i].lastName} ${this.patients[i].firstName}`);
            
        }
    },

    addPatient: function (lastName, firstName, birthDay, diagnosis, city = "Грозный", street = "б/у", hause = "б/н") {
        lastID++;
        const newObj = {
            id: lastID,
            lastName,
            firstName,
            birthDay,
            address: {
                city,
                street,
                hause
            },
            diagnosis: diagnosis,
        };
        this.patients.push(newObj);
    },

    delPatient: function (idPatient) {
        for (let i = 0; i < this.patients.length; i++) {
            if (this.patients[i].id === idPatient) {
                this.patients.splice(i, 1);
            }
        }
    },

    changeDiagnosis: function (idPatient, newDiagnosis) {
        for (let i = 0; i < this.patients.length; i++) {
            if (this.patients[i].id === idPatient) {
                this.patients[i].diagnosis = newDiagnosis;
            }
        }
    },

    printRecommendations: function (recommendations) {
        console.log(recommendations);
    }
};

listPatients.addPatient("Чапаев", "Чапай", "01.01.2022", "Хронический бронхит");
listPatients.printDataPatient(3);
