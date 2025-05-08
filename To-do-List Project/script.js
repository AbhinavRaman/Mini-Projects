function updateTime() {
    const timer = document.getElementById("timer");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    timer.textContent = formattedTime;

    // Update background image based on the current time
    updateBackground(now.getHours());
}

function updateBackground(hour) {
    const body = document.body;
    let bgImage;

    if (hour >= 6 && hour < 12) {
        // Morning
        bgImage = "./Assets/tianshu-liu-aqZ3UAjs_M4-unsplash.jpg";
    } else if (hour >= 12 && hour < 18) {
        // Afternoon
        bgImage = "./Assets/dario-jud-h53hYVUnX2g-unsplash.jpg";
    } else if (hour >= 18 && hour < 21) {
        // Evening
        bgImage = "./Assets/levon-vardanyan-_EpaiWp5yC8-unsplash.jpg";
    } else {
        // Night
        bgImage = "./Assets/nathan-anderson-ohx4v80mJm8-unsplash.jpg";
    }

    // Apply the background image to the body
    body.style.backgroundImage = `url(${bgImage})`;
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
}

setInterval(updateTime, 1000);
updateTime();

function addTodo() {
    const input = document.getElementById("todoInput");
    const todoList = document.querySelector(".todoList");
    const todoText = input.value.trim();

    if (todoText) {
        // Create a new to-do item
        const todoItem = document.createElement("div");
        todoItem.classList.add("todoItem");

        // Create the text element
        const text = document.createElement("span");
        text.textContent = todoText;

        // Create a container for buttons
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        // Create the tick button
        const tickButton = document.createElement("button");
        tickButton.innerHTML = "👍";
        tickButton.onclick = () => text.classList.toggle("done");

        // Create the cross button
        const crossButton = document.createElement("button");
        crossButton.innerHTML = "⚔️";
        crossButton.onclick = () => todoItem.remove();

        // Append the buttons to the buttons container
        buttons.appendChild(tickButton);
        buttons.appendChild(crossButton);

        // Append text and buttons to the to-do item
        todoItem.appendChild(text);
        todoItem.appendChild(buttons);

        // Add the item to the to-do list
        todoList.appendChild(todoItem);

        // Clear the input field
        input.value = "";
    } else {
        alert("Please enter a to-do item!");
    }
}
 