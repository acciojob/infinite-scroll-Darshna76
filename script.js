// Get the ordered list element by ID
const infiList = document.getElementById("infi-list");

// Add 10 list items to the list by default
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `List item ${i}`;
  infiList.appendChild(li);
}

// Add a scroll event listener to the window to detect when the user reaches the end of the list
window.addEventListener("scroll", function() {
  // Get the position of the last list item
  const lastItem = infiList.lastElementChild;
  const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;
  
  // If the user has reached the end of the list, add 2 more list items
   // Add a buffer of 20 pixels to avoid adding items too soon
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = `List item ${infiList.children.length + i}`;
      infiList.appendChild(li);
    }
});
