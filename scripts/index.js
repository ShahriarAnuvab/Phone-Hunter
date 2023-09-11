const loadData = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones)
  displayPhones(phones, isShowAll);
};
// loadData();
const displayPhones = (phones, isShowAll) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.textContent = "";
  // console.log(phones.length);
  // phones = phones.slice(0, 12);
  const showAllContainer = document.getElementById("showAllContainer");
  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  if(!isShowAll){
    phones =  phones.slice(0, 12);
  }
  else{

  }
  // console.log("isShowAll", isShowAll);
  phones.forEach((phone) => {
    // console.log(phone)
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl h-[650px] lg:max-w-[350px] xl:max-w-[320px] bg-base-100 xl:gap-4">
    <figure class="px-10 pt-10">
      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title text-[#100F0F] text-2xl md:text-3xl font-semibold my-2">${phone.phone_name}</h2>
      <p class="text-[#706F6F] text-lg font-normal">There are many variations of passages of available, but the majority have suffered</p>
      <p class="text-[#100F0F] text-xl font-semibold">$999</p>
      <div class="card-actions">
        <button class="btn bg-[#0D6EFD] text-white rounded-lg ">Show Details</button>
      </div>
    </div>
  </div>`;
    cardContainer.appendChild(div);
  });
  toggleHandler(false);
};

// isShowAll is for show all the phones
const handleSearch = (isShowAll) => {
  toggleHandler(true);
  const searchBox = document.getElementById("searchBox");
  const searchText = searchBox.value;
  // searchBox.value = "";
  loadData(searchText, isShowAll);
  // console.log(searchText);
};

const toggleHandler = (isLoading) => {
  const toggleContainer = document.getElementById("toggleContainer");
  if (isLoading) {
    toggleContainer.classList.remove("hidden");
  } else {
    toggleContainer.classList.add("hidden");
  }
};
const showAll = () => {
  handleSearch(true);
};
