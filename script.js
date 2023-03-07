<script>
		// Get the command input and all result elements
		const commandInput = document.getElementById('command-input');
		const results = document.querySelectorAll('.result');
		const helpText = 'Available commands: about, portfolio, blog, contact';
		
		// Add event listener for the command input
		commandInput.addEventListener('keydown', (event) ={">"} {
			if (event.keyCode === 13) { // Enter key pressed
				const command = commandInput.value.trim().toLowerCase();
				let resultFound = false;
				
				// Loop through all results and hide them by default
				results.forEach((result) ={">"} {
					result.classList.remove('show');
					result.classList.add('hide');
					
					// If the command matches the result ID, show the result
					if (result.id === command) {
						result.classList.remove('hide');
						result.classList.add('show');
						resultFound = true;
					{"}"}
				{"}"});
				
				// If no result was found, display an error message
				if (!resultFound) {
					if (command === 'help') {
						alert(helpText);
					{"}"} else {
						alert('Command About || Blog || Portfolio || Contact');
					{"}"}
				{"}"}
				
				// Clear the command input
				commandInput.value = '';
			}
		});

		// Add event listener for the suggestion link
		const suggestionLink = document.getElementById('suggestion-link');
		suggestionLink.addEventListener('click', (event) => {
			event.preventDefault();
			alert(helpText);
		});

		
	</script>
