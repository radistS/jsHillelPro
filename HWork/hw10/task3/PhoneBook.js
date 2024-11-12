function ContactBook() {
  this.contacts = [];

  this.add = function(name, phone, email) {
    this.contacts.push({ name, phone, email });
    console.log(`contact ${name} added`);
  };

  this.findByName = function(name) {
    const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (contact) {
      console.log(`Entity: name: ${contact.name}, phone: ${contact.phone}, email: ${contact.email}`);
    } else {
      console.log("Entity not found");
    }
  };
}

const myContactBook = new ContactBook();

myContactBook.add("Stepurko", "+38050695875", "olexandr@example.com");

myContactBook.findByName("Stepurko");
myContactBook.findByName("Ivanov");
