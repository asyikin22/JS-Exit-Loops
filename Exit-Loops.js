const contacts = [                                         //Data Initialization

    "Asyikin:1111111111",
    "Graham:2222222222",
    "Kanye:3333333333",
    "Mariah:444444444",
    "Austin:555555555",
];


const para = document.querySelector("p");                  //DOM Element Selection
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {                      //Event Listener Setup
    const searchName = input.value.toLowerCase();          //Event Handling
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }

    if (para.textContent === "") {
        para.textContent = "Contact not found in the phone book.";
    }
});



