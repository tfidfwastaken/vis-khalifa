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
	        $servername = "localhost";
			$username = "root";
			$password = "password";
			$dbname = "algo";
			$conn = new mysqli($servername,$username,$password,$dbname);
			if($conn->connect_error)
			{
				die("Connection failed: " . $conn->connect_error);
			}
			$sql = "INSERT INTO users (name,email) VALUES ('$var1' , '$var2');";
			if ($conn->query($sql) === TRUE) 
			{
		  		echo "New record created successfully";
			}
			else 
			{
		  		echo "Error: " . $sql . "<br>" . $conn->error;
			}
			$conn->close();
			header('Location: index.html');
        ?>
    </body>
</html>