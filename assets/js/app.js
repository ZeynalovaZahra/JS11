let addBtn = document.querySelector("form button");
let surnameInput = document.querySelector("input[name='s_surname']");
let nameInput = document.querySelector("input[name='s_name']");
let ageInput = document.querySelector("input[name='s_age']");
let genderOption = document.querySelector("select");
let table = document.querySelector("table");
let persons = [];
let checkRepeat = false;
const showData = () => {
  let person = persons[persons.length - 1];
  //   console.log(person);
  let tdSurname = document.createElement("td");
  tdSurname.innerText = person.s_surname;
  let tdName = document.createElement("td");
  tdName.innerText = person.s_name;
  let tdAge = document.createElement("td");
  tdAge.innerText = person.s_age;
  let tdGender = document.createElement("td");
  tdGender.innerText = person.s_gender;
  let tdButtons = document.createElement("td");
  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  tdButtons.append(editButton, removeButton);
  let tr = document.createElement("tr");
  if (person.s_gender == "female") {
    tr.classList.add("female");
  } else if (person.s_gender == "male") {
    tr.classList.add("male");
  } else {
    tr.classList.add("error");
  }
  const showData = () => {
    let person = persons[persons.length - 1];

    let tdSurname = document.createElement("td");
    tdSurname.innerText = person.s_surname;

    let tdName = document.createElement("td");
    tdName.innerText = person.s_name;

    let tdAge = document.createElement("td");
    tdAge.innerText = person.s_age;

    let tdGender = document.createElement("td");
    tdGender.innerText = person.s_gender;

    let tdButtons = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
         let removeButton = document.createElement("button");
         removeButton.innerText = "Remove";
       tdButtons.append(editButton, removeButton);

         let tr = document.createElement("tr");
         if (person.s_gender == "female") {
           tr.classList.add("female");
         } else if (person.s_gender == "male") {
           tr.classList.add("male");
         } else {
           tr.classList.add("error");
         }

       tr.append(tdSurname, tdName, tdAge, tdGender, tdButtons);
         table.appendChild(tr);

         editButton.addEventListener("click", () => {
           let editForm = document.getElementById("editForm");

editForm.querySelector("input[name='s_surname']").value = person.s_surname;
      editForm.querySelector("input[name='s_name']").value = person.s_name;
      editForm.querySelector("input[name='s_age']").value = person.s_age;
      editForm.querySelector("select").value = person.s_gender;

      editForm.style.display = "block";

      editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        person.s_surname = editForm.querySelector("input[name='s_surname']").value;
        person.s_name = editForm.querySelector("input[name='s_name']").value;
        person.s_age = editForm.querySelector("input[name='s_age']").value;
        person.s_gender = editForm.querySelector("select").value;

        tdSurname.innerText = person.s_surname;
        tdName.innerText = person.s_name;
        tdAge.innerText = person.s_age;
        tdGender.innerText = person.s_gender;

        editForm.style.display = "none";
      });
    });
    removeButton.addEventListener("click", () => {
      tr.remove();
      checkRepeat = false;
      persons = persons.filter(
        (p) =>
         p.s_surname !== tdSurname.innerText ||
         p.s_name !== tdName.innerText ||
         p.s_age !== tdAge.innerText
     );
   });
 };
      tr.append(tdSurname, tdName, tdAge, tdGender, tdButtons);
      table.appendChild(tr);
      removeButton.addEventListener("click", () => {
        tr.remove();
        checkRepeat = false;
        console.log(checkRepeat);
        persons = persons.filter(
          (p) =>
            p.s_surname !== tdSurname.innerText ||
            p.s_name !== tdName.innerText ||
            p.s_age !== tdAge.innerText
        );
        console.log(persons);
      });
    };
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let addSurname = surnameInput.value;
      let addName = nameInput.value;
      let addAge = ageInput.value;
      let addGender = genderOption.value;
      persons.map((p) => {
        if (
          p.s_surname === addSurname &&
          p.s_name === addName &&
          p.s_age === addAge
        ) {
          checkRepeat = true;
        } else {
          checkRepeat = false;
        }
        console.log(persons);
        console.log(checkRepeat);
      });

      console.log(checkRepeat);
      if (checkRepeat) return;
      persons.push({
        s_surname: addSurname,
        s_name: addName,
        s_age: addAge,
        s_gender: addGender,
      });

     surnameInput.value = "";
       nameInput.value = "";
       ageInput.value = "";
       genderOption.value = "";
       showData();
     });
    const showDatatype = () => {
      let person = persons[persons.length - 1];

      let tdSurname = document.createElement("td");
      tdSurname.innerText = person.s_surname;

      let tdName = document.createElement("td");
      tdName.innerText = person.s_name;

      let tdAge = document.createElement("td");
      tdAge.innerText = person.s_age;

      let tdGender = document.createElement("td");
      tdGender.innerText = person.s_gender;

      let tdButtons = document.createElement("td");
      let editButton = document.createElement("button");
      editButton.innerText = "Edit";
      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      tdButtons.append(editButton, removeButton);

      let tr = document.createElement("tr");
      if (person.s_gender == "female") {
        tr.classList.add("female");
      } else if (person.s_gender == "male") {
        tr.classList.add("male");
      } else {
        tr.classList.add("error");
      }

      tr.append(tdSurname, tdName, tdAge, tdGender, tdButtons);
      table.appendChild(tr);

      editButton.addEventListener("click", () => {
        let editForm = document.getElementById("editForm");

        editForm.querySelector("input[name='s_surname']").value = person.s_surname;
        editForm.querySelector("input[name='s_name']").value = person.s_name;
        editForm.querySelector("input[name='s_age']").value = person.s_age;
        editForm.querySelector("select").value = person.s_gender;
        editForm.style.display = "block";

        editForm.addEventListener("submit", (e) => {
          e.preventDefault();
          person.s_surname = editForm.querySelector("input[name='s_surname']").value;
          person.s_name = editForm.querySelector("input[name='s_name']").value;
          person.s_age = editForm.querySelector("input[name='s_age']").value;
          person.s_gender = editForm.querySelector("select").value;

          tdSurname.innerText = person.s_surname;
          tdName.innerText = person.s_name;
          tdAge.innerText = person.s_age;
          tdGender.innerText = person.s_gender;

          editForm.style.display = "none";
        });
      });

      removeButton.addEventListener("click", () => {
        tr.remove();
        checkRepeat = false;
        persons = persons.filter(
          (p) =>
            p.s_surname !== tdSurname.innerText ||
            p.s_name !== tdName.innerText ||
            p.s_age !== tdAge.innerText
        );
      });
    };













































