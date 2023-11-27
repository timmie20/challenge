const subMenu = document.querySelector(".setup-guide");
const dropDownBtn = document.querySelector(".drop-down");
const menuItems = document.querySelector(".menu-items");
const cancelBtn = document.querySelector(".cancelBtn");
const trialDiv = document.querySelector(".trial-block");
const alertTab = document.querySelector(".bell-icon");
const alertDropDown = document.querySelector(".alert-dropdown");
const profileTab = document.querySelector(".profile");
const profileDropDown = document.querySelector(".profile-drop-down");
const progressBar = document.querySelector(".progress");

const itemsData = [
  {
    id: 1,
    title: "Customize your online store",
    description:
      "Choose a theme and your logo, colors, and images to reflect your brand.",
    link: "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
    btn: "Customize theme",
    imageUrl: "https://crushingit.tech/hackathon-assets/customise-store.png",
  },
  {
    id: 2,
    title: "Add your first Product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    link: "https://help.shopify.com/en/manual/products/add-update-products",
    btn: "Add a product",
    btn2: "Import product",
    imageUrl: "https://crushingit.tech/hackathon-assets/product.png",
  },
  {
    id: 3,
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    link: "https://help.shopify.com/en/manual/domains",
    btn: "Add domain",
    imageUrl: "https://crushingit.tech/hackathon-assets/website.png",
  },
  {
    id: 4,
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store",
    link: "https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-online-store-name-and-legal-business-name",
    btn: "Name store",
    imageUrl: "https://crushingit.tech/hackathon-assets/name-store.png",
  },
  {
    id: 5,
    title: "Set up a payment provider",
    description:
      "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
    link: "https://help.shopify.com/en/manual/payments",
    btn: "Set up payment",
    imageUrl: "https://crushingit.tech/hackathon-assets/payment.png",
  },
];

dropDownBtn.addEventListener("click", function () {
  subMenu.classList.toggle("open-menu");
});

alertTab.addEventListener("click", () => {
  alertDropDown.classList.toggle("open-drop-down");
});
profileTab.addEventListener("click", () => {
  profileDropDown.classList.toggle("open-drop-down");
});

cancelBtn.addEventListener("click", () => {
  trialDiv.style.display = "none";
});

let currentlyOpen = 1;
let isCurrentlyOpen = false;

const renderUI = () => {
  // Update the open class of existing item containers
  const existingItemContainers = document.querySelectorAll(".item");

  existingItemContainers.forEach((itemContainer) => {
    if (itemContainer.dataset.itemId === currentlyOpen) {
      itemContainer.classList.add("open");
      isCurrentlyOpen = true;
    } else {
      itemContainer.classList.remove("open");
    }
  });

  // Only re-render the UI if the currently open item has changed
  if (!isCurrentlyOpen) {
    // Clear the existing contents of menuItems
    menuItems.innerHTML = "";

    itemsData.map((item, index) => {
      const itemContainer = document.createElement("div");
      const leftDiv = document.createElement("div");
      const header = document.createElement("span");
      const descriptionDiv = document.createElement("div");
      const paragraph = document.createElement("p");
      const button = document.createElement("button");
      const imgElement = document.createElement("img");
      const checkbox = document.createElement("input");

      itemContainer.classList = `item ${
        item.id === currentlyOpen ? "open" : ""
      }`;
      itemContainer.dataset.itemId = item.id; // Add a data-itemId attribute to store the item's id
      leftDiv.classList = "left";
      header.classList = "header";
      descriptionDiv.classList = "description";
      button.classList = "primary-btn";
      imgElement.classList = "item-img";
      checkbox.type = "checkbox";
      checkbox.classList = "checkbox";

      header.innerHTML = `
        ${checkbox.outerHTML}
        <h5>${item.title}</h5>`;

      paragraph.innerHTML = `${item.description} <a href=${item.link}>Learn more</a> `;
      button.textContent = item.btn;
      imgElement.src = item.imageUrl;

      descriptionDiv.appendChild(paragraph);
      descriptionDiv.appendChild(button);

      if (index === 1) {
        //since the content of id-2 / index place of 1 has different data structure
        const buttonContainer = document.createElement("div");
        const button2 = document.createElement("button");
        buttonContainer.classList = "btn-container";
        button2.textContent = item.btn2;
        button2.classList = "import-btn";
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(button2);
        descriptionDiv.appendChild(buttonContainer);
      }

      leftDiv.appendChild(header);
      leftDiv.appendChild(descriptionDiv);
      itemContainer.appendChild(leftDiv);
      itemContainer.appendChild(imgElement);
      a;
      // Append the itemContainer to menuItems
      menuItems.appendChild(itemContainer);
    });
  }
  isCurrentlyOpen = false;
};

renderUI();

const itemDivs = document.querySelectorAll(".item");
itemDivs.forEach((itemDiv) => {
  itemDiv.addEventListener("click", (e) => {
    const clickedItemId = e.currentTarget.dataset.itemId; // Get the item's id from the data-itemId attribute
    currentlyOpen = clickedItemId;
    renderUI(); // Re-render the UI to update the open item
  });
});
