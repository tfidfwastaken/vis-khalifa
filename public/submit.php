<html>
    <body>
        <?php
        $var1 = $_POST["newsletterName"];
        $var2 = $_POST["newsletterEmail"];
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
