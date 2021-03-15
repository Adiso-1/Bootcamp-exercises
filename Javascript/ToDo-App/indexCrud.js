const data = [
  { name: "Pini", gender: "Male" },
  { name: "Loreal", gender: "Female" },
  { name: "Martha", gender: "Female" },
];

//container
const container = document.querySelector(".container");
//inputs
const nameInput = document.querySelector("input[name='name']");
const genderSelector = document.querySelector("select[name='gender']");
const updateName = document.querySelector("input[name='update-name']");
const updateGender = document.querySelector("select[name='update-gender']");

//buttons
const createSubmit = document.querySelector("[data-create]");
const updateSubmit = document.querySelector("[data-update]");

//! Read
const renderData = () => {
  container.innerHTML = "";
  data.forEach((person, index) => {
    const nameEl = document.createElement("h2");
    nameEl.textContent = person.name;
    container.appendChild(nameEl);

    const genderEl = document.createElement("p");
    genderEl.textContent = person.gender;
    container.appendChild(genderEl);

    // add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => deleteData(index));
    container.appendChild(deleteBtn);
    
    // add update button
    const updateBtn = document.createElement("button");
    updateBtn.innerText = "Update";
    updateBtn.addEventListener("click", () => {
      updateName.focus();
      updateName.value = person.name;
      updateGender.selectedIndex = person.gender === "Male" ? 0 : 1;
      updateSubmit.setAttribute("data-id", index);
    });
    container.appendChild(updateBtn);
  });
};

//! Create
const createData = () => {
  const name = nameInput.value;
  const gender = genderSelector.value;
  data.push({ name, gender });
  nameInput.value = "";
  genderSelector.selectedIndex = 0;

  renderData();
};

//! Update
const updateData = () => {
  const index = updateSubmit.getAttribute("data-id");
  if (index) {
    const name = updateName.value;
    const gender = updateGender.value;
    // data.splice(index, 1, { name, gender });
    data[index] = { name, gender };
    updateName.value = "";
    updateGender.selectedIndex = 0;
    renderData();
  }
};

//! Delete
const deleteData = (index) => {
  data.splice(index, 1);
  renderData();
};

renderData();

createSubmit.addEventListener("click", createData);
updateSubmit.addEventListener("click", updateData);
