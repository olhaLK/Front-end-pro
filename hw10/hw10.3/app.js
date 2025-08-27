const contactBook = {
    contacts: [],

    findContact(name) {
        let contact = this.contacts.find(c => c.name === name);
        
        if (contact) {
            alert(`Inormation about "${contact.name}":
                Phone: ${contact.phone}
                Email: ${contact.email}`);
        } else {
            alert("Nobody found with this name")
        }
    },

    addContact(name, phone, email) {
        this.contacts.push({name, phone, email});
        alert("New contact added")
    }
};



while (true) {
    const userNum = parseInt(prompt(`Chose option:
        1. Find contact by the name
        2. Add new contact
        3. Exit`));


    switch(userNum) {
        case 1: 
            let findName = prompt("Enter who you wanna find");
            contactBook.findContact(findName);
            break;
        case 2:
            let addName = prompt("Enter name for new contact");
            let addPhone = prompt("Enter phone for new contact");
            let addEmail = prompt("Enter email for new contact");
            contactBook.addContact(addName, addPhone, addEmail);
            break;
        case 3: 
            break;
        default:
            alert("Invalid option");
    }

    if (userNum === 3) {
        break;
    }
}
