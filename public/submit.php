<html>
    <body>
        <?php
	        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	        	if (!empty($_POST["newsletterName"]) && !empty($_POST["newsletterEmail"])) {
					$name = $_POST["newsletterName"];
		        	$email = $_POST["newsletterEmail"];
		        	//regex to valiadte email
					if (!preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/", $email)) {
 						exit('Invalid email format');
					}
		        } else {
		        	exit('Name or Email cannot be empty');
		        }
			} else {
				exit('Invalid Request');
			} 
			//validation successful!
			header('Location: index.html');
        ?>
    </body>
</html>