const loadData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones)
  displayPhones(phones);
};
loadData();
const displayPhones = (phones) => {
  const cardContainer = document.getElementById("cardContainer");
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
};
