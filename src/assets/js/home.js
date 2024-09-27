// Select all list items that contain a sublist
const listItems = document.querySelectorAll('.list-item');
const sublistItems = document.querySelectorAll('.sublist-item');

listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // Select the current sublist and icon
        const sublist = item.querySelector('.sublist');
        const icon = item.querySelector('.icon');
        
        // If the clicked sublist is already open, close it
        if (sublist.classList.contains('show')) {
            sublist.classList.remove('show');
            icon.textContent = '+';
            setTimeout(() => {
                sublist.style.display = 'none';
            }, 500);  // Duration of the CSS transition (0.5s)
        } else {
            // Close all other sublists and reset their icons to plus
            listItems.forEach(list => {
                const otherSublist = list.querySelector('.sublist');
                const otherIcon = list.querySelector('.icon');
                if (otherSublist.classList.contains('show')) {
                    otherSublist.classList.remove('show');
                    otherIcon.textContent = '+';
                    setTimeout(() => {
                        otherSublist.style.display = 'none';
                    }, 500);  // Duration of the CSS transition (0.5s)
                }
            });
            
            // Open the clicked sublist and change the icon to minus
            sublist.style.display = 'block';
            setTimeout(() => {
                sublist.classList.add('show');
                icon.textContent = '−';  // Change to minus sign
            }, 10);  // Small delay to allow transition
        }

        // Stop the click event from affecting other elements
        event.stopPropagation();
    });
});

// Prevent sublist items from triggering the list item click event
sublistItems.forEach(subItem => {
    subItem.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents click event on sublist items from bubbling up to parent
    });
});
