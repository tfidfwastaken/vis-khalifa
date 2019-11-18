<html>
    <body>
        <?php
        	$timeout=0;
		    $url="newsletter.html";
		    $flag = 1;
	        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	        	if (!empty($_POST["newsletterName"]) && !empty($_POST["newsletterEmail"])) {
					$name = $_POST["newsletterName"];
		        	$email = $_POST["newsletterEmail"];
		        	
		        	//regex to valiadte email
					if (!preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/", $email)) {
 						echo "<script type='text/javascript'>alert('Invalid Email Format');</script>";
 						echo "<meta http-equiv='refresh' content='$timeout;$url' />";
 						$flag = 0;
					}
		        } else {
 					echo "<script type='text/javascript'>alert('Name or Email cannot be empty');</script>";
 					echo "<meta http-equiv='refresh' content='$timeout;$url' />";
 					$flag = 0;
		        }
			} else {
 				echo "<script type='text/javascript'>alert('Invalid Request');</script>";
 				echo "<meta http-equiv='refresh' content='$timeout;$url' />";
 				$flag = 0;
			} 
			//validation successful!
	        $servername = "localhost";
			$username = "root";
			$password = "password";
			$dbname = "algo";
			$conn = new mysqli($servername,$username,$password,$dbname);
			if($conn->connect_error && $flag == 1)
			{
				echo "<script type='text/javascript'>alert('Connection failed');</script>";
 				echo "<meta http-equiv='refresh' content='$timeout;$url' />";
			}
			if($flag == 1) {
				$sql = "INSERT INTO users (name,email) VALUES ('$name' , '$email');";
			
				if ($conn->query($sql) === TRUE) 
				{
					echo "<script type='text/javascript'>alert('Thank you for signing up!');</script>";
	 				echo "<meta http-equiv='refresh' content='$timeout;$url' />";
				}
				else 
				{
	 				echo "<meta http-equiv='refresh' content='$timeout;$url' />";
				}
			}
			$conn->close();
        ?>
    </body>
</html>