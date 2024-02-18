# Exit Loops with break
* This script will show how a loop iterate through each item in an array using 'for-of' loop
* It enables user to enter a name in the input field and upon clicking search button, it searches for and displays the correspondng phone number from the contacts array
* If the name is not found, it displays the message indicating that the contact was not found

**Step 1**: Data Initialization
   * An array named 'contact' is initialized
  * Each element of this array represents a contact in the format "Name:PhoneNumber"
      * "Asyikin:1111111111",
     * "Graham:2222222222",
     * "Kanye:3333333333",
     * "Mariah:444444444",
     * "Austin:555555555",
   
  
**Step 2**: DOM element Selection
  * Select 3 DOM elements using 'document.querySelector'
  * The elements are: paragraph, input and button


**Step 3**: Event listener set up and handling 
  * get the valuer entered into the input field
  * Convert it to lowercase and store it in 'searchName'
  * Clears the input field to give a cleaner interface for next input on focus on input.focus
  * Clear previous content in para.textContent
  * Iterate through each contact in 'contact' array using 'for-of' loop.
  * For each contact, splits the contact string into an array of two elements using splitContact=contact.split(":")
  * Checks if the lowercase name of contact matches the lowercase search name using (splitContact[0].toLowerCase() === searchName)
  * If a match is found, it updates paragraph with content that shows the contact details accordingly
  * If no match is found, it sets the paragraph contents that indicate as such
  * Break statement is used to exit the loop once a matching contact is found.
