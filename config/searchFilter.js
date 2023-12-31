function filterList() {
  // Get user input
  var userInput = document.getElementById("searchInput").value.toLowerCase();

  // Get the list and list items
  var itemList = document.getElementById("itemList");
  var items = itemList.getElementsByTagName("li");

  // Loop through each item
  for (var i = 0; i < items.length; i++) {
    var itemText = items[i].textContent.toLowerCase();

    // Check if the item matches the user input
    if (itemText.includes(userInput)) {
      // If it does, display the item
      items[i].style.display = "block";
    } else {
      // If it doesn't, hide the item
      items[i].style.display = "none";
    }
  }
}
